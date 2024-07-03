<template>
    <h1>ini adalah halaman user</h1>

    <h2>List User</h2>

    <ul>
        <li v-for="user in users" :key="user.name">
           <router-link :to="'/user/'+user.name">
            {{ user.name }}
           </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { name: 'Meg' },
                { name: 'Ben' },
                { name: 'Greg' }
            ]
        }
    }
}
</script>
