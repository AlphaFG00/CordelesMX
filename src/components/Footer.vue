<template>
  <b-container fluid class="pt-2 pb-2 foot-body">
    <b-row align-v="center">
      <b-col sm="4" class="text-center mt-2 " order="3" order-sm="1">
        <router-link :to="{name: 'home'}">Inicio</router-link>
        <router-link :to="{name: 'Nosotros'}">Nosotros</router-link>
        <router-link :to="{name: 'Productos'}">Productos</router-link>
      </b-col>
      <b-col sm="4" class="text-center " order="2">
       
      </b-col>
     <b-col sm="4" class="text-center" order="1" order-sm="3">
        <a href="https://twitter.com/_cgarquitectura" target="_blank">
          <i class="fab fa-twitter-square color-tw"></i>
        </a>
        <a href="https://www.facebook.com/CG-Arquitectura-y-Desarrollos-106084567863601/" target="_blank">
          <i class="fab fa-facebook-square color-fb"></i>
        </a>
        <a href="https://www.instagram.com/cgarqydesarrollos/" target="_blank">
          <i class="fab fa-instagram-square" style="color: deeppink"></i>
        </a>
        <a href="https://api.WhatsApp.com/send?phone=+5218119783811" target="_blank">
          <i class="fab fa-whatsapp-square color-wa"></i>
        </a><br>
        <span class="block">
          <i class="fas fa-phone-square color-phone"></i><span class="i_block ml-3">(+521) 811 978 3811</span>
        </span>
      </b-col>
    </b-row>
  </b-container>
</template>
<style>
.foot-body {
  border-top: double 4px #fd0100;
  bottom: 0;
  width: 100%;
  position: absolute;
  height: 20px; /**quitar cuando se le de estilo */
}
.rights-reserved {
display:block;
font-family:'Times New Roman', Times, serif;
font-size: .8em;
margin-top: .8em;
}
</style>