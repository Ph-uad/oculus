<template>
  <section class="section">
    <div class="gallery__container">
      <h2 class="heading--secondary title--margin">Gallery</h2>
          <swiper
            :spaceBetween="3"
            :centeredSlides="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :modules="modules"
            class="swiper"
          >
            <swiper-slide>
              <picture class="picture"
                ><img
                  src="https://images.unsplash.com/photo-1617373310678-e6f25a2d452a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
                  alt=""
                  class="img" /></picture
            ></swiper-slide>
            <swiper-slide>
              <picture class="picture"
                ><img
                  src="https://images.unsplash.com/photo-1604785846291-2cd9192b1bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80"
                  alt=""
                  class="img" /></picture
            ></swiper-slide>
            <swiper-slide>
              <picture class="picture"
                ><img
                  src="https://images.unsplash.com/photo-1550607326-2df38662b7dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                  alt=""
                  class="img" /></picture
            ></swiper-slide>
          </swiper>
        </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.slider {
  overflow: auto;
  overflow-y: hidden;
}

.swiper{
  overflow-x: scroll;
  align-content: center;
  height: 50rem;
  gap: 0;
  position: relative;
}
.swiper::after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #16161661;
  z-index: 10;
}
</style>