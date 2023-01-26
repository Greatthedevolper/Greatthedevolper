<template>
  <div class="sidemenu">
    <div class='menu-wrapper'>
      <input class='toggle' id='menu' type='checkbox'>
      <label class='menu-label' for='menu'>
        <img src="../assets/images/azeem-logo.png" alt="logo"/>
      </label>

      <router-link class="tab custom-flex" :to="items.link" v-for="items in pageName"
                   :key="items.title">{{ items.title }}
      </router-link>
    </div>


  </div>
</template>

<script>
import logo from "../assets/images/azeem-logo.png";

export default {
  name: "SideBar",
  components: {
    logo,
  },
  data() {
    return {
      count: 0,
      checked: 'false',
      pageName: [
        {title: "Home", link: "/"},
        {title: "About", link: "/about"},
        {title: "Portfolio", link: "/portfolio"},
        {title: "Resume", link: "/resume"},
        {title: "Contact", link: "/contact-us"},
      ]
    }
  },
  methods: {
    toggleNav() {
      this.checked = !this.checked
    }
  },

}
</script>

<style lang="scss">


</style>
