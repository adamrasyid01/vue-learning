<template>
    <slot>ini adalah slot default karena parent component tidak memberikan data</slot>
    halo ini adalah data dari siswa bernama {{ studentName }}  <button @click="showData">Show Details</button>
</template>

<script>
export default {
        props: {
                studentName:String
        },
        emits:['response'],
        methods:{
            showData() {
                this.$emit('response',this.studentName)
            }
        }
    }
</script>