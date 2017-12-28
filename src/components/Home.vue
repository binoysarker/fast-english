<template>
  <section class="section">
    <div class="container is-fullhd">
      <img src="../assets/images/FastEnglishBook.png" alt="">
    </div>
    <div class="container is-fullhd">
      <img src="../assets/images/Vocabulary.jpg" alt="">
      <div class="content">
        <h1 class="has-text-centered"><router-link to="/vocabulary">Vocabulary</router-link></h1>
      </div>
    </div>
    <div class="container is-fullhd">
      <img src="../assets/images/Grammar.jpg" alt="">
      <div class="content">
        <h1 class="has-text-centered"><router-link to="/grammar">Grammar</router-link></h1>
      </div>
    </div>
    <div class="container is-fullhd">
      <img src="../assets/images/Conversation.jpg" alt="">
      <div class="content">
        <h1 class="has-text-centered"><router-link to="/conversation">Conversation</router-link></h1>
      </div>
    </div>
    <div class="container is-fullhd">
      <img src="../assets/images/Speaking.jpg" alt="">
      <div class="content">
        <h1 class="has-text-centered"><router-link to="/speaking">Speaking</router-link></h1>
      </div>
    </div>
  </section>
</template>

<script>
  name: 'Home'
  export default {

  }
</script>

<style scoped>
img{
  width: 100%;
}
h1{
  background-color: gray;
}
</style>
