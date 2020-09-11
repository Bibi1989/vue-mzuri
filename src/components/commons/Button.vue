<template>
  <button v-bind:style="{ background: styles.background, color: styles.color }">
    {{ styles.label }}
  </button>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    name: "Button",
    props: {
      btnStyle: Object,
    },
    data() {
      return {
        styles: this.$props.btnStyle,
      };
    },
  });
</script>

<style lang="scss" scoped>
  button {
    width: 180px;
    height: 34px;
    border: none;
    border-radius: 4px;
    margin-top: 50px;
  }
</style>
