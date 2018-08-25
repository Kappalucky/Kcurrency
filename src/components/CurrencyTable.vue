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
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios";
let CRYPTOCOMPARE_API_URI = "https://www.cryptocompare.com";
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
  methods: {
    // Loads currency data. Data used to find logos for each currency.
    getCoinData: function() {
      axios
        .get(CRYPTOCOMPARE_API_URI + "/api/data/coinlist")
        .then(response => {
          this.coinData = response.data.Data;
          this.getCoins();
        })
        .catch(err => {
          this.getCoins();
          console.error(err);
        });
    },
    // Get top 10 cryptocurrencies by value.
    getCoins: function() {
      axios
        .get(COINMARKETCAP_API_URI + "/v1/ticker/?limit=10")
        .then(response => {
          this.coins = response.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    // Given cryptocurrency ticket symbol, return currency logo image.
    getCoinImage: function(symbol) {
      return CRYPTOCOMPARE_API_URI + this.coinData[symbol].ImageUrl;
    }
  }
};
</script>

<style scoped>
</style>
