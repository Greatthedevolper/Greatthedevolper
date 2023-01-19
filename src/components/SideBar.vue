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
.menu-wrapper-btn {
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }

}

a {
  text-decoration: none;
}

.menu-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;


  .toggle {
    display: none;
  }

  .menu-label {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all .8s;
    position: relative;
    z-index: 9;

    img {
      width: 100%;
    }

    &:hover {
      animation: none;
    }
  }

  .tab {
    position: absolute;
    background: white;
    color: black;
    width: 80px;
    height: 80px;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s;
    opacity: 0;
    border-radius: 50%;
    text-decoration: none;

    &.router-link-active.router-link-exact-active,
    &:hover {
      background: green;
      color: black;
    }
  }

  .toggle:checked ~ .tab {
    opacity: 1;
    top: 45px;
    transform: translate(-50%, -50%) scale(1);

    &:nth-of-type(1) {
      left: 150px;
      transition-delay: 0s;
    }

    &:nth-of-type(2) {
      left: 235px;
      transition-delay: 0.125s;
    }

    &:nth-of-type(3) {
      left: 320px;
      transition-delay: 0.25s;
    }

    &:nth-of-type(4) {
      left: 405px;
      transition-delay: 0.375s;
    }

    &:nth-of-type(5) {
      left: 490px;
      transition-delay: 0.5s;
    }

  }
}

</style>
