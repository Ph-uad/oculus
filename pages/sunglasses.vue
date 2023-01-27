<template>
  <div class="">
    <Navbar />
    <Sunglasses />
    <Footer/>

  </div>
</template>


<script>
import { defineComponent } from "@vue/composition-api"
import Navbar from "../layout/Navbar.vue"
import Sunglasses from "../components/Sunglasses.vue"
import Footer from '../layout/Footer.vue'
import "../assets/style/style.css";

export default defineComponent({
  components: { Navbar, Sunglasses, Footer},

  setup() {},
  
});
</script>
