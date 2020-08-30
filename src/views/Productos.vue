<template>
    <div class="productos">
        <div class="fondo">
        <!--<div class="mi-titulo-1 primero-t">Nuestros</div>-->
        <br>
        <br>
        <div class="titulo segundo-t knockout">
            <span class="ultimo-t">Lo mejor en Cables, Cordeles y Jarceria</span>
        </div>
        <br>
        <br>
            <b-carousel
                id="CarouselProductos"
                v-model="slide"
                :interval="900000"
                ref="CarouselProductos"
                @sliding-start="sliding = true"
                @sliding-end="sliding = false">
                <b-carousel-slide v-for="i in myCeil(productos.length / each)" :key="i">
                    <template>
                        <b-row align-v="center" fluid class="correction-al">
                            <b-col cols="12" xs="12" sm="8" md="6" lg="4" xl="3" v-for="(producto, index) of productos.slice((i-1)*(each),(i)*each)" :key="index">
                                <b-card
                                    :header="producto[5]"
                                    header-border-variant="primary"
                                    border-variant="primary"
                                    header-bg-variant="primary"
                                    header-text-variant="light"
                                    tag="article"
                                    :style="['width: 12rem;']"
                                    class="mb-2">
                                    <b-card-img class="image-product" :src="producto[2]" alt="imagen" height="110" />
                                    <!--<b-card-text>-->
                                        <!--<div class="info-tarjeta">{{producto[3]}}</div>-->
                                    <!--</b-card-text>-->
                                        <b-button class="button-more" variant="info" v-b-toggle="['collapse-'+i+'-'+index]"><swapIcon/></b-button>
                                        <b-button class="button-details" variant="primary"   v-b-modal="'modal-'+i+'-'+index">Detalles</b-button>
                                        <b-collapse :id="'collapse-'+i+'-'+index" class="mt-2 text-structure">
                                            <b-card>
                                            <p class="my-card-text">{{producto[4]}}</p>
                                            </b-card>
                                        </b-collapse>
                                        <b-modal
                                        size="lg"
                                        header-border-variant="primary" 
                                        header-text-variant="primary"
                                        :id="'modal-'+i+'-'+index"
                                        :title="'Más Datos del Producto: '+producto[5]">
                                            <p class="my-4">{{producto[3]}}</p>
                                            <div v-if="producto[5]=='Cordeles'">
                                                <b-button class="button-table" variant="info"  v-b-toggle="['collapse-table-'+i+'-'+index]+'-1'"> <swapTextIcon :simpletext="'PIOLA POLIESTER BLANCA, NEGRA Y DE COLOR'"/> </b-button>
                                                <b-collapse :id="'collapse-table-'+i+'-'+index+'-1'">
                                                    <b-table class="table-correction primera-tabla" head-row-variant="danger"  responsive="sm" striped hover :items="producto[1]" :fields="producto[0]"></b-table>
                                                </b-collapse>
                                                <b-button class="button-table" variant="info"  v-b-toggle="['collapse-table-'+i+'-'+index]+'-2'"><swapTextIcon :simpletext="'TIPOS DE CORDELES'"/></b-button>
                                                <b-collapse :id="'collapse-table-'+i+'-'+index+'-2'">
                                                    <b-table class="table-correction table-bordered segunda-tabla" head-row-variant="danger"  responsive="sm" striped hover :items="producto[7]" thead-class="hidden_header"></b-table>
                                                </b-collapse>
                                            </div>
                                            <div v-else-if="producto[5]=='Lonas'">
                                                    <!--<ul class="fix-list">
                                                        <li>Lona de rafia (se anexan medidas)</li>
                                                        <li>Lonas de vinil (sobre medida)</li>
                                                        <li>Carpas (varias medidas)</li>
                                                    </ul> -->
                                                    <p class="fix-list"> - Lona de rafia (se anexan medidas)<br>- Lonas de vinil (sobre medida)<br>- Carpas (varias medidas)</p>
                                                    <b-button class="button-table" variant="info"  v-b-toggle="['collapse-table-'+i+'-'+index]+'-1'"> <swapTextIcon :simpletext="'LONA LIGERA CALIBRE 8*10 HILOS COLORES AZUL, BLANCO, ROJO, AMARILLO, GRIS, VERDE Y NARANJA'"/> </b-button>
                                                    <b-collapse :id="'collapse-table-'+i+'-'+index+'-1'">
                                                        <b-table class="table-correction table-bordered lonas1-tabla" head-row-variant="danger"  responsive="sm" striped hover :items="producto[1]" thead-class="hidden_header"></b-table>
                                                    </b-collapse>

                                                    <b-button class="button-table" variant="info"  v-b-toggle="['collapse-table-'+i+'-'+index]+'-2'"> <swapTextIcon :simpletext="'LONA REFORZADA 3 CAPAS CALIBRE 12*14 HILOS COLOR AZUL, VERDE, NARANJA, ROJO, AMARILLO Y GRIS'"/> </b-button>
                                                    <b-collapse :id="'collapse-table-'+i+'-'+index+'-2'">
                                                        <b-table class="table-correction table-bordered lonas2-tabla" head-row-variant="danger"  responsive="sm" striped hover :items="producto[7]" thead-class="hidden_header"></b-table>
                                                    </b-collapse>

                                                    <b-button class="button-table" variant="info"  v-b-toggle="['collapse-table-'+i+'-'+index]+'-3'"> <swapTextIcon :simpletext="'LONA REFORZADA EXTRA CALIBRE 14*14 HILOS COLOR AZUL, BLANCA, ROJO, AMARILLO, GRIS Y VERDE'"/> </b-button>
                                                    <b-collapse :id="'collapse-table-'+i+'-'+index+'-3'">
                                                        <b-table class="table-correction table-bordered lonas3-tabla" head-row-variant="danger"  responsive="sm" striped hover :items="producto[9]" thead-class="hidden_header"></b-table>
                                                    </b-collapse>
                                            </div>
                                            <div v-else-if="producto[5]=='Costales de Rafia'">
                                                <b-table class="table-correction thead-dark" head-row-variant="danger"  responsive="sm" striped hover :items="producto[7]" :fields="producto[6]"></b-table>
                                                <b-button class="button-table" variant="info"  v-b-toggle="['collapse-table-'+i+'-'+index]+'-1'"> <swapTextIcon :simpletext="'TIPO'"/> </b-button>
                                                <b-collapse :id="'collapse-table-'+i+'-'+index+'-1'">
                                                    <b-table class="table-correction table-bordered lonas1-tabla" head-row-variant="danger"  responsive="sm" striped hover :items="producto[1]" thead-class="hidden_header"></b-table>
                                                </b-collapse>
                                            </div>
                                            <b-table v-else class="table-correction thead-dark"   responsive="sm" striped hover :items="producto[1]" :fields="producto[0]"></b-table>
                                        </b-modal>
                                </b-card>
                            </b-col>
                        </b-row>
                    </template>
                </b-carousel-slide>
                <a class="carousel-control-prev" role="button" aria-controls="CarouselProyectos" @click="prev()">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" role="button" aria-controls="carouselProyectos" @click="next()">
                    <span id="correccion-izq" class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </b-carousel>
        </div>
    </div>
</template>
<style scoped lang="scss">
/*Mucho que ajustar aqui */

/*
.primera-tabla{
    &::before{
        text-align: center;
        padding-top: 1em;
        display: block;
        content: "PIOLA POLIESTER BLANCA, NEGRA Y DE COLOR";
        background-color: #f3de9f;
        width: 100%;
        height: 3em;
        font-size:.9em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
    }
}*/

.button-more{
  margin: 12px 3px 0 0;
  padding: 0;
  width: 25%;
}
.button-details{margin: 12px 0 0 3px;}
.fix-list{
    margin-top: -1.5em;
}
.table-correction{
    text-align: center;
    max-height: 60vh !important;
    overflow: auto !important;
    &::-webkit-scrollbar-track
    {
        box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar
    {
        width: 10px;
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb
    {
        background-color:#a13a4b;
    }
    
}
.table-join{
    margin: 0;
}

.button-table{
    display: block;
    background-color: #a13a4b;
    color: white;
    width: 100%;
    font-size:.9em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    margin: 0;
    padding: 0;
}
    .correction-al{
        align-self: center;
        position: relative;
        display: flex;
        max-width: 100%;
        margin: 0;
        justify-content: center;
        >div{
            align-items: center;
            max-height: 263px;
            min-height: 263px;
            overflow: hidden;
            padding: 0;
            margin: 0;
            >article{
                position: absolute;
                bottom: 0;
            }
        }
    }

    .carousel-item {
        align-items: stretch !important;
        min-height: 36em !important;
        vertical-align: middle !important;
        
    }
    .fondo{
        background-color: rgb(245, 245, 245,0.85);
        min-height: 0vh;
        margin-left: 6em;
        margin-right: 6em;
        margin-top: 2ex;
    }
    p.my-card-text{
        color: #343a40;
        font-size: medium;
        margin: 0;
    }
    .text-structure{
        max-height: 180px !important;
        overflow: auto;
        .card-body{
            padding: 10px;
        }
        &::-webkit-scrollbar-track
        {
        box-shadow: inset 0 0 7px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        }
        &::-webkit-scrollbar
        {
            width: 7px;
            background-color: #F5F5F5;
        }
        &::-webkit-scrollbar-thumb
        {
            background-color:#e7bf47;
        }
    }

    .carousel-control-next > span,
    .carousel-control-prev > span{
        filter: invert(100%) !important;
    }
    .productos {
        padding-top: 20px;
        padding-bottom: 10px;
        animation: mostrar 1s forwards;
        background-color:white;
        background-image: url('../assets/img/carretes_rafia.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 80vh;
    }
    .focus-productos  {
        background-color:transparent;
        background-color: rgba(255, 255, 255,.70);
    }
    .info-tarjeta {
        overflow: auto;
        height: 7rem;
        color: #343a40;
        margin-top: 10px;
        font-size: small;
    }
    .titulo{
        display:inline-block;
        overflow:hidden;
        white-space:nowrap;
        font-size: xx-large;
        color: #a13a4b;
        font-family: 'Franklin Gothic Medium', sans-serif !important;
        max-width: 100%;
    }
@media screen and (min-width:880px){
    
    .primero-t {    
      animation: showup 5s forwards;
    }
    .segundo-t {
      width:0px;
      animation: revelar 5s forwards;
    }
    .ultimo-t {
      margin-left:-355px;
      animation: slidein 5s forwards;
    }
}
      .fondo{
          margin-left: 1em;
          margin-right: 1em;
      }
    @media screen and (min-width: 487px) and (max-width: 879px){
      .titulo{
        font-size:x-large;
      }
      .segundo-t {
        animation: revelar-mb 5s forwards;
      }
    }


    @media screen and (min-width: 0) and (max-width:486px){
        .titulo{
            font-size:medium;
        }
        .segundo-t{
            animation: revelar-mb 5s forwards;
        }
    }

    @media screen and (min-width: 768px)and (max-width: 991px){
        .correction-al >div{
            >article{
                left: 5%;
            }
        }
    }

    @media screen and (min-width: 704px)and (max-width: 767px){
        .correction-al >div{
            >article{
                left: 15%;
            }
        }
    }

    @media screen and (min-width: 645px)and (max-width: 703px){
        .correction-al >div{
            >article{
                left: 8%;
            }
        }
    }
    @media screen and (min-width: 606px)and (max-width: 644px){
        .correction-al >div{
            >article{
                left: 0%;
            }
        }
    }
    @media screen and (min-width:576px) and (max-width: 605px){
        .correction-al >div{
            >article{
                left:-1%;
            }
        }
    }
    @media screen and (min-width: 566px)and (max-width: 575px){
        .correction-al >div{
            >article{
                left: 15%;
            }
        }
    }
    @media screen and (min-width: 485px)and (max-width: 565px){
        .correction-al >div{
            >article{
                left: 24%;
            }
        }
    }
    @media screen and (min-width: 400px)and (max-width: 484px){
        .correction-al >div{
            >article{
                left: 17%;
            }
        }
    }
    @media screen and (min-width: 350px)and (max-width: 399px){
        .correction-al >div{
            >article{
                left: 10%;
            }
        }
    }
    @media screen and (min-width: 704px)and (max-width: 349px){
        .correction-al >div{
            >article{
                left: 5%;
            }
        }
    }

    @keyframes showup {
        0% {opacity:0;}
        20% {opacity:1;}
        80% {opacity:1;}
        100% {opacity:1;}
    }
    
    @keyframes slidein {
        0% { margin-left:-200px; }
        20% { margin-left:-200px; }
        35% { margin-left:0px; }
        100% { margin-left:0px; }
    }
    
    @keyframes revelar {
        0% {opacity:0;width:0px;}
        20% {opacity:1;width:0px;}
        30% {width: 660px;}
        80% {opacity:1; width: 660px;}
        100% {opacity:1;width:660px;}
    }
    @keyframes revelar-mb {
        0% {opacity:0;width:0px;}
        20% {opacity:1;width:0px;}
        30% {width: 345px;}
        80% {opacity:1; width: 345px;}
        100% {opacity:1;width:345px;
              min-width:fit-content;
        }
    }
    @keyframes mostrar {
        0% {opacity: 0;}
        100% {opacity: 1;}  
    }
    
</style>
<style>
    .hidden_header{
        display: none;
    }
    .thead-dark th{
        background-color:#a13a4b !important;
        color: white !important;
    }
    .modal-title {
        font-weight: 600 !important;
    }
    @media screen and (min-width:400px) and (max-width:500px){
        .table-correction >*{
            font-size:.8em !important;
        }
    }
    @media screen and (min-width:0px) and (max-width:399px){
        .table-correction >*{
            font-size:.5em !important;
        }
    }
</style>
<script>
import swapIcon from '@/components/ToggleIcon.vue'
import swapTextIcon from '@/components/ToggleTextIcon.vue'
import tablaCostalRafia from '@/components/TablaCostalRafia.vue'
export default {
    name: 'Home',
    data(){
        return {
            slide: 0,
            sliding: null,
            show_each: 8,
            window_width: window.innerWidth,
            productos:[
                [
                    ['capacidad','medidas'],
                    [
                        {capacidad:'800 kg',medidas:'1.00 x 1.00 x 1.00'},
                        {capacidad:'1000 kg',medidas:'0.90 x 0.90 x 1.20'},
                        {capacidad:'1200 kg',medidas:'0.90 x 0.90 x 1.60'},
                        {capacidad:'1500 kg',medidas:'0.90 x 0.90 x 1.80'},
                    ],
                    require('@/assets/Gifs/barcina.gif'),
                    "Productos que habitualmente se transportan en súper sacos son: cemento, productos mineros, granos, semillas, harina, yeso, plásticos, entre otros.",
                    "El Súper saco es uno de los medios de envasado, almacenaje y transporte más eficaces y económicos. ",
                    "Barcinas"
                ],
                [
                    ['diametro','peso_en_kg','peso','resistencia'],
                    [
                        { diametro:'',peso_en_kg:"POR METRO",peso:"POR ROLLO",resistencia:"A LA TENSIÓN"},
                        { diametro:'3 mm - 1/8”',peso_en_kg:"0.015",peso:"25",resistencia:"125"},
                        { diametro:'4 mm - 3/16”',peso_en_kg:"0.022",peso:"25",resistencia:"157"},
                        { diametro:'6 mm - 1/4”',peso_en_kg:"0.030",peso:"50",resistencia:"176"},
                        { diametro:'8 mm - 35/16”',peso_en_kg:"0.043",peso:"50",resistencia:"349"},
                        { diametro:'10 mm - 3/8”',peso_en_kg:"0.061",peso:"50",resistencia:"472"},
                        { diametro:'11 mm - 7/16”',peso_en_kg:"0.078",peso:"50",resistencia:"610"},
                        { diametro:'13 mm - 1/2”',peso_en_kg:"0.112",peso:"50",resistencia:"940"},
                        { diametro :'16 mm - 5/8”',peso_en_kg:"0.198",peso:"100",resistencia:"1537"},
                        { diametro:'19 mm - 3/4”',peso_en_kg:"0.248",peso:"100",resistencia:"1886"},
                        { diametro:'25 mm - 1”',peso_en_kg:"0.402",peso:"100",resistencia:"3144"},
                        { diametro:'25 mm - 1”',peso_en_kg:"0.620",peso:"500",resistencia:"4715"},
                        { diametro:'38 mm - 1  1/2”',peso_en_kg:"0.900",peso:"500",resistencia:"6417"},
                    ],
                    require('@/assets/Gifs/cable_henequen.gif'),
                    
                    "Presentaciones en: Hilo Yucatán, Tomatero, Medio Cabo, 1,2,3, cabos, Titan, bambino, Hilo de color",
                    "Cables de gran resistencia hechos con la planta de antaño que se dio a conocer como \"El oro verde\"",
                    "Cables Henequén"
                ],
                [
                    ['milimetros','pulgadas','metros_por_kilo','peso_por_rollo','resistencia_a_la_tensión'],
                    [
                        {'milimetros':'4',pulgadas:'3/16',metros_por_kilo:'110',peso_por_rollo:'16 kg','resistencia_a_la_tensión':'330 kg'},
                        {'milimetros':'6',pulgadas:'1/4',metros_por_kilo:'62',peso_por_rollo:'20 kg','resistencia_a_la_tensión':'440 kg'},
                        {'milimetros':'8',pulgadas:'1/16',metros_por_kilo:'34',peso_por_rollo:'22 kg','resistencia_a_la_tensión':'550 kg'},
                        {'milimetros':'10',pulgadas:'3/8',metros_por_kilo:'20',peso_por_rollo:'18/30 kg','resistencia_a_la_tensión':'930 kg'},
                        {'milimetros':'11',pulgadas:'7/16',metros_por_kilo:'16',peso_por_rollo:'19/30 kg','resistencia_a_la_tensión':'1020 kg'},
                        {'milimetros':'13',pulgadas:'1/2',metros_por_kilo:'14',peso_por_rollo:'19/32 kg','resistencia_a_la_tensión':'1815 kg'},
                        {'milimetros':'16',pulgadas:'5/8',metros_por_kilo:'9',peso_por_rollo:'58/60 kg','resistencia_a_la_tensión':'2585 kg'},
                        {'milimetros':'19',pulgadas:'3/4',metros_por_kilo:'6',peso_por_rollo:'58/60 kg','resistencia_a_la_tensión':'3630 kg'},
                        {'milimetros':'25',pulgadas:'1',metros_por_kilo:'3.4',peso_por_rollo:'68/70 kg','resistencia_a_la_tensión':'7590 kg'},
                    ],
                    require('@/assets/Gifs/cable_polipropileno.gif'),
                    "Tenemos productos de Sogas y cables de polipropileno.",
                    "Ofrecemos Sogas y cables de polipropileno.",
                    "Cables Polipropileno"
                ],
                [
                    ['MEDIDA_Y_CALIBRE','RENDIMIENTO_APROX._EN_METROS_POR_KG','RESISTENCIA_A_LA_RUPTURA','PESO_APROX._POR_ROLLO'],
                    [
                        { MEDIDA_Y_CALIBRE:'3 mm (1/8")','RENDIMIENTO_APROX._EN_METROS_POR_KG':'166 m',RESISTENCIA_A_LA_RUPTURA:'43 kg','PESO_APROX._POR_ROLLO':'10 kg'},
                        { MEDIDA_Y_CALIBRE:'4 mm (5/32")','RENDIMIENTO_APROX._EN_METROS_POR_KG':'95 m',RESISTENCIA_A_LA_RUPTURA:'115 kg','PESO_APROX._POR_ROLLO':'10 kg'},
                        { MEDIDA_Y_CALIBRE:'5 mm (3/16")','RENDIMIENTO_APROX._EN_METROS_POR_KG':'52 m',RESISTENCIA_A_LA_RUPTURA:'207 kg','PESO_APROX._POR_ROLLO':'10 kg'},
                        { MEDIDA_Y_CALIBRE:'6 mm (1/4")','RENDIMIENTO_APROX._EN_METROS_POR_KG':'38 m',RESISTENCIA_A_LA_RUPTURA:'314 kg','PESO_APROX._POR_ROLLO':'10 kg'},
                        { MEDIDA_Y_CALIBRE:'8 mm (5/16")','RENDIMIENTO_APROX._EN_METROS_POR_KG':'25 m',RESISTENCIA_A_LA_RUPTURA:'420 kg','PESO_APROX._POR_ROLLO':'10 kg'},
                        { MEDIDA_Y_CALIBRE:'10 mm (3/8")','RENDIMIENTO_APROX._EN_METROS_POR_KG':'25 m',RESISTENCIA_A_LA_RUPTURA:'630 kg','PESO_APROX._POR_ROLLO':'10 kg'},
                        { MEDIDA_Y_CALIBRE:'12 mm (1/2")','RENDIMIENTO_APROX._EN_METROS_POR_KG':'13 m',RESISTENCIA_A_LA_RUPTURA:'790 kg','PESO_APROX._POR_ROLLO':'10 kg'},
                        { MEDIDA_Y_CALIBRE:'14 mm (9/16")','RENDIMIENTO_APROX._EN_METROS_POR_KG':'8 m',RESISTENCIA_A_LA_RUPTURA:'1000 kg','PESO_APROX._POR_ROLLO':'10 kg'},
                        { MEDIDA_Y_CALIBRE:'16 mm (5/8")','RENDIMIENTO_APROX._EN_METROS_POR_KG':'7 m',RESISTENCIA_A_LA_RUPTURA:'1200 kg','PESO_APROX._POR_ROLLO':'10 kg'},
                        
                    ],
                    require('@/assets/Gifs/cordeles.gif'),
                    "Cordeles, elaborados de fibras naturales como algodón, Yute, Cáñamo, Sisal, Henequén y fibra de Coco.",
                    "Todo tipo de Cordeles:\n\
                    Trenzados, torcidos y con esfuerzo al interior para el uso en el hogar, hoteles, restaurantes,\
                    decoración… etc.",
                    "Cordeles",
                    ['cordeles','Cordeles'],
                    [
                        { cordeles:'CABLE DE NYLON',Cordeles:'HILO DE NYLON'},
                        { cordeles:'HILAZA',Cordeles:'PASTELERO'},
                        { cordeles:'CUERDA DE VIDA',Cordeles:'CORDON FLOJO BLANCO Y COLOR'},
                        { cordeles:'CAÑAMO',Cordeles:'PIOLA'},
                    ],
                    ['CABLE_DE_NYLON'],
                    [
                        { CABLE_DE_NYLON:'NYLON DE COLOR'},
                        { CABLE_DE_NYLON:'NYLON NEGRO'},
                        { CABLE_DE_NYLON:'HILAZA'},
                        { CABLE_DE_NYLON:'CORDON FLOJO'},
                        { CABLE_DE_NYLON:'CORDON FLOJO COLOR'},
                        { CABLE_DE_NYLON:'PASTELERO'},
                        { CABLE_DE_NYLON:'PIOLA'},
                        { CABLE_DE_NYLON:'PIOLA BLANCA'},
                    ],
                    ['CABLE_DE_NYLON','HILO_DE_NYLON'],
                    [
                        { CABLE_DE_NYLON:'HILAZA',HILO_DE_NYLON:'PASTELERO'},
                    ],
                    ['CUERDA_DE_VIDA','CORDON_FLOJO_BL._Y_COLOR'],
                    [
                        { CUERDA_DE_VIDA:'CAÑAMO','CORDON_FLOJO_BL._Y_COLOR':'PIOLA'},
                    ]
                ],
                [
                    ['costal','medida(CM)','peso_(Grms)','capacidad'],
                    [
                        {costal:'TRIGUERO','medida(CM)':'70x110','peso_(Grms)':'900 g',capacidad:'100 kg'},
                        {costal:'BURRERO','medida(CM)':'60x100','peso_(Grms)':'760 g',capacidad:'100 kg'},
                        {costal:'CACAO','medida(CM)':'70x110','peso_(Grms)':'800 g',capacidad:'100 kg'},
                        {costal:'ZANAHORIA','medida(CM)':'67x100','peso_(Grms)':'640 g',capacidad:'100 kg'},
                        {costal:'MAÍZ-FRIJOL','medida(CM)':'62x102','peso_(Grms)':'750 g',capacidad:'100 kg'},
                        {costal:'JICAMA','medida(CM)':'65x100','peso_(Grms)':'500 g',capacidad:'100 kg'},
                        {costal:'DOBLE PIE','medida(CM)':'70x100','peso_(Grms)':'1250 g',capacidad:'50 kg'},
                        {costal:'CEBOLLA','medida(CM)':'60x80','peso_(Grms)':'300 g',capacidad:'100 kg'},
                        {costal:'PERGAMINO','medida(CM)':'70x110','peso_(Grms)':'1000 g',capacidad:'100 kg'},
                        {costal:'CAFETERO','medida(CM)':'70x100','peso_(Grms)':'950 g',capacidad:'50 kg'},
                    ],
                    require('@/assets/Gifs/costal_henequen.gif'),
                    "Son utilizados para la recolección, empaque, almacenamiento y comercialización de productos en sectores como el agrícola (café, tubérculos, cacao) y el de construcción.",
                    "Costal hecho con fibra de Henequén varios modelos y pesaje.",
                    "Costal Henequén"
                ],
                [
                    ['costal','medida(CM)','peso_(Grms)','capacidad'],
                    [
                        {costal:'NUEVO','medida(CM)':'70x110','peso_(Grms)':'930 g',capacidad:'70 kg'},
                        {costal:'USADO','medida(CM)':'65x100','peso_(Grms)':'750 g',capacidad:'60 kg'},
                        {costal:'DELGADO','medida(CM)':'60x110','peso_(Grms)':'500 g',capacidad:'60 kg'},
                        {costal:'CACAHUATERO','medida(CM)':'55x100','peso_(Grms)':'750 g',capacidad:'50 kg'},
                    ],
                    require('@/assets/Gifs/costal_yute.gif'),
                    "Permite una perfecta transpiración de los productos que contienen, su elaboración no daña al medio ambiente debido a que su planta proviene del cultivo. Si el saco se llena de tierra puede servir para fabricar barreras contra la erosión o para evitar inundaciones.",
                    "Los costales de Yute natural son un envase cómodo y flexible, ideales para el almacenamiento de Café, Cacao, Semillas, Granos, Verduras, Especias, Piñones, etc",
                    "Costales de Yute"
                ],
                [
                    ['tipo'],
                    [
                        {tipo:'NUEVO'},
                        {tipo:'AZUCARERO'},
                        {tipo:'SUCIO'},
                        {tipo:'UNA VACIADA'},
                    ],
                    require('@/assets/productos/Costal_rafia.jpg'),
                    "Son sacos rígidos, ligeros y resistentes, así como reutilizables debido a la gran durabilidad y resistencia del tejido, disminuyendo el consumo.",
                    "Son usados mayoritariamente para envasar granos, alimentos balanceados, arena, escombros, legumbres, fertilizantes, productos químicos, etc ",
                    "Costales de Rafia",
                    ['MEDIDA','CAPACIDAD'],
                    [
                        {MEDIDA:'36 X 30 cm',CAPACIDAD:'10 kg'},
                        {MEDIDA:'45 X 75 cm',CAPACIDAD:'25 kg'},
                        {MEDIDA:'45 X 85 cm',CAPACIDAD:'30 kg'},
                        {MEDIDA:'54 X 100 cm',CAPACIDAD:'50 kg'},
                        {MEDIDA:'60 X 100 cm',CAPACIDAD:'60 kg'},
                        {MEDIDA:'70 X 120 cm',CAPACIDAD:'70 kg'},
                        {MEDIDA:'80 X 120 cm',CAPACIDAD:'80 kg'},
                    ]
                ],
                [
                    ['HENEQUÉN'],
                    [
                        {'HENEQUÉN':'Hilo Yucatán'},
                        {'HENEQUÉN':'Tomatero'},
                        {'HENEQUÉN':'Medio Cabo'},
                        {'HENEQUÉN':'1,2,3 Cabos'},
                        {'HENEQUÉN':'Títan'},
                        {'HENEQUÉN':'Bambino'},
                        {'HENEQUÉN':'Hilo de color'},
                        {'HENEQUÉN':'Tela de henequén de 1.40 *100 mtrs'},
                    ],
                    require('@/assets/Gifs/henequen.gif'),
                    "La fibra es primero extraída de la planta y posteriormente procesada en diversas formas con características tales que favorecen su hilado y su tratamiento textil.",
                    "Son utilizados para el amarre del enfardelado y del embalaje de la paja, del heno, entre otros.",
                    "Henequén"
                ],
                [
                    ['Jarceria'],
                    [
                        {'Jarceria':'Atomizadores'},
                        {'Jarceria':'Botes para basura'},
                        {'Jarceria':'Cepillos'},
                        {'Jarceria':'Cubetas'},
                        {'Jarceria':'Despachadores'},
                        {'Jarceria':'Destapa caños'},
                        {'Jarceria':'Escobas'},
                        {'Jarceria':'Esponjas'},
                        {'Jarceria':'Fibras'},
                        {'Jarceria':'Franelas'},
                        {'Jarceria':'Guantes'},
                        {'Jarceria':'Jaladores'},
                        {'Jarceria':'Jerga'},
                        {'Jarceria':'Lazo de tendedero'},
                        {'Jarceria':'Mechudos'},
                        {'Jarceria':'Mopas'},
                        {'Jarceria':'Recogedores'},
                        {'Jarceria':'Quimicos'},
                    ],
                    require('@/assets/Gifs/jarcieria.gif'),
                    "Escobas, fibras, despachadores, botes para basura, atomizadores, cepillos, cubetas, franelas, mechudos, mops, recogedores, quimicos... etc.",
                    "Variedad en productos de limpieza.",
                    "Jarceria"
                ],
                [
                    ['LONAS_LIGERAS_M_xM'],
                    [
                        { LONAS_LIGERAS_M_xM: ' 1.80 x 2.40' },
                        { LONAS_LIGERAS_M_xM: '2.40 x 3.60' },
                        { LONAS_LIGERAS_M_xM: '3.00 x 3.00' },
                        { LONAS_LIGERAS_M_xM: '3.00 x 3.60' },
                        { LONAS_LIGERAS_M_xM: '3.00 x 4.20' },
                        { LONAS_LIGERAS_M_xM: '3.00 x 5.40' },
                        { LONAS_LIGERAS_M_xM: '3.00 x 6.00' },
                        { LONAS_LIGERAS_M_xM: '3.60 x 3.60' },
                        { LONAS_LIGERAS_M_xM: '3.60 x 4.80' },
                        { LONAS_LIGERAS_M_xM: '3.60 x 5.40' },
                        { LONAS_LIGERAS_M_xM: '4.20 x 4.80' },
                        { LONAS_LIGERAS_M_xM: '4.20 x 6.00' },
                        { LONAS_LIGERAS_M_xM: '4.80 x 6.00' },
                        { LONAS_LIGERAS_M_xM: '5.40 x 7.20' },
                        { LONAS_LIGERAS_M_xM: '6.00 x 6.00' },
                        { LONAS_LIGERAS_M_xM: '6.00 x 9.00' },
                        { LONAS_LIGERAS_M_xM: '6.00 x 12.00' },
                        { LONAS_LIGERAS_M_xM: '6.00 x 15.00' },
                        { LONAS_LIGERAS_M_xM: '7.20 x 7.20' },
                        { LONAS_LIGERAS_M_xM: '7.20 x 9.00' },
                        { LONAS_LIGERAS_M_xM: '8.20 x 12.00' },
                        { LONAS_LIGERAS_M_xM: '8.20 x 15.00' },
                        { LONAS_LIGERAS_M_xM: '9.00 x 9.00' },
                        { LONAS_LIGERAS_M_xM: '12.00 x 18.00' },
                    ],
                    require('@/assets/Gifs/lonas.gif'),
                    "Lona ligera, reforzada, vinílica 13 y 18 ONZ, de forro y con publicidad.",
                    "Ofrecemos lonas para diversos usos, desde carpas hasta para uso publicitario.",
                    "Lonas",
                    ['LONA_REFORZADA_M_xM'],
                    [
                        { LONA_REFORZADA_M_xM: '3.00 x 4.20' },
                        { LONA_REFORZADA_M_xM: '3.00 x 5.40' },
                        { LONA_REFORZADA_M_xM: '3.00 x 6.00' },
                        { LONA_REFORZADA_M_xM: '3.60 x 5.40' },
                        { LONA_REFORZADA_M_xM: '4.20 x 4.80' },
                        { LONA_REFORZADA_M_xM: '4.20 x 6.00' },
                        { LONA_REFORZADA_M_xM: '4.80 x 6.00' },
                        { LONA_REFORZADA_M_xM: '5.10 x 5.10' },
                        { LONA_REFORZADA_M_xM: '5.40 x 7.20' },
                        { LONA_REFORZADA_M_xM: '5.40 x 7.20' },
                        { LONA_REFORZADA_M_xM: '4.40 x 8.20' },
                        { LONA_REFORZADA_M_xM: '6.00 x 6.00' },
                        { LONA_REFORZADA_M_xM: '6.00 x 8.20' },
                        { LONA_REFORZADA_M_xM: '6.00 x 9.00' },
                        { LONA_REFORZADA_M_xM: '6.00 x 12.00' },
                        { LONA_REFORZADA_M_xM: '6.00 x 15.00' },
                        { LONA_REFORZADA_M_xM: '8.10 x 10.20' },
                        { LONA_REFORZADA_M_xM: '8.20 x 12.00' },
                        { LONA_REFORZADA_M_xM: '8.20 x 15.00' },
                    ],
                    ['LONA_REFORZADA_M_xM'],
                    [
                        { LONA_REFORZADA_M_xM: '1.80 x 2.40' },
                        { LONA_REFORZADA_M_xM: '2.40 x 3.00' },
                        { LONA_REFORZADA_M_xM: '2.40 x 3.60' },
                        { LONA_REFORZADA_M_xM: '3.00 x 3.00' },
                        { LONA_REFORZADA_M_xM: '3.00 x 4.20' },
                        { LONA_REFORZADA_M_xM: '3.00 x 5.40' },
                        { LONA_REFORZADA_M_xM: '3.00 x 6.00' },
                        { LONA_REFORZADA_M_xM: '3.30 x 9.30' },
                        { LONA_REFORZADA_M_xM: '3.60 x 5.40' },
                        { LONA_REFORZADA_M_xM: '4.20 x 4.20' },
                        { LONA_REFORZADA_M_xM: '4.20 x 4.80' },
                        { LONA_REFORZADA_M_xM: '4.20 x 6.00' },
                        { LONA_REFORZADA_M_xM: '4.20 x 7.20' },
                        { LONA_REFORZADA_M_xM: '4.20 x 8.40' },
                        { LONA_REFORZADA_M_xM: '4.80 x 6.00' },
                        { LONA_REFORZADA_M_xM: '5.10 x 5.10' },
                        { LONA_REFORZADA_M_xM: '5.40 x 7.20' },
                        { LONA_REFORZADA_M_xM: '5.40 x 8.10' },
                        { LONA_REFORZADA_M_xM: '5.40 x 10.00' },
                        { LONA_REFORZADA_M_xM: '6.00 x 6.00' },
                        { LONA_REFORZADA_M_xM: '6.00 x 8.20' },
                        { LONA_REFORZADA_M_xM: '6.00 x 9.00' },
                        { LONA_REFORZADA_M_xM: '6.00 x 10.00' },
                        { LONA_REFORZADA_M_xM: '6.00 x 12.00' },
                        { LONA_REFORZADA_M_xM: '6.00 x 15.00' },
                        { LONA_REFORZADA_M_xM: '7.20 x 7.20' },
                        { LONA_REFORZADA_M_xM: '7.20 x 9.00' },
                        { LONA_REFORZADA_M_xM: '7.20 x 10.00' },
                        { LONA_REFORZADA_M_xM: '7.20 x 12.00' },
                        { LONA_REFORZADA_M_xM: '7.20 x 15.00' },
                        { LONA_REFORZADA_M_xM: '8.10 x 10.20' },
                        { LONA_REFORZADA_M_xM: '8.20 x 12.00' },
                        { LONA_REFORZADA_M_xM: '9.00 x 9.00' },
                        { LONA_REFORZADA_M_xM: '9.00 x 12.00' },
                        { LONA_REFORZADA_M_xM: '10.00 x 12.00' },
                        { LONA_REFORZADA_M_xM: '10.00 x 15.00' },
                    ],
                ],
                [
                    ['calibre','color','presentación'],
                    [
                        { calibre: 'Floricultura', color: 'Colores', presentación: '300 gr. 1,3 y 4 kg' },
                        { calibre: 'Forrajera', color: 'Naranja', presentación: '3, 4 y 10 kg.' },
                        { calibre: '2', color: 'Color y Blanca', presentación: '500 gr. 1, 3, 4 kg.' },
                        { calibre: '3', color: 'Color y Blanca', presentación: '1, 3, 4 kg.' },
                        { calibre: '4', color: 'Color y Blanca', presentación: '1, 3, 4 kg.' },
                        { calibre: '6', color: 'Blanca', presentación: '3, 4 kg.' },
                        { calibre: '7', color: 'Blanca', presentación: '3, 4 kg.' },
                        { calibre: '8', color: 'Blanca', presentación: '3, 4 kg.' },
                    ],
                    require('@/assets/Gifs/rafia.gif'),
                    "El material de Rafia es reutilizado en múltiples ocasiones debido a la resistencia y durabilidad del\
                    material. La Rafia se produce a partir de fibras textiles sintéticas, principalmente de polipropileno trenzado.",
                    "Toda nuestra Rafia es 100% virgen y con protección a los rayos UVB.",
                    "Rafia"
                ],
                [
                    ['tela_de_yute'],
                    [
                        { tela_de_yute:'1.30 Metros de ancho'},
                        { tela_de_yute:'2.80 Metros de ancho'},
                        { tela_de_yute:'hilo de yute 1, 2 y 4 hilos (natural o colores varios)'},
                        { tela_de_yute:'cable de yute 4, 6, 8, 10, 11, 13, 16, 19 y 25 mm'},
                    ],
                    require('@/assets/Gifs/yute.gif'),
                    "Se extrae de una planta conocida como “Corchorus Capsularis” la cual solo se da en climas húmedos y cálidos.",
                    "Se usa para la industria de la decoración, entre otros. Existen adicionalmente costales de yute. Hilo de Yute de 1 o 2 Cabos.",
                    "Yute"
                ],
                [
                    ['varios'],
                    [
                        {varios:'Ahuja de arrea (varias medidas)'},
                        {varios:'Bidones,  botes,cubetas industriales '},
                        {varios:'Caretas'},
                        {varios:'Cintas canela y transparente'},
                        {varios:'Cubrebocas'},
                        {varios:'Hule negro '},
                        {varios:'Manguera para agua y gas'},
                        {varios:'Pachón'},
                        {varios:'Petate'},
                        {varios:'Playo o poliestretch'},
                        {varios:'Rascadores para gatos'},
                        {varios:'Tarimas'},
                    ],
                    require('@/assets/Gifs/varios.gif'),
                    "Contamos con un amplia gama en productos de jarceria , todo tipo de marcas y calidades",
                    "La mejor selección de productos en nuestro giro para sus necesidades.",
                    "Varios"
                ],
            ]
        }
    },
    onCreate(){
        this.show_each = this.show_each2()
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        myCeil(number) {
            return Math.ceil(number)
        },
        prev() {
            this.$refs.CarouselProductos.prev()
        },
        next() {
            this.$refs.CarouselProductos.next()
        },
        onResize() {
            this.window_width = window.innerWidth
        }
        /* Debbugeo de items responsive
        onResize() {
            this.window_width = window.innerWidth
            if(this.window_width <= 1199){
                if(this.window_width <= 770){ 
                    if(this.window_width <= 580){
                        this.show_each = 1
                    }
                        else{
                            this.show_each = 2
                        }
                }else{
                    this.show_each = 3
                    }
            }else{this.show_each = 4}
        }*/
        
    },
    computed: {
        each(){
        this.window_width = window.innerWidth
            if(this.window_width <= 1199){
                if(this.window_width <= 991){ 
                    if(this.window_width <= 767){
                        this.show_each = 2
                        return 2
                    }else{
                        this.show_each = 4
                        return 4
                    }
                }else{
                    this.show_each = 6
                    return 6
                    }
            }else{
                this.show_each = 8
                return 8
                }
        }
    },   
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      })
    },
    beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
    },
    components:{
      swapIcon,
      swapTextIcon,
      tablaCostalRafia,
    },
}
</script>
