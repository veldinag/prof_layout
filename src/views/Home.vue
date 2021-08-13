<template>
  <div>
    <ul class="first">
      <li :key="member.id" v-for="member in members">
        <h1>{{ member.linkText }}</h1>
        <ul class="second">
          <li :key="variants.id" v-for="variants in member.variants">
            <router-link
              class="link"
              :to="'/scripts/' + member.id + '/' + variants.id + '/1'"
            >
              {{ variants.linkText }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    members() {
      return this.$store.getters.getMembers;
    },
  },
  created() {
    this.$store.commit("setMember", []);
    this.$store.commit("setAction", {});
    this.$store.commit("setPhraseId", 1);
  },
};
</script>

<style scoped>
div {
  margin: 0 auto;
  width: 65%;
}
.first li h1 {
  margin-bottom: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
  font-size: 56px;
  font-weight: bold;
  border-bottom: 1px solid #142b51;
}
.second li {
  margin-left: 30px;
  padding: 5px;
}
.second li a {
  font-size: 42px;
  color: #0089cf;
  transition-duration: 0.5s;
}
.second li a:hover {
  color: #142b51;
  padding-left: 5px;
}
</style>
