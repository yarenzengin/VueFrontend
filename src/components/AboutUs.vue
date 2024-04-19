<template>
  <div class="about-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="section-title">Hakkımızda</h2>
          <p class="section-description">
            Rich Shop, 2020 yılında kurulan ve o günden beri müşterilere kaliteli ürünler sunan güvenilir bir e-mağazadır. Amacımız, müşterilerimize benzersiz alışveriş deneyimleri sunmak ve onların ihtiyaçlarını karşılamak için geniş bir ürün yelpazesi sunmaktır.
          </p>
          <p class="section-description">
            Müşteri memnuniyeti ve güvenilirlik, işimizin temel değerleridir. Siz değerli müşterilerimize en iyi hizmeti sunmak için sürekli olarak çalışıyoruz ve her zaman geri bildirimlerinizi dikkate alıyoruz. Rich Shop olarak, işimizi dürüstlük, şeffaflık ve müşteri odaklılık ilkeleriyle yürütüyoruz.
          </p>
          <p class="section-description">
            Ayrıca, sadece müşterilere ürün satmakla kalmıyor, aynı zamanda onlara bilgi ve rehberlik sağlamaya da odaklanıyoruz.
          </p>
        </div>
        <div class="col-md-6">
          <img src="../../hakkimizda.png" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "AboutUs"
}
</script>

<style>
.section-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.section-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.about-section img {
  max-width: 100%;
  height: auto;
}
</style>
