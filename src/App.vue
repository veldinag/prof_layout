<template>
  <div class="container">
    <page-header />
    <router-view />
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";

export default {
  components: {
    PageHeader,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Play", sans-serif;
  color: #142b51;
}

h1 {
  font-size: 48px;
  font-weight: 400;
}

a {
  text-decoration: none;
  font-size: 36px;
}

ul {
  list-style-type: none;
  list-style-position: inside;
}

.container {
  margin: 0 auto;
  width: 1140px;
}
</style>
