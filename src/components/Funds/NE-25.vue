<template>
  <div class="form">
    <BlueBar />
    <form>
      <div class="div_group">
        <Input
          v-for="(content, i) in contents"
          :key="i"
          v-bind:inputStyle="{
            value: content.value,
            placeholder: content.placeholder,
            background: content.background,
            select: content.select,
            selectContents: content.selectContents,
          }"
        />
      </div>
      <div class="grid">
        <Input
          v-for="(content, i) in content2"
          :key="i"
          v-bind:inputStyle="{
            value: content.value,
            placeholder: content.placeholder,
            background: content.background,
            select: content.select,
            selectContents: content.selectContents,
          }"
        />
      </div>
      <div class="div_group">
        <Input
          v-for="(content, i) in content3"
          :key="i"
          v-bind:inputStyle="{
            value: content.value,
            placeholder: content.placeholder,
            background: content.background,
            select: content.select,
            selectContents: content.selectContents,
          }"
        />
      </div>
      <Button v-bind:btnStyle="{ label, background, color }" />
    </form>
  </div>
</template>

<script>
  import Vue from "vue";
  import Input from "../commons/Input.vue";
  import BlueBar from "../commons/BlueBar.vue";
  import Button from "../commons/Button.vue";

  export default Vue.extend({
    components: {
      Input,
      BlueBar,
      Button,
    },
    data() {
      return {
        contents: [
          {
            id: 1,
            value: "₦ 1,000",
            placeholder: "Previous Cash Balance",
            background: "#eeeeee",
            select: false,
          },
          {
            id: 2,
            value: "₦ 1,000",
            placeholder: "Previous Cash Balance",
            background: "#ffffff",
            select: true,
            selectContents: [
              "Access Bank (₦) [₦ 1,500,000],",
              "Access Bank ($) [$5000]",
              "Stanbic (₦) [₦ 400,300]",
              "Other",
            ],
          },
          {
            id: 3,
            value: "$ 500",
            placeholder: "Amount ($)",
            background: "#ffffff",
            select: false,
          },
        ],
        content2: [
          {
            id: 1,
            value: "₦ 470",
            placeholder: "Exchange Rate ₦",
            background: "#ffffff",
            select: false,
          },
          {
            id: 2,
            value: "$ 1",
            placeholder: "Exchange Rate $",
            background: "#ffffff",
            select: false,
          },
        ],
        content3: [
          {
            id: 1,
            value: "₦ 235,000",
            placeholder: "Amount (₦)",
            background: "#eeeeee",
            select: false,
          },
          {
            id: 2,
            value: "₦ 236,000",
            placeholder: "New Cash Balance",
            background: "#eeeeee",
            select: false,
          },
        ],
        label: "Submit",
        background: "#0979A2",
        color: "#ffffff",
      };
    },
  });
</script>

<style lang="scss" scoped>
  .form {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: white;
    border-radius: 10px;
    margin: auto;
    padding-bottom: 15px;

    @media (max-width: 600px) {
      width: calc(100% - 20px);
    }

    form {
      padding: 15px;

      .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
      }
    }
  }
</style>
