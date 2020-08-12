<template>
    <div >
      <b-container>
        <h1 class="cssanimation titulo">Contacto</h1>
        <div id="container">
            Amarrando Buenos
            <div id="flip">
                <div><div>Prdoductos</div></div>
                <div><div>Negocios</div></div>
                <div><div>Tratos</div></div>
            </div>
            Con nuestros clientes
            </div>
            <p class="mt-2">
    Consulta de precios, cotizaciones, asesoría e información de nuestros productos </p>
    <p>La dirección es Jesús Maria 153 local b colonia centro  cp 06000 delegacion Cuauhtemoc</p>
    
   <contact-form/>
   <myMap :coordinates="[19.425618, -99.128960]" :height="220"/>
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
    return{
    }
  },

}
</script>

<style scoped lang="scss">
.algo {
  height: 320px;
  width: 720px;
  
}
.titulo {
    font-size: 3em;
    letter-spacing: -2px;
    font-weight: 70;
    color: #000;
    text-align: center;
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

#container {
  color:#999;
  text-transform: uppercase;
  font-size:36px;
  font-weight:bold;  
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


</style>
