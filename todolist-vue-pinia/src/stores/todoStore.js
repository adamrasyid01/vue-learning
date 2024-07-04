import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: [
      { id: 1, name: 'Belajar HTML', isDone: false},
      { id: 2, name: 'Belajar CSS', isDone: false},
      { id: 3, name: 'Belajar JS', isDone: false},
      { id: 4, name: 'Belajar PHP', isDone: false},
    ]
  }),
  getters: {
    showAll(state) {
      return state.todoList
    },
    doneOnly(state) {
      return state.todoList.filter(item => item.isDone == true)
    },
    undoneOnly(state) {
      return state.todoList.filter(item => item.isDone == false)
    }
  },
  actions: {
    setAsDone(index) {
      this.todoList[index].isDone = true
    },
    setAsUndone(index) {
      this.todoList[index].isDone = false
    },
    addTodo(data) {

      let exists = this.todoList.filter(item => item.name == data).length

      if (exists) {
        alert("New Todo sudah ada")
        return 
      }
      this.todoList.push({
        id: this.$id + 1,
        name: data,
        isDone: false
      })
    }
  },
})
