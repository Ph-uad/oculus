<template>
  <div class="nav">
    <div class="container flex">
      <NuxtLink to="/" class="link">
        <h4 class="logo">Oculus</h4>
      </NuxtLink>

      <ul class="list flex">
        <li class="list--item">
          <NuxtLink to="/listing" class="link">sunglasses</NuxtLink>
        </li>
        <li class="list--item">
          <NuxtLink to="/listing" class="link">eyeglasses</NuxtLink>
        </li>
        <li class="list--item">
          <NuxtLink to="/" class="link">stores</NuxtLink>
        </li>
      </ul>
      <div class="icon--container flex">
        <svg class="icon--image">
          <use href="../assets/icons/sprite.svg#icon-shopping_bag" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>