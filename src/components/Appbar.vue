<template>
<section class="app-bar">
    <header>
        <div class="logo">
            <img src="../assets/logo.png" alt="Logo" srcset="" />
        </div>
        <div class="search-bar">
            <input type="text" class="input-search" />
        </div>
    </header>
</section>
</template>

<script>
export default {
    name: "Appbar",
    data: function () {},
    components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.app-bar {
    background-color: #404040;

}

.app-bar header {
    max-width: 1100px;
    height: 8vh;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 3fr;
    padding: 0 30px;
}

.app-bar .logo img {
    width: fit-content;
}

.app-bar .search-bar .input-search {
    height: 32px;
    width: 100%;
    border-radius: 8px;
    border: none;
}

@media screen and (min-width: 767px) {
    .app-bar {
        margin: 0 auto;
    }

    .app-bar header {
        max-width: 1100px;
        padding: 0 0;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
    }

    .app-bar .logo {
        margin-right: 2rem;
    }

    .app-bar .search-bar .input-search {
        width: 700px;
    }
}
</style>
