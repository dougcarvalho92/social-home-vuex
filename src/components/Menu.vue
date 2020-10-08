<template>
<section class="app-header">
    <div class="banner"></div>
    <div class="header-nav">
        <img :src="user.user_image" alt="Logo" class="header-image" />
        <h3>{{ user.name }}</h3>
        <ul class="header-menu">
            <li class="active">Timeline</li>
            <li>About</li>
            <li>Welcome</li>
            <li>VX</li>
        </ul>
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
}

.banner {
    margin-top: 10px;
    height: 150px;
    background-color: #00afb8;
}

.header-nav {
    background-color: #404040;
    text-align: center;
}

.header-nav h3 {
    color: #fff;
}

.header-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
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

.header-menu li:hover {
    color: #00afb8;
}
</style>
