<template>
  <div class="container">
    <app-header />
    <transition enter-active-class="animated bounceInDown fast">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
};
</script>

<style>
</style>
