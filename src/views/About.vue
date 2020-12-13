<template>

  <div class="about">

    <h1>{{ title }}</h1>

    <p>{{ count }}</p>

    <button @click="increment">+</button>

  </div>

</template>

<script>

import { mapState } from 'vuex'

export default {

  computed: {

    ...mapState({

      title: state => state.test.message,
      count: state => state.test.count

    })
  },

  methods: {
    
    increment() {
      
      this.$store.commit('test/increment')

    }

  }

}

</script>