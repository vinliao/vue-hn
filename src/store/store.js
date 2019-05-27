import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    current_page: 1,
    post_ready: false,
    visited_page: [],

    // this var will be a 2d list
    // the first dimension will refer to the 'page'
    // the second dim will refer to the posts on that page 
    // posts[3][29] means the 30th post on 4th page
    posts: [],
  },
  getters: {
    get_current_page: state => {
      const page_index = state.current_page-1;
      console.log(state.posts)
      return state.posts[page_index];
    },
    get_status: state => {
      return state.post_ready;
    },
    get_index: state => {
      return state.current_page;
    },
    get_visited_page: state => {
      return state.visited_page;
    }
  },
  mutations: { push_page: (state, new_posts) => {
      state.post_ready = true;
      state.posts.push(new_posts)
    },
    increment_page_index: state => {
      state.current_page++;
    },
    decrement_page_index: state => {
      state.current_page--;
    },
    push_visited_page: (state, page_index) => {
      state.visited_page.push(page_index);
    }
  },
  actions: {
    get_page: (context) => {
      // HANDLE IF PAGE VISITED ALREADY
      const page_index = context.getters.get_index;
       
      // if already visited, then don't push the page
      // into the posts array
      if(context.getters.get_visited_page.includes(page_index)){
        console.log('this is already visited!!!');
        return;
      }

      // add the current page index to the page that has
      // already been visited
      context.commit('push_visited_page', page_index)
      
      let url = 'https://api.hnpwa.com/v0/news/'
      url += page_index + '.json'

      // instead of using this, you "reference" the
      // vue-resource by calling Vue.http
      Vue.http.get(url)
        .then(response => {
          context.commit('push_page', response.body);
        })
    }
  }
});