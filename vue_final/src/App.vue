<template>
  <MenuPage/>
  <router-view/>
</template>

<script>
import MenuPage from './components/MenuPage.vue'

export default {
  name: 'App',
  components: {
    MenuPage
  }
}
</script>

<style>
</style>
