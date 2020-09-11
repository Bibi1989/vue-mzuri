<template>
  <div>
    <div class="modal">
      <BlueBar />
      <div class="modal_content">
        <p>You only have ₦ 1000 Cash at hand.</p>
        <Buttons v-bind:btnStyle="{ label, background, color }" />
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Buttons from "../commons/Button.vue";
  import BlueBar from "../commons/BlueBar.vue";

  export default Vue.extend({
    components: {
      Buttons,
      BlueBar,
    },
    name: "NE20",
    data() {
      return {
        label: "Update Cash Balance",
        background: "#0979A2",
        color: "#ffffff",
      };
    },
  });
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    /* padding: 15px; */
    background: white;
    border-radius: 10px;
    margin: auto;
    padding-bottom: 15px;

    @media (max-width: 600px) {
      width: calc(100% - 20px);
    }

    p {
      margin: 0;
    }

    .modal_header {
      background: rgba(167, 214, 231, 0.5);
      border-radius: 4px 4px 0px 0px;
      padding: 11px 13px 8px 13px;
      display: flex;
      justify-content: space-between;

      p {
        font-family: Lato;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
      }
    }

    .modal_content {
      padding: 0 13px;
      p {
        padding-top: 13px;
        /* text-align: left; */
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #333333;
      }
    }
  }
</style>
