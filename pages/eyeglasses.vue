<template>
  <div class="">
    <Navbar />
    <Eyeglasses />
    <Footer/>
  </div>
</template>


<script>
import { defineComponent } from "@vue/composition-api"
import Navbar from "../layout/Navbar.vue"
import Eyeglasses from '../components/Eyeglasses.vue'
import Footer from '../layout/Footer.vue'
import "../assets/style/style.css";

export default defineComponent({
  components: { Navbar, Eyeglasses, PostList, Footer},  
});
</script>
