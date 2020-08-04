<template>
<div class="nosotros">
    <b-container >
        <b-container class="pt-4 mb-4">
            <div class="titulo-1 primero">Conoce</div> 
            <div class="titulo-1 segundo"> 
                <span class="ultimo">nuestra historia</span>
            </div>
        </b-container>
        <div>
        <div class="primera-parte">
        Somos una empresa familiar, 100% mexicana, fundada hace más de 33 años; dedicada a la fabricación, distribución y servicios de todos los productos que son para empaque, amarre, embalaje y limpieza. Donde hemos combinado la mejor calidad en nuestros productos, los mejores precios del mercado, la amabilidad con el ambiente y el compromiso de lograr la satisfacción de nuestros clientes. Todo esto es lo que nos ha posicionado como líderes en el mercado.
        </div>
        </div>
        <span class="segunda-parte">
        <ul>
            <li class="li-1"> Mejores precios del mercado</li>
            <li class="li-2"> Lealtad a nuestros clientes</li>
            <li class="li-3"> Amabilidad con el ambiente</li>
            <li class="li-4"> Satisfacción de nuestros clientes</li>
        </ul>
        </span>
        <div class="titulo-2 ">
            <span class="mision">Misión</span>
        </div> 
        <b-container class="mt-3 mb-4">
            <b-row align-v="center">
                <b-col cols="12" md="6" sm="12"  lang>
                    <div class="tercera-parte">
                    Generar productos y ofrecer servicios 100% mexicanos, conjugando la eficiencia y calidad de éstos, promoviendo la satisfacción del cliente al combinar nuestro mejor esfuerzo y dedicación para cumplir sus más grandes expectativas.
                    </div>
                </b-col>
                <b-col cols="12" md="6" sm="12" align-self="center">
                    <div class="imagen-1">
                        <b-img id="img-1" :src="require('@/assets/img/Maguey.jpg')" width="335" height="250"/>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <div class="titulo-2 ">
            <span class="vision">Visión</span>
        </div> 
        <b-container class="mt-3 pb-3">
            <b-row align-v="center">
                <b-col cols="12" lg="6" md="6" sm="12">
                    <div class="imagen-2">
                        <b-img :src="require('@/assets/img/burrero_rafia.jpg')" width="335" height="250"/>
                    </div>
                </b-col>
                <b-col cols="12" lg="6" md="6" sm="12">
                    <div class="cuarta-parte">
                        Ser una empresa innovadora, con una mejora continua a través de una cultura basada en el esfuerzo, lealtad y compromiso hacia cada uno de nuestros clientes, no dejando atrás el desarrollo sustentable de nuestro país.
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</div>
</template>
<style>
    .nosotros{
      background-color: white;
    }
    .titulo-1 {
      display:inline-block;
      overflow:hidden;
      white-space:nowrap;
      font-size: xx-large;
      color: #a13a4b;
      font-family: 'Franklin Gothic Medium', sans-serif !important;
    }

    .titulo-2 {
      display:inline-block;
      overflow:hidden;
      white-space:nowrap;
      font-size: x-large;
      color:#b0455c;
      font-family: 'Franklin Gothic Medium', sans-serif !important;
    }
    @media screen and (max-width: 500px){
      .titulo-1{
        font-size:x-large;
      }
      .titulo-2 {
        font-size:medium;
        font-weight: 700;
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
    
    .primera-parte{
      opacity: 0;
      display: block;
      text-align: left;
      
      width: 100%;
      animation: show-text 2.5s 1.5s forwards;
    }
    .segunda-parte{
    display: block;
    opacity: 1;
    font-size: medium;
    width: 100%;
    color: rgb(12, 52, 105);
    padding: 5px;
    text-align: left;
  }
  .mision {
        opacity: 0;
        display: block;
        text-align: left;
        animation: move-right 1.2s 6s forwards;
    }
    .imagen-1 {
      opacity: 0;
      display: block;
      text-align: center;
      width: 100%;
      animation: move-right 1s 6.5s forwards;
    }  
    .imagen-2 {
      opacity: 0;
      display: block;
      text-align: center;
      width: 100%;
      animation: show-text 2.5s 7.5s forwards;
    }    
    .vision {
        opacity: 0;
        display: block;
        text-align: left;
        width: 100%;
        animation: move-right 1.2s 8s forwards;
    }
    
  .tercera-parte{
      opacity: 0;
      display: block;
      text-align: left;
      margin-bottom: 1em;
      width: 100%;
      animation: move-right 1.5s 6.5s forwards;
    }
  .li-1{
    opacity: 0;
    animation: show-list-part 1s 3.5s forwards;
  }

  .li-2{
    opacity: 0;
    animation: show-list-part 1s 4s forwards;
  }
  .li-3{
    opacity: 0;
    animation: show-list-part 1s 4.5s forwards;
  }
  .li-4{
    opacity: 0;
    animation: show-list-part 1s 5s forwards;
  }
.cuarta-parte{
      opacity: 0;
      display: block;
      text-align: left;
      margin-top: 1em;
      width: 100%;
      animation: show-text 2.5s 7.5s forwards;
    }


@keyframes move-right {
    0% { margin-left:-100px; opacity: 0;}
    20% {opacity: 1;}
    100%{margin-left:0px; opacity: 1;}
}
  @keyframes show-list-part {
  0% {
    opacity: 0;
    font-size: 1em;
  }
  40%{
    opacity: 1;
    font-size:1.2em;
    color:rgb(0, 165, 143);
  }
  60%{
    opacity: 1;
    font-size: 1.2em;
    color: rgb(231, 192, 71);
  }
  100% {
    opacity: 1;
    font-size: 1em;
    color: #52867f;
  }
}
@keyframes show-text {
  0% {
    opacity: 0;
    margin-left: 200px;
  }
  10% {
    opacity: 0;
  }
  100% {
    margin-left: 0px;
    opacity: 1;
  }
}



</style>