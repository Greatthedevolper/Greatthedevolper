<template>
  <!-- Banner Start -->
  <section class="main-banner">
    <div class="banner-blur-one"><img src="../assets/images/banner-blur1.png" alt="Blur"></div>
    <div class="banner-blur-two"><img src="../assets/images/banner-blur2.png" alt="Blur"></div>
    <div class="banner-bg-aliment animate-this"><img src="../assets/images/banner-bg-alimants-two.png" alt="Aliments">
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="banner-title">
            <h2 class="h2-subtitle wow fadeInUp" data-wow-delay=".5s">Full Stack Developer</h2>
            <h1 class="h1-title text-white wow fadeInUp" data-wow-delay=".7s">Hey! I Am <span><img
                src="../assets/images/hand.png" alt="Hand"></span><span>Azeem U Rehman</span></h1>
            <p class="wow fadeInUp" data-wow-delay=".9s">I'm full stack developer based in Pakistan, and I'm very
              passionate and dedicated to my work.</p>
            <div class="banner-btn wow fadeInUp" data-wow-delay="1.1s">
              <router-link to="/about" class="sec-btn">Buy Me Coffee</router-link>
              <router-link to="https://www.youtube.com/watch?v=yUwpx81trCo" class="banner-play-icon popup-youtube"
                           title="Play Video"><span><img src="../assets/images/play-button.png" alt="Play"></span>
              </router-link>
            </div>
            <div class="banner-social text-black wow fadeInUp" data-wow-delay="1.3s">
              <span class="text-white">Follow Me:</span>
              <ul>
                <li v-for="items in linkName" :key="items.id">
                  <router-link :to="items.link">
                    <i aria-hidden="true" :class="items.iconClass"></i>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="banner-img-two wow fadeInUp" data-wow-delay=".5s">
            <img src="../assets/images/banner-man-two.png" alt="Banner">
            <div class="banner-bg-line-two animate-this">
              <img src="../assets/images/banner-bg-line-two.png" alt="Line">
            </div>
            <a href="https://www.youtube.com/watch?v=yUwpx81trCo" class="banner-play-two popup-youtube"
               title="Play Video">
              <img src="../assets/images/play-bg.png" alt="Play">
              <i class="fa fa-play" aria-hidden="true"></i>
            </a>
            <div class="banner-img-text-box-two">
              <div class="line"></div>
              <span>Become A<br>Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Banner End -->
  <div class="main-my-client">
    <div class="container">
      <div class="  my-client-slider-two wow fadeInUp" data-wow-delay=".5s">
        <div class="swiper-wrapper">
          <Carousel
              :items-to-show="5"
              :autoplay="2000"
              :wrap-around="true"
              :transition="500"
          >
            <Slide v-for="slide in images" :key="slide.id" class=" my-client-box">
              <router-link to="#">
                <img class="carousel__item" :src="slide.src" :alt="slide.alt"/>
              </router-link>
            </Slide>
            <template #addons>
              <Navigation/>
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {Carousel, Navigation, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      currentSlide: 0,
      images: [
        {src: "src/assets/images/brand1-w.png", alt: "My-Work1"},
        {src: "src/assets/images/brand2.png", alt: "My-Work2"},
        {src: "src/assets/images/brand3.png", alt: "My-Work3"},
        {src: "src/assets/images/brand4.png", alt: "My-Work4"},
        {src: "src/assets/images/brand5-w.png", alt: "My-Work5"},
        {src: "src/assets/images/brand6.png", alt: "My-Work5"},
      ],
      linkName: [
        {iconClass: "fa fa-facebook", link: "#"},
        {iconClass: "fa fa-instagram", link: "#"},
        {iconClass: "fa fa-twitter", link: "#"},
      ]
    }
  },
  methods: {
    addActive() {
      this.isActive = !this.isActive;
      this.$emit("shadow")
    }
  },

})
</script>

<style lang="scss" scoped>

</style>