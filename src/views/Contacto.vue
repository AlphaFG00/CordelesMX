<template>
    <div class="contacto">
      <b-container class="focus-contacto mt-3 mb-3 p-5">
        <h1 class="cssanimation titulo">Contacto</h1>  
        <br>
        <br>
        <b-row fluid>
          <b-col cols="12" md="6" sm="12" align-self="center">
            <b-card>
                <span class="titulo-card">Déjanos conocerte</span>
                <contact-form/>
            </b-card>
          </b-col>
          <b-col cols="12" md="6" sm="12" align-self="center">
            <b-card >
              <span class="titulo-card">Visitanos</span>
              <myMap :coordinates="[19.425618, -99.128960]" :height="map_height"/>
              <span>Ubicación: Jesús Maria 153 local B, colonia centro  cp 06000 delegacion Cuauhtemoc</span>
            </b-card>
          </b-col> 
        </b-row>
        <br>
        <br>
    </b-container>
    </div>
</template>
<script>
import myForm from "@/components/ContactForm.vue";
import myMap from "@/components/Map.vue";
export default {
  name:'contacto',
  components:{
    'contact-form': myForm,
    myMap
  },
   data(){
        return {
            window_width: window.innerWidth,
        }
    },
    onCreate(){
        this.show_each = this.show_each2()
    },
    methods: {
        onResize() {
            this.window_width = window.innerWidth
        }
    },
    computed: {
        map_height(){
          this.window_width = window.innerWidth
          if (this.window_width <= 500){
              return 220
            }
            else{
              return 500
            }
        }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      })
    },
    beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
    },
}
</script>
<style scoped lang="scss">
.contacto{
    top: 0;
    padding-top: 20px;
    scroll-padding-bottom: 20px;
    padding-bottom: 10px;
    background-color: white;
    background-image: url('../assets/img/distribucion_fix.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.focus-contacto{
    background-color:transparent;
    text-align: center;
    background-color: rgba(255, 255, 255,.75);
    font-weight: 400;
}
.titulo {
    display:inline-block;
    overflow:hidden;
    white-space:nowrap;
    font-size: xx-large;
    color: #a13a4b;
    font-family: 'Franklin Gothic Medium', sans-serif !important;
}
.titulo-card{
  font-size: 1.3em;
  font-weight: 600;
}
@media screen and (max-width: 565px){
      .titulo{
        font-size:x-large;
      }
      .titulo-card{
        font-size: large;
      }
    }

.cssanimation {
    animation: elevateRight 1.5s both;
}


@keyframes elevateRight {
    0% {
        transform: translateY(100%) rotate(20deg);
        transform-origin: left;
        opacity: 0;
    }
    40% {
        transform: rotate(-2deg);
        transform-origin: left;
        
    }
    65% {
        transform: rotate(0deg);
        transform-origin: left;
        opacity: 1;
    }
}

</style>
