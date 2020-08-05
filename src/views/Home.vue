<template>
<div>
  <div class="home">
    <b-container id="view-inicio" class="mt-4 mb-5 pt-4 pb-5">
      <div class="titulo-1 primero">Bienvenido</div> 
            <div class="titulo-1 segundo"> 
                <span class="ultimo">a CordelesMX</span>
            </div>
    <br>
        <div class="titulo-slogan animacion-1">
          Un solo proveedor para todas sus necesidades de amarre.
        </div>
    <br>
    <slider/>
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
  data(){
    return{

    }
  }
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
  
  /*background-image: url('../assets/img/Portada.jpg');*/
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
  .video-1 {
    width: 1020px;
  }
  .cont-video {
    width: 100%;
    height: 320px;
    overflow:hidden;
    align-self: center;
    }
  .titulo-1 {
      display:inline-block;
      overflow:hidden;
      white-space:nowrap;
      font-size: 4em;
      letter-spacing: -2px;
      font-weight: 200;
      color: #a13a4b;
      
      font-family: 'Franklin Gothic Medium', sans-serif !important;
    }
    .titulo-slogan {
      width: 100%;
      white-space:nowrap;
      font-size: xx-large;
      font-weight: 100;
      color:#a88d39;
      font-family: 'Franklin Gothic Medium', sans-serif !important;
    }
  @media screen and (max-width: 990px){
    .titulo-slogan {
      font-size:medium;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 600px){
      .cont-video {
        height: 200px;
      }
      .video-1 {
        width: 420px;
    }
    .titulo-slogan {
      font-size:medium;
    }
  }
  @media screen and (max-width: 500px){
    .titulo-1{
      font-size:1.5em;
      
    }
    .segundo {
      animation: reveal-mb 5s forwards;
    }
    .titulo-slogan {
      font-size: 0.7em;
    }
  }
  @media screen and (max-width: 370px){
      .cont-video {
        height: 150px;
      }
      .video-1 {
        width: 320px;
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
        30% {width: 13ex;}
        80% {opacity:1; width: 13ex;}
        100% {opacity:1;width:13ex;}
    }
    @keyframes reveal-mb {
        0% {opacity:0;width:0px;}
        20% {opacity:1;width:0px;}
        30% {width: 9ex;}
        80% {opacity:1; width: 9ex;}
        100% {opacity:1;width:9ex;}
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