<template>
  <b-container fluid class="pt-2 pb-2 foot-body">
    <b-row align-v="center">
      <b-col sm="4" class="text-center mt-2 " order="3" order-sm="1">
        <a class="i_block">Términos</a><a class="i_block">Privacidad</a>
        <p class="rights-reserved">© 2020 CordelesMX. Todos los derechos reservados</p>
      </b-col>
      <b-col sm="4" class="text-center " order="2">
        <router-link :to="{name: 'home'}">Inicio</router-link>
        <router-link :to="{name: 'Nosotros'}">Nosotros</router-link>
        <router-link :to="{name: 'Productos'}">Productos</router-link>
      </b-col>
      <b-col sm="4" class="text-center" order="1" order-sm="3">
        <a href="" target="_blank">
          Facebook
        </a>
        <a href="#" target="_blank">
          WhatsApp
        </a><br>
        <span class="block">
          <i class="fas fa-phone-square "></i><span class="i_block ml-3">(+555) 555 555 5555</span>
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