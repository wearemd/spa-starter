<template lang="pug">
  section.wrapper
    nav
      ul
        li
          router-link(:to="{name: 'Home'}") Accueil
        li
          router-link(:to="{name: 'Aheuh'}") Aheuh

    section
      transition(name="fade" mode="out-in")
        router-view
</template>

<style lang="sass">
  @import "utilities/transitions.sass"
</style>

<script>
  export default {}
</script>
