<template>
<div>
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="8" fluid="sm" >
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 3px 3px 3px #000;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              caption="Cordeles"
              text="Amplia variedad de cordeles"
            >
            <template v-slot:img>
                <img
                  class="d-block  w-100"
                  width="720"
                  height="320"
                  src="@/assets/Gifs/Presentacion.gif"
                  alt="cordeles"
                >
              </template>
            </b-carousel-slide>

            <b-carousel-slide>
              <h2>Cable</h2>
              <template v-slot:img>
                <img 
                src="@/assets/productos/Cable.jpg"
                width="720"
                height="320"
                alt="Cable.jpg"/>
              </template>
            </b-carousel-slide>

            <b-carousel-slide>
              <h2>Polipropileno</h2>
              <template v-slot:img>
                <img 
                src="@/assets/productos/Cable_polipropileno.jpg"
                width="720"
                height="320"
                alt="Cable_polipropileno.jpg"/>
              </template>
            </b-carousel-slide>

          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
</div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = true
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>