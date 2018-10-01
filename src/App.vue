<template>
  <div id='app'>
    <AppHeader/>
    <main class='container'>
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
}

h1 {
  text-align: center;
}

img {
  max-width: 100%;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

figcaption {
  text-align: center;
}
</style>
