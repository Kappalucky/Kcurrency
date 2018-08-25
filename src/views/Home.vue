<template>
  <div class="home">
    <app-header/>
    <currency-table/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import CurrencyTable from "@/components/CurrencyTable.vue";

export default {
  name: "home",
  components: {
    AppHeader,
    CurrencyTable
  }
};
</script>
