<template>
  <div class="">
    <Navbar />
    <Header />
    <Categories />
    <Gallery/>
    <Footer/>

  </div>
</template>


<script>
import { defineComponent } from "@vue/composition-api";
import Navbar from "../layout/Navbar.vue";
import Header from "../layout/Header.vue";
import Categories from "../layout/Categories.vue";
import Gallery from "../layout/Gallery.vue";
import Footer from '../layout/Footer.vue'
import "../assets/style/style.css";

export default defineComponent({
  components: { Navbar, Header, Categories,Gallery, Footer },

  setup() {},
});
</script>
