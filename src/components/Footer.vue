<template>
  <b-container fluid class="pt-2 pb-2 foot-body">
    <b-row align-v="center">
      <b-col sm="4" class="text-center mt-2 " order="3" order-sm="1">
        <router-link :to="{name: 'home'}">Inicio</router-link>&nbsp;
        <router-link :to="{name: 'Nosotros'}">Nosotros</router-link>&nbsp;
        <router-link :to="{name: 'Productos'}">Productos</router-link>&nbsp;
      </b-col>
      <b-col sm="4" class="text-center " order="2">
       
      </b-col>
     <b-col sm="4" class="text-center" order="1" order-sm="3">
        <a href="https://twitter.com/" target="_blank">
          Twitter
        </a>
        <a href="https://www.facebook.com/atlasjarcieria" target="_blank">
          Facebook
        </a>
        <a href="https://api.WhatsApp.com/send?phone=+525584813993" target="_blank">
          WhatsApp
        </a><br>
        <span class="block">
          <i class="fas fa-phone-square color-phone"></i><span class="i_block ml-3">tel: 55-50-86-50-08</span>
        </span>
      </b-col>
    </b-row>
  </b-container>
</template>
<style>
.foot-body {
  border-top: double 4px #a13a4b;
  margin-top: 0em;
  width: 100%;
  position: relative;
  background:whitesmoke;
  /*height: 20px; /**quitar cuando se le de estilo */
}

.rights-reserved {
display:block;
font-family:'Times New Roman', Times, serif;
font-size: .8em;
margin-top: .8em;
}
</style>