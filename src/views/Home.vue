<template>
  <div class="home">
    <BannerPlatoFuerte/><br>
    <BannerPostres/><br>
    <BannerBebidas/><br>
    <section-footer></section-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerPlatoFuerte from '@/components/BannerPlatoFuerte.vue'
import BannerPostres from '@/components/BannerPostres.vue'
import BannerBebidas from '@/components/BannerBebidas.vue'
import SectionFooter from '@/components/SectionFooter.vue'

export default {
  name: 'Home',
  components: {
    BannerPlatoFuerte,
    BannerPostres,
    BannerBebidas,
    SectionFooter
  }
}
</script>
