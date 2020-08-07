<template>
<div>
  <div class="home">
    <b-container id="view-inicio" class="mt-4 mb-5 pt-4 pb-5">
      <div class="mi-titulo-1">Bienvenido</div> 
      <div class="mi-titulo-2"> 
          <span> a CordelesMX</span>
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
  }
}
</script>

<style scoped>

.home{
  top: 0;
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
.mi-titulo-1, .mi-titulo-2 {
    display:inline-block;
    overflow:hidden;
    white-space:nowrap;
    padding: 1px;
    font-size: 4em;
    letter-spacing: -2px;
    font-weight: 200;
    color: #a13a4b;
    font-family: 'Franklin Gothic Medium', sans-serif !important;
  }
  .mi-titulo-1{
    animation: showup 5s forwards;
  }
  .mi-titulo-2{
    width: 0px;
    animation: reveal 5s .4s forwards;
  }
  .mi-titulo-2 span{
    margin-left: -50px;
    animation: slidein 5s .4s forwards;
  }
  .titulo-slogan {
    width: 100%;
    
    font-size: xx-large;
    font-weight: 100;
    color:#a88d39;
    font-family: 'Franklin Gothic Medium', sans-serif !important;
  }
  @media screen and (max-width: 990px){
    .titulo-slogan {
      font-size:2em;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 600px){
    .titulo-slogan {
      font-size:1.7em;
    }
  }
  @media screen and (max-width: 500px){
    .mi-titulo-1, .mi-titulo-2{
      font-size:1.75em;  
      margin-top: -10px;
    }
    .mi-titulo-2 {
      animation: reveal-mb 5s forwards;
    }
    .titulo-slogan {
      font-size: .9em;
    }
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
        0% { margin-left:-800px; }
        20% { margin-left:-800px; }
        25% { margin-left:0px; }
        100% { margin-left:0px; }
    }
    
    @keyframes reveal {
      0% {opacity: 0; width: 0px;}
      10% {opacity: 1; width: 0px;}
      25% {width: 450px;}
      80% {opacity: 1;}
      100% {opacity: 1;width: 450px;}
    }
    @keyframes reveal-mb {
        0% {opacity:0;width:0px;}
        20% {opacity:1;width:0px;}
        25% {width: 12em;}
        80% {opacity:1; width: 12em;}
        100% {opacity:1;width:12em;}
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