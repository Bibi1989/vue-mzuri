<template>
  <div class="input" v-bind:style="{ background: styles.background }">
    <div v-if="!styles.select">
      <input
        type="text"
        v-bind:value="styles.value"
        v-bind:placeholder="styles.placeholder"
      />
      <div v-if="styles.value" class="label">
        {{ styles.placeholder }}
      </div>
    </div>
    <div v-else>
      <select>
        <option value="">--Select Source--</option>
        <option
          v-for="(value, i) in styles.selectContents"
          :key="i"
          v-bind:value="value"
          >{{ value }}</option
        >
      </select>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    name: "Input",
    props: {
      inputStyle: Object,
    },
    data() {
      return {
        styles: this.$props.inputStyle,
      };
    },
    created() {
      console.log({ sty: this.styles });
    },
  });
</script>

<style lang="scss" scoped>
  .input {
    background: #eeeeee;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 20px;
    position: relative;

    .label {
      text-align: left;
      font-size: 12px;
      position: absolute;
      top: -9px;
      left: 8px;
      background: white;
    }

    input,
    select {
      padding: 9px 8px;
      width: 100%;
      background-color: transparent;
      display: block;
      border: none;
      outline: none;
    }
  }
</style>
