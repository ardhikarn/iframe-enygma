<template>
  <div class="home">
    <!-- {{ tes }}
    <button @click="tes++">button</button>
    <router-link to="/about">to about</router-link> -->
    <iframe src="http://192.168.0.175:5000/login" title="Iframe Example" style="border:none;" ></iframe>
    <!-- <embed src="http://192.168.0.175:5000/login" style="height: 99.6vh; width: 100%;" /> -->
    <!-- <embed src="https://www.enygma.id/login" style="height: 99.6vh; width: 100%;" /> -->
    <!-- <object data="http://192.168.0.175:5000/login" style="height: 99.6vh; width: 100%;">
      <embed src="http://192.168.0.175:5000/login" style="height: 99.6vh; width: 100%;">
      Error: Embedded data could not be displayed.
    </object> -->
    <!-- <vue-iframe
      src="https://www.enygma.id/login"
      allow="camera *; geolocation *; microphone *; autoplay *"
      frame-id="my-ifram"
      @load="onLoad"
      name="my-frame"
      style="height: 99.6vh; width: 100%;"
    /> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      tes: 1
    }
  },
  beforeCreate() {
    console.log('before create');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('before mount');
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('before update');
  },
  updated() {
    console.log('updated');
  },
  unmounted() {
    console.log('unmounted');
  },
  methods: {
    onLoad(frame) {
      this.myIframe = frame.contentWindow
    }
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
