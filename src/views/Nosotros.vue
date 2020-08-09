<template>
  <div class="nosotros">
      <b-container class="focus-nosotros mt-3 mb-3 p-4" >
          <b-container class="pt-4 mb-4">
              <div class="titulo-1 primero">Conoce</div> 
              <div class="titulo-1 segundo"> 
                  <span class="ultimo">Nuestra Historia</span>
              </div>
          </b-container>
          <div>
          <div class="primera-parte">
          Somos una empresa familiar, 100% mexicana, fundada hace más de 33 años; dedicada a la fabricación, distribución y servicios de todos los productos que son para empaque, amarre, embalaje y limpieza. Donde hemos logrado combinar la mejor calidad en nuestros productos, los mejores precios del mercado, la amabilidad con el ambiente y el compromiso de lograr la satisfacción de nuestros clientes. Todo esto es lo que nos ha posicionado como líderes en el mercado.
          </div>
          </div>
          <br><br>
          <div style="height:120px;">
            <span class="segunda-parte">
              <ul>
                  <li class="li-1"> Mejores precios del mercado</li>
                  <li class="li-2"> Lealtad a nuestros clientes</li>
                  <li class="li-3"> Amabilidad con el ambiente</li>
                  <li class="li-4"> Satisfacción de nuestros clientes</li>
              </ul>
            </span>
          </div>
          <b-row fluid align-v="center">
            <b-col>
              <div class="titulo-2 ">
                  <span class="mision">Misión</span>
              </div>
              <div class="tercera-parte">
                Generar productos y ofrecer servicios 100% mexicanos, conjugando la eficiencia y calidad de éstos, promoviendo la satisfacción del cliente al combinar nuestro mejor esfuerzo y dedicación para cumplir sus más grandes expectativas.
              </div>
              <div class="titulo-2">
                <span class="vision">Visión</span>
              </div>
              <div class="cuarta-parte">
                Ser una empresa innovadora, con una mejora continua a través de una cultura basada en el esfuerzo, lealtad y compromiso hacia cada uno de nuestros clientes, no dejando atrás el desarrollo sustentable de nuestro país.
              </div>
            </b-col>
            <b-col cols="12" md="6" sm="12" align-self="center">
              <div>
                <div class="imagen-1">
                    <b-img id="img-1" :src="require('@/assets/img/natural.jpg')" />
                </div>
              </div>
            </b-col>
          </b-row>
         
      </b-container>
  </div>
</template>
<style scoped lang="scss">
  .nosotros{
    top: 0;
    padding-top: 20px;
    scroll-padding-bottom: 20px;
    padding-bottom: 10px;
    background-color: white;
    background-image: url('../assets/img/Maguey_fix.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: mostrar 1s forwards;
  }
  .focus-nosotros {
    background-color:transparent;
    text-align: center;
    background-color: rgba(255, 255, 255,.75);
    font-weight: 400;
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
    margin-bottom: 1em;
    margin-top:2.5em;
    white-space:nowrap;
    font-size: x-large;
    color:#b0455c;
    font-family: 'Franklin Gothic Medium', sans-serif !important;
  }
  @media screen and (max-width: 450px){
    .titulo-1{
      font-size:x-large;
    }
    .focus-nosotros{
      font-size: .95em;
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
    30% {width: 281px;}
    80% {opacity:1; width: 281px;}
    100% {opacity:1;width:281px;}
  }
    
  .primera-parte{
    opacity: 0;
    display: block;
    text-align: left;
    padding: 1.4ex;
    width: 100%;
    animation: show-text 1.5s 1.5s forwards;
  }
  .segunda-parte{
    display: block;
    opacity: 1;
    font-size: medium;
    width: 100%;
    color: rgb(12, 52, 105);
    padding: 10px;
    text-align: left;
  }
  .mision {
    opacity: 0;
    display: block;
    text-align: left;
    animation: move-right 1s 5s forwards;
  }
  .imagen-1 {
    opacity: 0;
    display: block;
    overflow: hidden;
    text-align: center;
    margin-top: 50px;
    width: 100%;
    animation: mision-img 2.5s 6.5s forwards;
  }
  #img-1{
    width:400px; 
    height:230px;
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
    animation: move-right 1s 5s forwards;
  }
  .tercera-parte{
    opacity: 0;
    display: block;
    text-align: left;
    padding-left: .8em;
    padding-right: .8em;
    width: 100%;
    animation: mision 2s 6s forwards;
  }
  .li-1{
    opacity: 0;
    animation: show-list-part 1s 3s forwards;
  }
  .li-2{
    opacity: 0;
    animation: show-list-part 1s 3.5s forwards;
  }
  .li-3{
    opacity: 0;
    animation: show-list-part 1s 4s forwards;
  }
  .li-4{
    opacity: 0;
    animation: show-list-part 1s 4.5s forwards;
  }

.cuarta-parte{
    opacity: 0;
    text-align: left;
    display: block;
    padding-left: .8em;
    padding-bottom: 1em;
    padding-right: .8em;
    width: 100%;
    animation: mision 2s 6s forwards;
  }

@keyframes vision {
  0% {
    opacity: 0;
    margin-left: -100px;
  }
  20% {
    opacity: 1;
    margin-left: 0px;
  }
  90%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes mision {
  0% {
    opacity: 0;
    margin-left: -100px;
  }
  20% {
    opacity: 1;
    margin-left: 0px;
  }
  90%{
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes mision-img {
  0% {
    opacity: 0;
    margin-left: 200px;
  }
  20% {
    opacity: 1;
    margin-left: 0px;
  }
  90%{
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
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
    font-size:1.1em;
    color:rgb(0, 165, 143);
  }
  60%{
    opacity: 1;
    font-size: 1.1em;
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
  @keyframes mostrar {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>