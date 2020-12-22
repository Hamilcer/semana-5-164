<template>
  <div class="about">
    <TopMenu1 msg="Welcome to Your Vue.js App"/>
    <BannerRestaurantes/><br>
    <section-footer></section-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import TopMenu1 from '@/components/TopMenu1.vue'
import SectionFooter from '@/components/SectionFooter.vue'
import BannerRestaurantes from '@/components/BannerRestaurantes.vue'

export default {
  name: 'About',
  components: {
    TopMenu1,
    SectionFooter,
    BannerRestaurantes
  }
}
</script>