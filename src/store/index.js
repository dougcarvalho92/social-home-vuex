import { createStore } from "vuex";
import axios from "axios";
import crypto from "crypto";
import moment from "moment";
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
      const id = crypto.randomBytes(12).toString("HEX");
      const newpost = {
        ...post,
        user_info: {
          user_id: state.user.id,
          picture: state.user.picture,
          name: state.user.name,
        },
        id,
        registered: moment(moment.now()).format("YYYY-MM-DDTHH:mm:ss"),
        sponsored: false,
        liked: false,
        likeCount: 0,
      };
      state.posts.unshift(newpost);
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    async userInfo(id) {
      const data = await axios
        .get("../data.json")
        .then((result) => result.data.users);
      return data.filter((user) => user.id == id)[0];
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const data = await axios
        .get("https://api.jsonbin.io/b/5f807583302a837e95776317",{headers:{
          'secret-key': '$2b$10$Rk9WDb2xktbbajLh9OMs0u3UrykZpud66TZIXBMqghq1MUFUXE4Du'
        }})
        .then((result) => result.data.posts);

      commit(
        "setPosts",
        data.sort((a, b) => new Date(b.registered) - new Date(a.registered))
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
    async getUser({ commit }, id) {
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
