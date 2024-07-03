<template>
    ini halaman user detail {{ $route.params.name }}
    <br>
    <router-link :to="'/user/' +  $route.params.name+'/posts'" >{{  $route.params.name }}'s Post'</router-link>
    <br>
    <router-link :to="'/user/' +  $route.params.name+'/profile'" >{{  $route.params.name }}'s Profile'</router-link>
</template>