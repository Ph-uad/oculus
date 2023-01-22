<template>
  <button @click="tryMe">Click</button>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    tryMe() {
      fetch("https://http-fetch-6eb9b-default-rtdb.firebaseio.com/cart")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>