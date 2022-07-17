<template lang="pug">
//- Main
main.main
  //- Section
  section.section
    .container
      h1 Home
      h2 This is section 1
      p This is a paragraph.

  //- Section
  section.section
    .container
      h2 This is section 2
      p This is a paragraph. Some
        b bold
        | ,
        i italic
        |  and
        b
          i bold italic
        | .
</template>

<script>
export default {
  name: "Home"
};
</script>
