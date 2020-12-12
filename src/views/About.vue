<template>

  <div class="about">

    <h1>{{ title }}</h1>

  </div>

</template>

<script>

import { mapState } from 'vuex'

export default {

  computed: {

    ...mapState({

      title: state => state.test.message

    })
  }

}

</script>