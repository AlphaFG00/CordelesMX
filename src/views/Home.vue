<template>
<div>
  <div class="home">
    <b-container id="view-inicio">
      <h1>Bienvenido</h1>
      <p>
        Un solo proveedor para todas sus necesidades de amarre.
      </p>
      <slider/>
    </b-container>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import slider from '@/components/Slider.vue'
export default {
  name: 'Home',
  components: {
    slider
  },
}
</script>

<style scoped>


.home{
  top: 0;
  min-width: 100vw;
  height: 100vh;
  padding-top: 20px;
}

#view-inicio{
    background-color:transparent;
    text-align: center;
    background-color: rgba(255, 255, 255,1);
  }
</style>