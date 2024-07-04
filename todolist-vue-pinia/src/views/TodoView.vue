<template>
    <h1>Ini halaman todo list</h1>

    <form @submit.prevent="todoStore.addTodo(newTodo)">
        <input type="text" v-model="newTodo" placeholder="add new todo...">
        <input type="submit" value="Add">
    </form>

    <div style="width: 500px;  padding-inline-start: 40px;" >
        <h3 style="text-align: center;">My Todo List</h3>
    </div>

    <div class="getters-button">
        <button @click="show = 'all'">Show All</button>
        <button @click="show = 'done only'">Done Only</button>
        <button @click="show = 'undone only'">Undone Only</button>
    </div>

    <!-- SHow all todoList -->
    <div v-if="show == 'all'">
        <ul>
            <li v-for="(todo, index) in todoStore.todoList" :key="todo.id">
                <span>{{  todo.name }}</span>
                <span>
                    <button v-if="!todo.isDone" @click="todoStore.setAsDone(index)">SET AS DONE</button>
                    <button v-if="todo.isDone" @click="todoStore.setAsUndone(index)">SET AS UNDONE</button>
                </span>
                
            </li>
        </ul>
    </div>

    <!-- Show Done Only Todo List -->
    <div v-if="show == 'done only'">
        <ul>
            <li v-for="(todo, index) in todoStore.doneOnly" :key="todo.id">
                <span>{{  todo.name }}</span>
                <span>
                    <button v-if="!todo.isDone" @click="todoStore.setAsDone(index)">SET AS DONE</button>
                    <button v-if="todo.isDone" @click="todoStore.setAsUndone(index)">SET AS UNDONE</button>
                </span>
                
            </li>
        </ul>
    </div>

    <!-- Show unDone only Todo List -->

    <div v-if="show == 'undone only'">
        <ul>
            <li v-for="(todo, index) in todoStore.undoneOnly" :key="todo.id">
                <span>{{  todo.name }}</span>
                <span>
                    <button v-if="!todo.isDone" @click="todoStore.setAsDone(index)">SET AS DONE</button>
                    <button v-if="todo.isDone" @click="todoStore.setAsUndone(index)">SET AS UNDONE</button>
                </span>
                
            </li>
        </ul>
    </div>
</template>

<style scoped>

    form{
        width: 500px;
        padding-inline-start: 40px;
        margin-bottom: 40px;
    }

    form input{
        padding: 10px;
    }

    form input:first-child{
        width:80%;
        margin: 0 10px;
    }

    ul{
        list-style: none;
        width:500px
    }
    li{
        border: solid 1px;
        margin:10px;
        padding:10px;
        display:flex;
        justify-content: space-between;
    }

    .getters-button{
        display: flex;
        justify-content: center;
        gap: 10px;
        width: 500px;  
        padding-inline-start: 40px;
    }
</style>

<script>
import { useTodoStore } from '@/stores/todoStore';


export default {
    setup() {
        const todoStore = useTodoStore()

        return {todoStore}
    },
    data() {
        return {
            newTodo: '',
            show: 'all'
        }
    }
}
</script>