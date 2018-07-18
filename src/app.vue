<template lang="pug">
  section.wrapper
    nav
      ul
        li
          router-link(:to="{name: 'Home'}") Accueil
        li
          router-link(:to="{name: 'Aheuh'}") Aheuh

    p {{some_const}}

    section
      transition(name="fade" mode="out-in")
        router-view
</template>

<style lang="sass">
  @import "minireset.css/minireset.sass"
  @import "utilities/transitions.sass"
</style>

<script>
  export default {
    data() {
      return {
        some_const: SOME_CONST
      }
    }
  }
</script>
