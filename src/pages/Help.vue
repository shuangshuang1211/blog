<template>
  <Layout>
    <header class="masthead header6-box" ref="header">
      <!-- :style="`background-image: url(${img})`" -->
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>ShuangShuang</h1>
              <span class="subheading">学海无涯苦作舟</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- content -->
    <ContentBox>
      <div class="box">
        <form id="contactForm" class="form " data-sb-form-api-token="API_TOKEN">
          <div class="form-floating item-input">
              <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
              <label for="name ">姓名</label>
              <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
          </div>
          <div class="form-floating item-input">
              <input class="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
              <label for="email">邮箱</label>
              <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
              <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
          </div>
          <div class="form-floating item-input">
              <input class="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required" />
              <label for="phone">电话</label>
              <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
          </div>
          <div class="form-floating item-input">
              <textarea class="form-control" id="message" placeholder="Enter your message here..." style="height: 12rem" data-sb-validations="required"></textarea>
              <label for="message">简讯</label>
              <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
          </div>
          <br />
          <!-- Submit success message-->
          <!---->
          <!-- This is what your users will see when the form-->
          <!-- has successfully submitted-->
          <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
          </div>
          <!-- Submit error message-->
          <!---->
          <!-- This is what your users will see when there is-->
          <!-- an error submitting the form-->
          <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
          <!-- Submit Button-->
          <button class="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
      </form>
      </div>
    </ContentBox>
  </Layout>
</template>

<script>
// import Header from '../components/Header'

export default {
  metaInfo: {
    title: 'Help'
  },
  name: 'Help',
  components: {
    // Header
  }
}
</script>

<style>
  header.header6-box {
    background-image: url(../../static/images/banner/6.jpg);
  }
  .box {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  .form {
    width: 50%;
    /* box-shadow: 5px 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%) !important; */
  }
  /* .item-input {
    padding: 5px 10px 5px 48px;
  } */
</style>
