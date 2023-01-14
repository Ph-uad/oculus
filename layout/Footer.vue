<template>
  <footer class="footer section">
    <div class="container">
      <div class="flex">
        <div class="footer--details">
          <h3 class="heading--tertiary">oculus</h3>
          <p class="paragraph">
            Oculus is conceptual project based on learning design ,development
            with nuxt3 (vue typescript). It is a simple e-commerce project to
            display minimalistic design to for a better user experience
          </p>
        </div>
        <div class="footer--list">
            <h4 class="heading--quad">Contact</h4>
            <span><a href="#">temidayo26@gmail.com</a></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer{
    padding: 4rem;
}
.footer--details{
    flex: 0 0 40%;
}
.footer--list{
    text-align: right;
}
</style>