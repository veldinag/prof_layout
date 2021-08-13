<template>
  <div>
    <h4>
      {{ action.linkText }} для сотрудника категории "{{ member.linkText }}"
    </h4>
    <h2>{{ phrase.text }}</h2>
    <router-link
      class="next"
      v-if="nextPhraseId > 0"
      :to="'/scripts/' + member.id + '/' + action.id + '/' + nextPhraseId"
      >Далее -></router-link
    >
    <router-link class="next" v-else-if="nextPhraseId < 0" to="/"
      >Закончить</router-link
    >
    <ul v-if="answers">
      <li class="item" v-for="answer in answers" :key="answer.id">
        <router-link
          :to="
            '/scripts/' + member.id + '/' + action.id + '/' + answer.phraseId
          "
          >{{ answer.text }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Scripts",
  computed: {
    member() {
      return this.$store.getters.getMember;
    },
    action() {
      return this.$store.getters.getAction;
    },
    phrase() {
      return this.action.phrases.find(
        (item) => item.id === this.$store.getters.getPhraseId
      );
    },
    nextPhraseId() {
      return this.phrase.nextPhraseId;
    },
    answers() {
      let answers = [];
      const answerIds = this.phrase.answerIds;
      if (answerIds) {
        for (let i = 0; i < answerIds.length; i++) {
          const answer = this.action.answers.find(
            (item) => item.id === answerIds[i]
          );
          answers.push(answer);
        }
      }
      return answers;
    },
  },
  watch: {
    "$route.params.phraseId"() {
      this.$store.commit("setPhraseId", parseInt(this.$route.params.phraseId));
    },
  },
  created() {
    this.$store.commit(
      "setMember",
      this.$store.getters.getMembers.find(
        (item) => item.id === parseInt(this.$route.params.memberId)
      )
    );
    this.$store.commit(
      "setAction",
      this.$store.getters.getMember.variants.find(
        (item) => item.id === parseInt(this.$route.params.actionId)
      )
    );
  },
};
</script>

<style scoped>
div {
  position: relative;
}
h4 {
  font-size: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
}
h2 {
  font-size: 36px;
  border: 1px solid #142b51;
  border-radius: 5px;
  color: #142b51;
  padding: 30px;
  height: 120px;
  margin-bottom: 20px;
  text-align: center;
}
.next {
  text-align: center;
  border: 1px solid #0089cf;
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  width: 150px;
  position: absolute;
  right: 0;
  font-weight: bold;
  color: #0089cf;
  transition-duration: 0.5s;
}
.next:hover {
  background-color: #92d9fc;
  border: 1px solid #92d9fc;
  color: #142b51;
}
.item {
  margin-bottom: 20px;
  margin-left: 20px;
  transition-duration: 0.5s;
}
.item:hover {
  margin-left: 25px;
}
.item a {
  font-size: 32px;
  color: #0089cf;
  transition-duration: 0.5s;
}
.item a:hover {
  color: #142b51;
}
</style>
