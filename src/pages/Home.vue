<template>
<div class="home">
    <app-bar />
    <app-menu title="Home" />
    <div class="container">
        <app-about />
        <div class="post-content">
            <app-new-post />
            <app-posts />
        </div>
    </div>
</div>
</template>

<script>
import Appbar from "../components/Appbar";
import Menu from "../components/Menu";
import About from "../components/About";
import NewPost from "../components/NewPost";
import Posts from "../components/Posts";

export default {
    name: "Home",
    props: {
        title: String,
    },
    beforeCreate: async function () {
        this.$store.dispatch("fetchPosts", "5f7ce11b612acfc98e7748cd");
        this.$store.dispatch("fetchUsers", "5f7ce11b612acfc98e7748cd");
    },
    components: {
        appBar: Appbar,
        appMenu: Menu,
        appAbout: About,
        appNewPost: NewPost,
        appPosts: Posts,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@media screen and (min-width: 767px) {
    .container {
        max-width: 1100px;

        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-auto-flow: dense;
        grid-auto-rows: none;
        grid-gap: 1rem;
        margin: 0 auto;

        grid-auto-flow: dense;
    }
}
</style>
