import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    current_page: 0,
    post_ready: false,

    // this var will be a 2d list
    // the first dimension will refer to the 'page'
    // the second dim will refer to the posts on that page 
    // posts[3][29] means the 30th post on 4th page
    posts: [],
  },
  getters: {
    get_page: state => {
      return state.posts;
    },
    get_status: state => {
      return state.post_ready;
    },
    get_index: state => {
      return state.current_page;
    }
  },
  mutations: {
    push_page: (state, new_posts) => {
      state.post_ready = true;
      state.posts.push(new_posts)
    },
  }
});