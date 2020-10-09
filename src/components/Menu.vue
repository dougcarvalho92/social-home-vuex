<template>
  <section class="app-header">
    <div class="banner"></div>
    <div class="header-info">
      <img :src="user.picture" alt="Logo" class="header-image" />
      <div class="page-info">
        <h3>{{ user.name }}</h3>
        <p>{{ user.segment }}</p>
      </div>
    </div>

    <div class="header-menu">
      <router-link to="/" class="link-menu active">Timeline</router-link>
      <router-link to="/" class="link-menu">About</router-link>
      <router-link to="/" class="link-menu">Welcome</router-link>
      <router-link to="/" class="link-menu">VX</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.app-header {
  max-width: 1200px;
  background-color: #404040;
  border-radius: 3px;
}

.banner {
  margin-top: 10px;
  height: 150px;
  background-color: #00afb8;
}

.header-nav {
  text-align: center;
}

.page-info * {
  color: #fff;
}

.header-menu {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  padding: 10px 30px;
  color: #fff;
  list-style: none;
  font-weight: 700;
}

.header-image {
  height: 72px;
  width: 72px;
  background-color: #00afb8;
  margin-top: -36px;
  border: 1px solid #404040;
  object-fit: cover;
  border-radius: 3px;
}

.active {
  color: #00afb8;
}

.header-menu .link-menu {
  list-style: none;
  text-decoration: none;
  color: #fff;
}

.header-menu .link-menu:hover {
  color: #00afb8;
}

@media screen and (min-width: 767px) {
  .app-header {
    max-width: 1100px;
    margin: 1rem auto;
  }

  .header-info {
    display: flex;
    grid-template-columns: 1fr 5fr;
    padding: 1rem;
    background-color: #00afb8;
    position: relative;
  }

  .page-info h3 {
    font-size: 2rem;
  }

  .page-info {
    margin-left: 154px;
  }

  .page-info * {
    color: #fff;
    text-align: left;
    margin: 10px;
  }

  .header-menu {
    margin-left: 150px;
    width: fit-content;
    padding-bottom: 0;
  }

  .header-menu .link-menu {
    margin-right: 45px;
    line-height: 2rem;
    cursor: pointer;
  }

  .header-image {
    height: 150px;
    width: 150px;
    margin-right: 1rem;
    position: absolute;
    bottom: -36px;
  }

  .link-menu {
    position: relative;
  }

  .link-menu.active {
    color: inherit;
  }

  .link-menu.active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    border-bottom: 6px solid #00afb8;
  }

  .header-menu .link-menu:hover::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    border-bottom: 6px solid #00afb8;
  }
}
</style>
