<template>
  <b-container fluid class="pt-2 pb-2 principal">
    <b-row align-v="center" class="foot-body clear-side">
      <b-col sm="12" lg="8" class="mt-2 link-pages" order="1">
        <router-link class="link-footer" :to="{name: 'home'}">Inicio</router-link>
        <router-link class="link-footer" :to="{name: 'Productos'}">Productos</router-link>
        <router-link class="link-footer" :to="{name: 'Nosotros'}">Nosotros</router-link>
      </b-col>
      <b-col sm="12" lg="12" class="credits mt-2" order="3">
        <p>© 2020 CordelesMX. Todos los derechos reservados</p>
        <p>Desarrollado por <span class="mexa-credits"><a href="https://www.facebook.com/MexaStack-104185894740731">MexaStack</a></span></p>
      </b-col>
      <b-col sm="12" lg="4" class="social-media" order="2">
        <div class="animation-space">
          <a href="https://www.instagram.com" target="_blank">
            <i class="fab fa-instagram-square color-in"></i>
          </a>
        </div>
        <div class="animation-space">
          <a href="https://www.facebook.com/atlasjarcieria" target="_blank">
            <i class="fab fa-facebook-square color-fb"></i>
          </a>
        </div>
        <div class="animation-space">
          <a href="https://api.WhatsApp.com/send?phone=+525584813993" target="_blank">
            <i class="fab fa-whatsapp-square color-wa"></i>
          </a>
        </div>
        <span class="phone-div">
          <i class="fas fa-phone-square color-phone"></i><span class="i_block ml-3">Tel: 55-50-86-50-08</span>
        </span>
      </b-col>
    </b-row>
  </b-container>
</template>
<style scoped lang="scss">

.credits {
  padding-top: .2rem;
  display:block;
  font-family:'Times New Roman', Times, serif;
  color: #a4181a;
  margin:0 !important;
  p{margin: 0 !important;}
  p :first-child {font-size: .8em;}
  p:nth-child(2) .mexa-credits{
      font-size: 1.25em;
      font-family:'Times New Roman', Times, serif;
      :hover{
        text-decoration: none;
      }
  }
}

.social-media{
  padding-top: .2rem;
 .animation-space, .phone-div{
    display: inline-block;
    vertical-align: middle;
 }
 .animation-space{
    width: 20%;
    min-height: 4.5em;
    >a{
      font-size: 2.5em;
      transition-duration: .5s;
    }
    >a:hover{
      font-size: 3em;
      transition-duration: .5s;
    }
  }
  .phone-div{
    width: 100%;
    i, span{
      display: inline-block;
      vertical-align: middle;
    }
    i{font-size: 2.5em;}
    span{
      font-size: 1.2em;
      color:rgb(32, 39, 131);
    }
  }
    .color-phone { color: rgb(32, 39, 131) !important; }
    .color-in { color: rgb(255, 0, 136) !important; }
    .color-fb { color: rgb(0, 60, 255) !important; }
    .color-wa { color: rgb(15, 153, 3) !important; }
}

@media screen and (min-width: 992px){
  .link-footer{
    display: block;
    margin: 0 15px !important;
  }
  .phone-div{
    max-height: 3em !important;
  }
}
@media screen and (min-width:0px) and (max-width: 991px){
  .link-footer{
    display: block;
    width: 70%;
  }
  .credits{
    p{
      margin-top: 1em !important;
    }
  }
}
.principal{
  position:relative;
  padding-bottom: 0 !important;
  bottom: 0;
  .foot-body {
      background-color: whitesmoke;

      background-image:
          /* Top jagged */
          linear-gradient(135deg, rgba(245,245,245,1) 0%, rgba(245,245,245,1) 50%, rgba(245,245,245,0) 50%, rgba(245,245,245,0) 100%),
          linear-gradient(-135deg, rgba(245,245,245,1) 0%, rgba(245,245,245,1) 50%, rgba(245,245,245,0) 50%, rgba(245,245,245,0) 100%),
          /* Bottom jagged */
          linear-gradient(rgba(245,245,245,1) 0%, rgba(245,245,245,1) 50%, rgba(245,245,245,0) 50%, rgba(245,245,245,0) 100%),
          linear-gradient(rgba(245,245,245,1) 0%, rgba(245,245,245,1) 50%, rgba(245,245,245,0) 50%, rgba(245,245,245,0) 100%),
          /* Top and bottom fade  */
          linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%),
          linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
      background-position:
          /* Top jagged */
          top center, top center,
          /* Bottom jagged */
          bottom center, bottom center,
          /* Top fade */
          top center,
          /* Bottom fade */
          bottom center;
      background-size:
          /* Top + bottom jagged */
          0.75rem 0.75rem, 0.75rem 0.75rem, 0.75rem 0.75rem, 0.75rem 0.75rem,
          /* Top + bottom fade */
          100% 1rem, 100% 1rem;
      background-repeat: repeat-x;
      color: #ccc;
      letter-spacing: 1px;

      padding: 1rem 0 0 0;
      position: relative;
      text-align: center;
      transition: all .25s ease-in-out;

    &.clear-side {
      background-color: #efdde4;
      background-image:
          /* Top jagged */
          linear-gradient(135deg, rgb(245, 245, 245) 50%, rgba(245,245,245,0) 50%),
          linear-gradient(-135deg,rgb(245, 245, 245) 50%, rgba(245,245,245,0) 50%),
          /* Bottom jagged */
          linear-gradient(#f7f1f200 50%, rgba(255,255,255,0) 50%),
          linear-gradient(#f7f1f200 50%, rgba(255,255,255,0) 50%),
          /* Top and bottom fade  */
          linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,0) 100%),
          linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,0) 100%),
          /* Sides */
          linear-gradient(90deg, rgba(245,245,245,1) 2%, rgba(200,200,200,0) 2%, rgba(200,200,200,0) 97%, rgba(245,245,245,1) 97%);
      background-position:
          /* Top jagged */
          top center, top center,
          /* Bottom jagged */
          bottom center, bottom center,
          /* Top fade */
          top center,
          /* Bottom fade */
          bottom center,
          /* Sides */
          center center;
      background-size:
          /* Top + bottom jagged */
          0.75rem 0.75rem, 0.75rem 0.75rem, 0.75rem 0.75rem, 0.75rem 0.75rem,
          /* Top + bottom fade */
          100% 1rem, 100% 1rem,
          /* Sides */
          100% 100%;
      background-repeat:
          /* All jagged and fade */
          repeat-x, repeat-x, repeat-x, repeat-x, repeat-x, repeat-x,
          /* Sides */
          repeat-y;
    }

    .link-pages {
      & a {
            background: none;
            background-color: rgba(0,0,0,.5);
            border-radius: 1rem;
            border: none;
            color: #eee;
            display: inline-block;
            line-height: 2rem;
            padding: 0 1.5rem;
            margin:.2rem 0;
            text-decoration: none;
            transition: all .125s ease-in-out;
          
            &:hover {
              background-color: #a4181a9d;
            }
      }
    }
  }
}
</style>