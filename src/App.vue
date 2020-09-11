<template>
  <div id="app">
    <div id="nav">
      <router-link to="/ne20">NE20</router-link> |
      <router-link to="/ne20b">NE20B</router-link> |
      <router-link to="/ne21">NE21</router-link> |
      <router-link to="/ne22">NE22</router-link> |
      <router-link to="/ne23">NE23</router-link> |
      <router-link to="/ne24">NE24</router-link> |
      <router-link to="/ne25">NE25</router-link> |
      <router-link to="/ne26">NE26</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
