<template>
  <section class="category section">
    <div class="container categroy__container">
      <h2 class="heading--secondary title--margin">categories</h2>
      <div class="flex">
        <NuxtLink to="/" class="link category__block">
          <div class="">
            <h3 class="category__label heading--tertiary">sunlasses</h3>
          </div>
        </NuxtLink>
        <NuxtLink to="/" class="link category__block">
          <div class="">
            <h3 class="category__label heading--tertiary">eyeglasses</h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.category__block:first-child {
  background: linear-gradient(#000000a6, #00000042),
    url("https://images.unsplash.com/photo-1632421399270-0f6636d08446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80");
  background-size: cover;
  background-position: center center;
}
.category__block:last-child {
  background: linear-gradient(#000000a6, #00000042),
    url("https://images.unsplash.com/photo-1522938974444-f12497b69347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2218&q=80");
  background-size: cover;
  background-position: center center;
}
.category__block {
  background: red;
  display: block;
  flex: 0 1 45%;
  padding: 2rem;
  aspect-ratio: 1/0.85;
  color: var(--color--white);
}
</style>