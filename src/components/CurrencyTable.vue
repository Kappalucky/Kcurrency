<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Price (USD)</th>
                    <th scope="col">1H</th>
                    <th scope="col">1D</th>
                    <th scope="col">1W</th>
                    <th scope="col">Market Cap (USD)</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="coin in coins.data" :key="coin.id">
                    <td>{{ coin.rank }}</td>
                    <td>
                        <!--<img v-bind:src="getCoinImage(coin.symbol)"-->{{ coin.name }}</td>
                    <td>{{ coin.symbol }}</td>
                    <td>{{ coin.quotes.USD.price | currency }}</td>
                    <td :style="getColor(coin.quotes.USD.percent_change_1h)">
                        <span v-if="coin.quotes.USD.percent_change_1h > 0">+</span>{{ coin.quotes.USD.percent_change_1h }}%
                    </td>
                    <td :style="getColor(coin.quotes.USD.percent_change_24h)">
                        <span v-if="coin.quotes.USD.percent_change_24h > 0">+</span>{{ coin.quotes.USD.percent_change_24h }}%
                    </td>
                    <td :style="getColor(coin.quotes.USD.percent_change_7d)">
                        <span v-if="coin.quotes.USD.percent_change_7d > 0">+</span>{{ coin.quotes.USD.percent_change_7d }}%
                    </td>
                    <td>{{ coin.quotes.USD.market_cap | currency }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios";

let CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com";
let COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";
let UPDATE_INTERVAL = 60 * 1000;

export default {
  name: "CurrencyTable",
  data: function() {
    return {
      coins: [],
      coinData: {}
    };
  },
  created() {
    this.getCoins();
    this.getCoinData();
  },
  /*updated() {
                                                          setInterval(() => {
                                                            this.getCoins();
                                                          }, UPDATE_INTERVAL);
                                                        },*/
  methods: {
    // Loads currency data. Data used to find logos for each currency.
    getCoinData: function() {
      axios
        .get(CRYPTOCOMPARE_API_URI + "/data/all/coinlist")
        .then(response => {
          this.coinData = response.data.Data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    // Get top 10 cryptocurrencies by value.
    getCoins: function() {
      axios
        .get(COINMARKETCAP_API_URI + "/v2/ticker/?limit=10")
        .then(response => {
          console.log("request successful");
          this.coins = response.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    // Given cryptocurrency ticket symbol, return currency logo image.
    getCoinImage: function(symbol) {
      return "https://www.cryptocompare.com" + this.coinData[symbol].ImageUrl;
    },
    //return a css color depending on value passed, red - negative, green - positive
    getColor: function(percentage) {
      return percentage > 0 ? "color:green;" : "color:red;";
    }
  }
};
</script>

<style scoped>
</style>
