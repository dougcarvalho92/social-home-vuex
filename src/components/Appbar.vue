<template>
<section class="app-bar">
    <div class="logo">
        <img src="../assets/logo.png" alt="Logo" srcset="" />
    </div>
    <div class="search-bar">
        <input type="text" class="input-search" />
    </div>
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
    height: 8vh;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 3fr;
    padding: 0 30px;
}

.app-bar .logo img {
    width: fit-content;
    max-width: 100%;
}

.app-bar .search-bar .input-search {
    height: 32px;
    width: 100%;
    border-radius: 8px;
    border: none;
}
</style>
