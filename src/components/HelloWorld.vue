<template>
  <div>
    <NE20 />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import NE20 from "./Funds/NE-26.vue";

  export default Vue.extend({
    name: "HelloWorld",
    components: {
      NE20,
    },
    props: {
      msg: String,
    },
    data() {
      return {
        label: "Update Cash Balance",
        background: "#0979A2",
        color: "#ffffff",
      };
    },
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
