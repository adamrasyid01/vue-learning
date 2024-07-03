<!-- <script>

import Student from './components/student.vue'
export default {
  components: {
    Student
  },
  data() {
    return {
      selectedStudent:''
    }
  }
}
</script>



<template>
  <Student @response="(whatever) => selectedStudent=whatever" studentName ="Andy"> ini adalah nilai slot dari parent</Student><br>
  <Student  @response="(whatever) => selectedStudent=whatever"  studentName ="Budi"/> <br>
  <Student  @response="(whatever) => selectedStudent=whatever" studentName = "Ani"/> <br>

  <p>
    Student yang dipilih adalah {{ selectedStudent }}
  </p>
</template> -->


<template>
  <div class="menu">
    <Navbar/>
  </div>

  <div class="main">
    <RouterView></RouterView>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
      Navbar
    }
  }
</script>

<style>
  body{
    margin:0
  }
</style>

<style scoped>
  .menu{
    background-color: #eee;
    line-height: 2;
    padding: 10px;
  }
  .main{
    padding: 10px;
  }
</style>
