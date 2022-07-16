<template lang="pug">
//- Main
main.main
  //- Section
  section.section
    .container
      h1 Page
      h2 This is section 1
      p This is a paragraph.

  //- Section
  section.section
    .container
      h2 This is section 2
      img(src="./images/unicorn.jpg", alt="")
</template>

<script>
export default {
  name: "Page"
};
</script>
