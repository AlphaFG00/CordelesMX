<template>
<div>
  <div class="home">
<<<<<<< HEAD
    <b-container id="view-inicio">
      <h1>Bienvenido</h1>
      <p>
        Un solo proveedor para todas sus necesidades de amarre.
      </p>
      <slider/>
=======
    <b-container id="view-inicio" class="mt-4 mb-5 p-5">
      <div class="titulo-1 primero">Bienvenido </div> 
            <div class="titulo-1 segundo"> 
                <span class="ultimo">a CordelesMX</span>
            </div>
    <br>
        <div class="titulo-slogan animacion-1">
          Un solo proveedor para todas sus necesidades de amarre.
        </div>
    <br>
    <slider/>
      <p class="mt-2">
    Consulta de precios, cotizaciones, asesoría e información de nuestros productos; <router-link :to="{name: 'Contacto'}">contactenos</router-link> </p>
    <p>
    Dirección:
    Adolfo Gurrión No. 135 Col. Centro
    México, D.F. CP 15810
    Cuauhtémoc
    D.F.
    15810
    México</p>
   
          <!--<mdb-container>
                <mdb-carousel :interval="8000" :items="videoCarousel" indicators controlls></mdb-carousel>
            </mdb-container> -->
>>>>>>> c082ba74e3476422814cbd3c1ef59c246c0aa556
    </b-container>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import slider from '@/components/Slider.vue'
//import { mdbContainer, mdbCarousel } from 'mdbvue';

export default {
  name: 'Home',
  components: {
    slider,

  },
<<<<<<< HEAD
=======
  data(){
    return{

    }
  }
>>>>>>> c082ba74e3476422814cbd3c1ef59c246c0aa556
}
</script>

<style scoped>

.home{
  top: 0;
  /*min-width: 10vw;*/
  /*height: 100vh;*/
  padding-top: 20px;
  scroll-padding-bottom: 20px;
  padding-bottom: 10px;
  
  background-image: url('../assets/img/Portada.jpg');
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: mostrar 1s forwards;
}

#view-inicio{
    background-color:transparent;
    text-align: center;
    background-color: rgba(255, 255, 255,.65);
  }

  .titulo-1 {
      display:inline-block;
      overflow:hidden;
      white-space:nowrap;
      font-size: xx-large;
      color: #a13a4b;
      font-weight: 600;
      font-family: 'Franklin Gothic Medium', sans-serif !important;
    }
    .titulo-slogan {
      width: 100%;
      
      font-size: x-large;
      color:#a88d39;
      font-family: 'Franklin Gothic Medium', sans-serif !important;
    }
    @media screen and (max-width: 500px){

      .titulo-1{
        font-size:large;
      }
      .titulo-slogan {
        font-size:medium;
      }
    }
    .primero {    
      animation: showup 5s forwards;
    }
    
    .segundo {
      width:0px;
      animation: reveal 5s forwards;
    }
    
     .ultimo {
      margin-left:-355px;
      animation: slidein 5s forwards;
    }
    .animacion-1 {
    animation: elevateRight 1.5s 1.5s both;
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
    
    @keyframes showup {
        0% {opacity:0;}
        20% {opacity:1;}
        80% {opacity:1;}
        100% {opacity:1;}
    }
    
    @keyframes slidein {
        0% { margin-left:-100px; }
        20% { margin-left:-100px; }
        35% { margin-left:0px; }
        100% { margin-left:0px; }
    }
    
    @keyframes reveal {
        0% {opacity:0;width:0px;}
        20% {opacity:1;width:0px;}
        30% {width: 15ex;}
        80% {opacity:1; width: 15ex;}
        100% {opacity:1;width:15ex;}
    }
    @keyframes mostrar {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>