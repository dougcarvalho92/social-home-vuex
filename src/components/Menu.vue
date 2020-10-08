<template>
<section class="app-header">
    <div class="banner"></div>
    <div class="header-info">
        <img :src="user.user_image" alt="Logo" class="header-image" />
        <div class="page-info">
            <h3>{{ user.name }}</h3>
            <p>{{ user.segment }}</p>
        </div>
    </div>
    <ul class="header-menu">
        <li class="active">Timeline</li>
        <li>About</li>
        <li>Welcome</li>
        <li>VX</li>
    </ul>
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

@media screen and (min-width: 767px) {
    .app-header {
        max-width: 1100px;
        ;
        margin: 0 auto;
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

    .header-menu li {
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

    .active {
        color: inherit;
        border-bottom: 8px solid #00afb8;
    }

    .header-menu li:hover {
        color: inherit;
        color: inherit;
        border-bottom: 8px solid #00afb8;
    }
}
</style>
