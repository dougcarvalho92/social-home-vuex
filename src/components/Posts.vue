<template>
<article v-for="post in posts" :key="post.id" :class="post.sponsored ? 'post-sponsored' : 'post-default'">
    <div class="user-info">
        <img :src="post.user_info.picture" />
        <div class="post-title">
            <h4 class="post-title">
                {{ post.user_info.name }} <small class="action-text">atualizou a página </small>
            </h4>
            <p class="action-sponsed" v-if="post.sponsored">Patrocinado</p>
            <p class="action-time" v-else>
                {{ dateHowLong(post.registered) }}
            </p>
        </div>
    </div>
    <p class="post-message">
        {{ post.content }}
    </p>
    <img :src="post.media" v-if="post.type === 'image' && post.media" class="post-image" />

    <iframe v-else-if="post.type === 'video'" :src="'https://www.youtube.com/embed/' + post.media" class="post-video">
    </iframe>

    <div class="action">
        <button :class="post.liked ? 'active' : ''" @click="toggleLike(post.id, post.liked)">
            Curtir {{ post.likeCount > 0 ? `[${post.likeCount}]` : "" }}
        </button>
        <button>Comentar</button>
        <button>Compartilhar</button>
    </div>
</article>
</template>

<script>
import moment from "moment";
export default {
    name: "Posts",
    computed: {
        user() {
            return this.$store.state.user;
        },
        posts() {
            return this.$store.state.posts;
        },
    },
    methods: {
        toggleLike: function (id, status) {
            if (!status) {
                this.$store.commit("addLike", {
                    id,
                    liked: true,
                });
            } else {
                this.$store.commit("removeLike", {
                    id,
                    liked: false,
                });
            }
        },

        checkSponsored(value) {
            return value ? "post-sponsored" : "post-default";
        },
        dateHowLong(date) {
            return (
                moment(date)
                .locale("pt-br")
                .fromNow(true) + " atrás"
            );
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.post-default {
    background: #fff;
    margin-bottom: 1.3rem;
    color: #a1a1a1;
    border-radius: 3px;
}

.post-sponsored {
    background: #404040;
    margin-bottom: 1.3rem;
    color: #a1a1a1;
    border-radius: 3px;

}

.post-title {
    text-align: left;
    align-items: center;
    color: #00afb8;
    font-size: 1.1rem;
}

.post-title .post-title,
.post-title p {
    margin: 5px 0;
}

.post-message {
    text-align: left;
    padding: 0 1rem;
}

.action-text,
.action-time {
    color: #a1a1a1;

    font-weight: 400;
    font-size: 0.9rem;
}

.user-info {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    padding: 1rem 1rem 0.5rem 1rem;
    justify-content: flex-start;
}

.user-info img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    background: #00afb8;
    border-radius: 3px;
}

.post-image,
.post-video {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.action {
    text-align: left;
}

.action button {
    background: none;
    border: none;
    padding: 1rem;
    font-weight: 600;
    outline: 0;
}

.action button {
    color: #a1a1a1;
}

.action button.active {
    color: #00afb8;
}

@media screen and (min-width: 767px) {
    .user-info {
        grid-template-columns: 1fr 7fr;

    }

    .post-image,
    .post-video {
        width: 100%;
        height: 300px;
        border: none;
        outline: none;
    }
}
</style>
