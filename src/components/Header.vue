<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/">
          <h1 class="title is-5">Stock trader</h1>
        </router-link>
      </div>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/stocks">Stocks</router-link>
        <router-link class="navbar-item" to="/portfolio">Portfolio</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button is-danger">End day</button>
        </div>
        <div class="navbar-item has-dropdow is-hoverable">
          <a class="navbar-link">Save & Load</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">Save</a>
            <a class="navbar-item">Load</a>
          </div>
        </div>
        <div class="navbar-item">
          <p>Founds:</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
</style>