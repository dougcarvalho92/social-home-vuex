<template>
<section class="about-card">
    <h3 class="card-title">Sobre</h3>
    <div class="card-content">
        <p>
            {{ user.description }}
        </p>
        <p>
            Site:<a class="card-link" :href="user.site"> {{ user.site }}</a>
        </p>
        <p>
            E-mail:<a class="card-link" :href="'mailto:' + user.site">
                {{ user.email }}</a>
        </p>
    </div>
</section>
</template>

<script>
export default {
    name: "About",
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
};
</script>

<style scoped>
.about-card {
    background: #fff;
    text-align: left;
    border-radius: 0.5rem 0.5rem 0 0;
}

.card-content {
    color: #a1a1a1;
    font-size: 1rem;
    padding: 1rem;
}

.card-title {
    background-color: #c7c7c7;
    padding: 1rem;
    border-radius: 0.5rem;
    color: #404040;
    margin: 0;
}

.card-link {
    color: #a1a1a1;
    font-size: 1rem;
    padding: 0 1rem;
}
</style>
