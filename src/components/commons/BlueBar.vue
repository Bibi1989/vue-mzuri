<template>
  <div class="modal_header">
    <p>Insufficient Funds</p>
    <img src="../../assets/FundAssets/close_dark.svg" alt="" />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "BlueBar",
  });
</script>

<style lang="scss" scoped>
  .modal_header {
    background: rgba(167, 214, 231, 0.5);
    border-radius: 4px 4px 0px 0px;
    padding: 11px 13px 8px 13px;
    display: flex;
    justify-content: space-between;

    p {
      margin: 0;
    }

    p {
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
    }
  }
</style>
