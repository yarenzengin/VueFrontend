<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"  style="cursor: pointer">RICH SHOP</router-link>
      <div class="navbar-nav"  style="cursor: pointer">
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Ana Sayfa </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Hakkımızda </router-link>
        </li>
      </div>
      <div class="navbar-nav ml-auto authenticated">
        <router-link :to="{ name: 'Login' }" class="btn btn-primary" style="margin-top: 8px;">Giriş Yap</router-link>
        <router-link :to="{ name: 'Register' }" class="btn btn-warning"  style="margin-top: 8px;margin-left: 3px;">Kayıt Ol</router-link>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
  <footer class="mt-5 navbar-dark bg-dark" style="margin-bottom: 0px;width: 100%;">
    <div class="container">
      <div class="d-flex justify-content-between py-4 my-4 border-top text-white">
        <p class="mt-2">© 2020 Rich Shop. Tüm hakları saklıdır.</p>
        <div class="d-flex">
          <a href="/products" class="nav-link text-decoration-none me-3 text-white">Ana Sayfa</a>
          <a href="/about" class="nav-link text-decoration-none me-3 text-white">Hakkımızda</a>
        </div>
        <div class="btn ss-go-top link-is-visible" style="background-color: lightpink;">
          <a class="smoothscroll text-decoration-none text-white pb-3" title="Back to Top" href="#top">
            top
          </a>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'App',
  methods: {
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
*{
  font-family: "Raleway", sans-serif;
}
@media screen and(min-width: 991px) {
  .authenticated{
    min-width: 250px;
  }
}
</style>
