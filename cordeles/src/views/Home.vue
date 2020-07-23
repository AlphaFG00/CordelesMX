<template>
  <div class="home">
    <h1>bienvenido</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
      a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
    </p>
    <slider/>
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