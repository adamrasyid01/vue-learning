<template>
    <h1>Ini halaman todo list</h1>

    <!-- {{ todoStore.name }} -->
    <!-- {{ todoStore.doubleCount }} -->

    {{ todoStore.count }}

    <button @click="todoStore.increment"></button>
</template>

<script>
import { useTodoStore } from '@/stores/todoStore';


export default {
    setup() {
        const todoStore = useTodoStore()

        return {todoStore}
    }
}
</script>