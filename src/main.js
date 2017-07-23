import Vue from 'vue'
import App from './App.vue'

Vue.component('todo-item', {
  template: '<li>{{ num }}:{{ title }}' +
  '<button v-on:click="$emit(\'remove\')">X</button>' +
  '</li>',
  props: [ 'title', 'num' ]
})


new Vue({
  el: '#app',
  render: h => h(App)
})
