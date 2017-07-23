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
                v-on:onclick="onclick(index)"
        ></li>
      </ul>
        <div id="dialog" tabindex='-1' :class="{ hide: hide }"
          v-on:keyup.esc="escActive"
        >
          <img src="./assets/logo.png">
            <p>{{show}}</p>
            <button @click="deleteDialog">X</button>
        </div>
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
        ],
        hide: false,
        show: ""
      }
    },
    methods: {
      onclick: function (index) {
//        alert(this.todos[index])
        this.show = this.todos[index]
        this.hide = false
      },
      deleteDialog: function (index) {
        this.hide = true
      },
      escActive: function () {
//        alert("esc")
        this.hide = true
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
    position: relative;
  }

  li {
    /*position: absolute;*/
    position: relative;
    /*display: inline-block;*/
    display: block;
    margin: 10px 20px;
    /*background: #bbb;*/
    /*color: #ff4444;*/
    border-bottom: 1px dashed #888;
    /*padding: 6px;*/
    height: 30px;
    overflow: hidden;
  }

  a {
    color: #42b983;
  }
  li label {
    /*background: #888888;*/
    margin-right: 20px;
    position: absolute;
    left: 10px;
    right: 15px;
    overflow: hidden;
    line-height: 30px;
  }
  li button {
    /*line-height:20px;*/
    width: 30px;
    height: 30px;
    position: absolute;
    /*border: 1px solid #888;*/
    border: none;
    border-radius: 50%;
    right: 0px;
    top: 0;
    /*left: 0;*/
    /*margin-right: 0px;*/
    /*margin-left: 10px;*/
    background: #eee;
    color: #666;
    font-size: 20px;
  }
  li button:hover {
    background: #f44;
    color: #fff;
  }

  #todo-list-example {
    position: relative;
    bottom:0;
  }

  #dialog {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #aaa;
    /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);*/
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
  }
  #dialog img {
    width: 100px;
    height: 100px;
  }
  #dialog button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 2px;
    right: 2px;
  }
  .hide {
    display: none;
  }

</style>
