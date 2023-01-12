<template>
  <section class="section">
    <div class="gallery__container">
      <h2 class="heading--secondary title--margin">Gallery</h2>
      <div class="slider">
            <div class="grid">
        <picture class="picture"><img src="https://images.unsplash.com/photo-1617373310678-e6f25a2d452a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80" alt="" class="img" /></picture>
        <picture class="picture"><img src="https://images.unsplash.com/photo-1604785846291-2cd9192b1bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80" alt="" class="img" /></picture>
        <picture class="picture"><img src="https://images.unsplash.com/photo-1550607326-2df38662b7dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" class="img" /></picture>
      </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.slider{
    overflow: auto;
    overflow-y: hidden;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: calc(70vw * 3);
  overflow-x: scroll;
  align-content: center;
  /* transform: translateX(-28.5%); */
  gap: 0;
}

.slider::-webkit-scrollbar {
  height: 0;
  widows: 0;
}

.picture {
  height: 50rem;
  background: red;
  position: relative;

  transition: .4s linear;
}

.picture:last-child{
    z-index: -1;
}

.picture:last-child{
    z-index: 10;
}


</style>