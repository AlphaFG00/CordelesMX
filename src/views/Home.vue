<template>
<div>
  <div class="home">
    <b-container id="view-inicio">
    <h1>bienvenido</h1>
    <p>
      Un solo proveedor para todas sus necesidades de amarre.
    </p>
    <slider/>
            <b-container>

              <h5>Ejemplo de Productos</h5>

                  <b-card title="Yute" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top  tag="article" style="max-width: 20rem;" class="mb-2">
                  <b-card-text>
                    Info del Yute
                  </b-card-text>

                            <b-button variant="primary" v-b-toggle.collapse-1 id="collapse-1">Medidas</b-button> |
                            <b-button href="#" variant="primary" v-b-toggle.collapse-2 id="collapse-2">Peso </b-button> |
                            <b-button href="#" variant="primary"  v-b-toggle.collapse-3 id="collapse-3">Piezas y Paca</b-button>  |
                            este boton debe desplegar un modal con la imagen de la tabla
                            <b-button href="#" variant="success"  v-b-modal.modal-1 id="modal-1">Informacion Detallada</b-button>

                              
                              <b-collapse id="collapse-1" class="mt-2">
                                  <b-card>
                                    <p class="card-text">aca van las pinchis medidas xD</p>
                                  </b-card>
                              </b-collapse>
                               <b-collapse id="collapse-2" class="mt-2">
                                  <b-card>
                                    <p class="card-text">aca van los pesos xD</p>
                                  </b-card>
                              </b-collapse>
                              <b-collapse id="collapse-3" class="mt-2">
                                  <b-card>
                                    <p class="card-text">aca van mas info </p>
                                  </b-card>
                              </b-collapse>
                              
                                  <b-modal id="modal-1" title="Mas Datos del Producto">
                                       <p class="my-4">Y aca va la tabla</p>
                                  </b-modal> 
                  </b-card>
            </b-container>
    </b-container>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import slider from '@/components/Slider.vue'
export default {
  name: 'Home',
  components: {
    slider
  },
  
}
</script>
<style scoped>
#view-inicio{
    background-color:transparent;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.568);
  }
</style>