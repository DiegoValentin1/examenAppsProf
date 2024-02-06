<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div id="app">
    <div>
      <b-sidebar
        id="sidebar-1"
        title="Sidebar"
        shadow
        visible="true"
        no-header-close="true"
        no-close-on-route-change="true"
      >
        <div class="px-3 py-2">
          <b-navbar-nav>
              <b-nav-item href="/pagination">Pagination</b-nav-item>
              <b-nav-item href="/formulario">Form</b-nav-item>
            </b-navbar-nav>
        </div>
      </b-sidebar>
    </div>
    <div id="navv">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info" id="navboot">
          <b-navbar-brand href="/landing">Sitio Principal</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/pagination">Pagination</b-nav-item>
              <b-nav-item href="/formulario">Form</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <div id="ruter">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
