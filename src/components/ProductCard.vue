<template>
    <div>
    <b-card :title="productName" :img-src="image" img-alt="Image" img-top class="mb-2">
        <b-card-text>
            {{info}}
        </b-card-text>
        <b-button v-b-toggle="'collapse'+reference+'-1'" :id="'collapse'+reference+'-1'">Medidas</b-button>
        <b-button v-b-toggle="'collapse'+reference+'-2'" :id="'collapse'+reference+'-2'">Peso </b-button>
        <b-button v-b-toggle="'collapse'+reference+'-3'" :id="'collapse'+reference+'-3'">Piezas y Paca</b-button>
        <b-button v-b-modal="'ModalProduct'+reference" id="modal-1">Informacion Detallada</b-button>
    </b-card>
        <b-collapse :id="'collapse'+reference+'-1'" class="mt-2">
            <b-card>
                <p class="card-text">{{measures}}</p>
            </b-card>
        </b-collapse>
        <b-collapse :id="'collapse'+reference+'-2'" class="mt-2">
            <b-card>
              <p class="card-text">{{weight}}</p>
            </b-card>
        </b-collapse>
        <b-collapse :id="'collapse'+reference+'-3'" class="mt-2">
            <b-card>
              <p class="card-text">{{pieces}}</p>
            </b-card>
        </b-collapse>
        <b-modal :id="'ModalProduct'+reference" :class="['modalStyle']" title="Mas Datos del Producto">
            <p class="my-4">Y aca va la tabla {{reference}}</p>
        </b-modal>

    </div>
</template>
<script>
export default {
    name: 'ProductCard',
    props:{
        productName:{
            type: String,
            required: true
        },
        measures:{
            type: String,
            require: true
        },
        weight:{
            type: String,
            require: true
        },
        info:{
            type: String,
            require: true
        },
        pieces:{
            type:String,
            require: true
        },
        reference:{
            type: Number,
            require: true
        },
        image:{
            type:String,
            require:true
        }
    },
}
</script>
<style lang="scss" scoped>

.modalStyle{
    background-color: red !important;
}

</style>