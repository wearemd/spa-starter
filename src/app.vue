<template lang="pug">
//- Wrapper
.wrapper
  //- Header
  header.header
    .container
      nav
        ul
          li
            router-link(:to="{name: 'Home'}") Home
          li
            router-link(:to="{name: 'Page'}") Page

        p {{some_const}}

  //- Main
  router-view(v-slot="{ Component }")
    transition(name="fade" mode="out-in")
      component(:is="Component")

  //- Footer
  footer.footer
    .container
      p Footer information
</template>

<style lang="sass">
// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
// minireset.css - A tiny modern CSS reset https://jgthms.com/minireset.css/
@import "minireset.css/minireset.sass"

// -----------------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------------
@import "utilities/animations.sass"
@import "utilities/transitions.sass"

// -----------------------------------------------------------------------------
// Fonts
// -----------------------------------------------------------------------------
@import "fonts/_all"

// -----------------------------------------------------------------------------
// Base
// -----------------------------------------------------------------------------
@import "base/_all"

// -----------------------------------------------------------------------------
// Layout
// -----------------------------------------------------------------------------
@import "layout/_all"

// -----------------------------------------------------------------------------
// Development utilities
// -----------------------------------------------------------------------------
@import "dev/shame.sass"
// @import "dev/structure.sass"
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      some_const: SOME_CONST
    };
  }
};
</script>
