<template>
<Home />
</template>

<script>
import Home from "./views/Home";

export default {
    name: "App",
    components: {
        Home,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");

#app {
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    background: #e8e8e8;
}

html,
body {
    margin: 0;
    padding: 0;
    color: #a1a1a1;
    width: 100%;
}

p,
span {
    color: #a1a1a1;
    line-height: 1.5rem;
    font-size: 1rem;
}
</style>
