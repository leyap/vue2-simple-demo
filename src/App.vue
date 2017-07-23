<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-on:click="onclick()">{{ msg }}</h1>
    <div id="todo-list-example">
      <input
              v-model="newTodoText"
              v-on:keyup.enter="addNewTodo()"
              placeholder="Add a todo"
      >
      <ul>
        <li
                is="todo-item"
                v-for="(todo, index) in todos"
                v-bind:key="index"
                v-bind:title="todo"
                v-bind:num="index"
                v-on:remove="todos.splice(index, 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        newTodoText: '',
        todos: [
          'Do the dishes',
          'Take out the trash',
          'Mow the lawn'
        ]
      }
    },
    methods: {
      onclick: function () {
        alert("onclick")
      },
      addNewTodo: function () {
        this.todos.push(this.newTodoText)
        this.newTodoText = ''
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  input {
    width: 50%;
    height: 30px;
    outline: none;
    font-size: 14px;
    /*outline-width: 1px;*/
      /*outline-style: dashed;*/
    /*outline-color: #ff4444;*/
  }

  ul {
    margin-top: 20px;
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    list-style-type: none;
    padding: 2px;
    text-align: left;
    box-shadow: 0px 0px 20px 5px rgba(100, 100, 100, 0.5);
  }

  li {
    display: inline-block;
    display: block;
    margin: 10px 20px;
    /*background: #42b983;*/
    position: relative;
    border-bottom: 1px dashed #888;
    padding: 6px;
    height: 30px;
  }

  a {
    color: #42b983;
  }

  li button {
    /*line-height:20px;*/
    width: 30px;
    height: 30px;
    position: absolute;
    /*border: 1px solid #888;*/
    border: none;
    border-radius: 50%;
    /*margin-left: 10px;*/
    right: 0;
    margin-right: 0px;
    background: #eee;
    color: #666;
    font-size: 20px;
  }
  li button:hover {
    background: #f44;
    color: #fff;
  }

</style>
