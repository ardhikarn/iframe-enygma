<template>
  <div class="home">
    <iframe src="http://localhost:5000/login" title="Iframe Example" style="border:none;" ></iframe>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
  .home {
    iframe {
      height: 99.6vh;
      width: 100%;
    }
  }
</style>
