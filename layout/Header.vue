<template>
  <header class="header" id="header">
    <div class="container header__container">
        <div class="header__details center--text">
               <h2 class="heading--secondary ">The Best style</h2>
            <p class="paragraph ">for every occasion</p>
            <button class="btn">shop now</button>
        </div>
         
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
height: 50vh;
width: 100vw;
}

@media (min-width:64em) {
    .header{
        height:70vh;
    }
}
.header__container{
    position: relative;
    background: url('https://images.unsplash.com/photo-1470526446583-d0fe2363d8cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80') center center/cover no-repeat;
}
.header__details{
   transform: translateY(100%);
}
</style>>
