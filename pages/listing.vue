<template>
  <div class="">
    <Navbar />
    <List />
    <Footer/>

  </div>
</template>


<script>
import { defineComponent } from "@vue/composition-api"
import Navbar from "../layout/Navbar.vue"
import List from "../components/FetchList.vue"
import PostList from '../components/PostList.vue'
import Footer from '../layout/Footer.vue'
import "../assets/style/style.css";

export default defineComponent({
  components: { Navbar,List,PostList, Footer },

  setup() {},
});
</script>
