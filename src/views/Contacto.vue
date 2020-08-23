<template>
    <div class="contacto">
      <b-container class="focus-contacto mt-3 mb-3 p-5">
        <!-- <h1 class="cssanimation titulo">Contacto</h1> -->

        <div id="container">
        Amarrando Buenos
        <div id="flip">
          <div><div>Productos</div></div>
          <div><div>Negocios</div></div>
          <div><div>Tratos</div></div>
        </div>
        Con Nuestros Clientes
      </div>

        <br>
        <br>
        <b-row fluid>
          <b-col cols="12" md="6" sm="12" align-self="center">
            <b-card>
                <div class="titulo-card">Déjanos conocerte</div>

                <contact-form/>
            </b-card>
          </b-col>
          <b-col cols="12" md="6" sm="12" align-self="center">
            <b-card >
              <div class="titulo-card">Visitanos</div>

              <myMap :coordinates="[19.425618, -99.128960]" :height="map_height"/>
              <span>Ubicación: Jesús Maryia 153 local B, colonia centro  cp 06000 delegacion Cuauhtemoc</span>
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
#container {
  color: #a13a4b;
  //text-transform: uppercase;
  font-size: xx-large;
  font-weight:400;
  width:100%;
  bottom:45%;
  display:block;
}

#flip {
  height:50px;
  overflow:hidden;
}

#flip > div > div {
  color:#fff;
  padding:4px 12px;
  height:45px;
  margin-bottom:45px;
  display:inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  background:#42c58a;
}
#flip div:first-child div {
  background:#4ec7f3;
}
#flip div:last-child div {
  background:#DC143C;
}

@keyframes show {
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}
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
  margin-bottom: 1em;
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
