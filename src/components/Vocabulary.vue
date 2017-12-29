<template>
  <section class="section">
    <div class="container is-fullhd">
      <div class="content">
        <h1 class="has-text-centered">Vocabulary</h1>
      </div>
    </div>
    <!--start quiz section-->
    <div class="container is-fullhd">
      <div class="notification">
        <p class="is-text">
          This is a Vocabulary quiz system designed for kids using Vue js and Vuex. There will be 13 questions and you have to answer all the questions one by one. There is no negative marking for this quiz. You can also listen to the sound of every animal by clicking on them.
        </p>
        <button class="button is-primary" @click="startQuiz" :class="{'is-loading': loading}">Start Quiz</button>
      </div>
    </div>
    <!--main quiz section-->
    <div class="container is-fullhd" v-if="show">
      <div class="card">
        <div class="card-image column is-four-fifths is-offset-1-desktop">
          <figure class="image is-1by2">
            <img :src="'../src/assets/images/'+ singleImageName +'.jpg'" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">

            <div class="media-content">
              <p class="title is-4"><strong>Question:</strong> What is it ?</p>
              <div class="content is-6">
                <ul class="menu">
                  <li class="menu-list" v-for="(item,index) in randomNames" :key="item.name">
                    <input type="radio"  :id="item.name" :value="item.name" v-model="picked">
                    <label :for="item.name">
                      {{item.name}}
                      <button class="button is-small is-info" @click="Play(item.sound)">
                        <icon name="play" ></icon>
                      </button>
                    </label>
                  </li>
                </ul>
                <br>
                <button class="button is-primary is-medium" @click="Next">Next</button>
              </div>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  name: 'Vocabulary'
  export default {
    computed: {
      singleImageName () {
        return this.$store.getters.singleImageName
      },
      show () {
        return this.$store.getters.show
      },
      loading () {
        return this.$store.getters.loading
      },
      randomNames () {
        return this.$store.getters.randomNames
      },
      picked: {
        get () {
          return this.$store.getters.picked
        },
        set (value) {
          if (value === this.singleImageName) {
            this.$notify({
              type: 'success',
              title: 'Success',
              text: 'Your answer is correct!'
            });
            this.$store.commit('SetPicked', value)
          } else {
            this.$notify({
              type: 'error',
              title: 'Wrong!',
              text: 'You are wrong!'
            });
            this.$store.commit('SetPicked', value)
          }
        }
      }
    },
    methods: {
      startQuiz () {
        this.$store.dispatch('startQuiz')
        this.$store.dispatch('GoToNext')
      },
      Next () {
        this.$store.dispatch('GoToNext')
      },
      Play (sound) {
        let audio = new Audio(sound)
        audio.play()
      }
    }
  }
</script>

<style scoped>

</style>
