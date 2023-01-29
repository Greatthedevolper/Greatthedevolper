<script setup>

</script>

<template>
  <div class="form-wrapper">
    <h2>Contact Me:</h2>
    <div class="row">
      <div class="col-md-5 ">
        <form class="contact-form" method="post">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Your Name">
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="text" class="form-control" id="email" placeholder="Enter Your Email">
          </div>
          <div class="form-group">
            <input type="checkbox">
            <label>Hire Me</label>
          </div>
          <div class="form-group">
            <label for="message">Write Message</label>
            <textarea class="form-control" placeholder="Message Me"></textarea>
          </div>

          <button class="btn-style">Submit</button>
        </form>
      </div>
      <div class="col-md-7 ">
        <div class="card-wrapper">
          <div class="row">
            <div class="col-lg-4">
              <a class="contact-card" href="tel:03041135074">
                <span class="icon-wrapper">
                  <i class="lni lni-phone"></i>
                </span>
                <h3>Call me</h3>
                <span class="card-details">03041135074</span>
              </a>
            </div>
            <div class="col-lg-4">
              <a class="contact-card" href="tel:03041135074">
                <span class="icon-wrapper">
                 <i class="lni lni-whatsapp"></i>
                </span>
                <h3>Whats me</h3>
                <span class="card-details">03041135074</span>
              </a>
            </div>
            <div class="col-lg-4">
              <a class="contact-card" href="mailto:greatthedevolper@gmail.com">
                <span class="icon-wrapper">
                 <i class="lni lni-envelope"></i>
                </span>
                <h3>Email me</h3>
                <span class="card-details">greatthedevolper@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>