<template>
  <div class="wrapper">
    <router-link to="/">
      <img src="img/logo.png" alt="logo" />
    </router-link>
    <p>Скрипты телефонных переговоров</p>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #142b51;
  padding: 30px 0;
}
img {
  width: 300px;
}
p {
  font-size: 28px;
  font-weight: bold;
  color: #0089cf;
}
</style>
