import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: {},
    posts: [],
  },
  mutations: {
    addLike: (state, payload) => {
      const { id, liked } = payload;
      const post = state.posts.find((p) => p.id === id);
      post.likeCount++;
      post.liked = liked;
    },
    removeLike: (state, payload) => {
      const { id, liked } = payload;
      const post = state.posts.find((p) => p.id === id);
      post.likeCount--;
      post.liked = liked;
    },
    addPost(state, post) {
      state.posts.unshift(post);
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchPosts({ commit }, id) {
      const data = await axios
        .get("../data.json")
        .then((result) => result.data.posts);

      commit(
        "setPosts",
        data
          .sort((a, b) => new Date(b.registered) - new Date(a.registered))
          .filter((post) => post.user_id == id)
      );
    },
    async fetchUsers({ commit }, id) {
      const data = await axios
        .get("../data.json")
        .then((result) => result.data.users);
      const filtered = data.filter((user) => user.id == id)[0];

      console.log("Filtro", filtered);
      commit("setUser", filtered);
    },
  },
  modules: {},
});
