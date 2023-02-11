<template>
  <header class="site-header " >
    <!--Navbar Start  -->
    <div class="header-bottom">
      <div class="container">
        <div class="row ">
          <div class="col-lg-2 align-self-center">
            <!-- Sit Logo Start -->
            <div class="site-branding">
              <router-link to="/" title="Great">Great
                <!--                <img src="../assets/images/azeem-logo.png" alt="Logo">-->
              </router-link>
            </div>
            <!-- Sit Logo End -->
          </div>
          <div class="col-lg-7 align-self-center ">
            <div class="header-menu">
              <nav class="main-navigation two"  :class="{active: isActive}">
                <button class="toggle-button" @click="addActive()" :class="{active: isActive}">
                  <svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="60">
                    <path class="line-ham top"
                          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"/>
                    <path class="line-ham middle" d="m 30,50 h 40"/>
                    <path class="line-ham bottom"
                          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"/>
                  </svg>
                </button>
                <div class="mobile-menu-box">
                  <i class="menu-background top"></i>
                  <i class="menu-background middle"></i>
                  <i class="menu-background bottom"></i>
                  <ul class="menu" >
                    <li class="sub-items" v-for="items in pageName" :key="items.title">
                      <router-link :to="items.link" title="Home">{{ items.title }}</router-link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div class="col-lg-3 align-self-center">
            <div class="header-btn">
              <router-link to="#" class="sec-btn">Book Appointment</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Navbar End  -->
  </header>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
export default {
  name: "SideBar",
  components: {},
  data() {
    return {
      count: 0,
      isActive: false,
      pageName: [
        {title: "Home", link: "/"},
        {title: "About Me", link: "/about"},
        {title: "PortFolio", link: "/portfolio"},
        {title: "Resume", link: "/resume"},
        {title: "Contact Us", link: "/contact-us"},
      ]
    }
  },
  methods: {
    addActive() {
      this.isActive = !this.isActive;
      this.$emit("shadow")
    }
  },

}
</script>

<style lang="scss">


</style>
