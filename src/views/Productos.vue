<template>
    <div class="productos">
        <div class="mi-titulo-1 primero-t">Nuestros</div>
        <div class="mi-titulo-1 segundo-t">
            <span class="ultimo-t">Productos</span>
        </div>
        <b-carousel
            id="CarouselProductos"
            v-model="slide"
            :interval="900000"
            ref="CarouselProductos"
            @sliding-start="sliding = true"
            @sliding-end="sliding = false">
            <b-carousel-slide v-for="i in myCeil(productos.length / each)" :key="i">
                <template>
                    <b-row align-v="end" fluid class="correction-al">
                        <b-col cols="12" xs="12" sm="6" md="4" lg="4" xl="3" v-for="(producto, index) of productos.slice((i-1)*(each),(i)*each)" :key="index">
                            <b-card
                                :header="producto[5]"
                                header-border-variant="warning"
                                border-variant="warning"
                                header-bg-variant="warning"
                                header-text-variant="dark"
                                tag="article"
                                :style="['width: 12rem;']"
                                class="mb-2">
                                <b-card-img :src="producto[2]" alt="imagen" height="150" />
                                <b-card-text>
                                    <div class="info-tarjeta">{{producto[3]}}</div>
                                </b-card-text>
                                    <b-button variant="dark"  v-b-toggle="['collapse-'+i+'-'+index]" >Acerca</b-button> 
                                    <b-button  variant="warning"   v-b-modal="'modal-'+i+'-'+index">Mas Detalles</b-button>
                                    <b-collapse :id="'collapse-'+i+'-'+index" class="mt-2">
                                        <b-card>
                                        <p class="card-text">{{producto[4]}}  </p>
                                        </b-card>
                                    </b-collapse>
                                    <b-modal 
                                    header-border-variant="primary" 
                                    header-text-variant="warning" 
                                    
                                    :id="'modal-'+i+'-'+index" 
                                    :title="'Mas Datos del Producto: '+producto[5]">
                                        <p class="my-4">{{producto[4]}}</p>
                                    <b-table head-row-variant="warning" striped hover :items="producto[1]" :fields="producto[0]"></b-table>
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
</template>
<style scoped lang="scss">
/*Mucho que ajustar aqui */
    .correction-al{
        display: flex;
        justify-content: center;
    }
    .carousel-item {
        min-height: 32em !important;
        //background-color: rgb(206, 206, 206);
        //min-height: 1000px !important;
    }
    p.card-text{
        color: #343a40;
        font-size: small;
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
        //background-image: url('../assets/img/Portada_cordel.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .focus-productos  {
        background-color:transparent;
        background-color: rgba(255, 255, 255,.70);
    }
    .carrusel {
        width: 100%;
    }
    .info-tarjeta {
        overflow: auto;
        height: 7rem;
        color: #343a40;
        margin-top: 10px;
        font-size: small;
    }
    .mi-titulo-1 {
      display:inline-block;
      overflow:hidden;
      white-space:nowrap;
      font-weight: 200;
      font-size: xx-large;
      color: #a13a4b;
      font-family: 'Franklin Gothic Medium', sans-serif !important;
    }
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
    @media screen and (max-width: 500px){
      .mi-titulo-1{
        font-size:x-large;
      }
      .segundo-t {
        animation: revelar-mb 5s forwards;
        }
    }
    @media screen and (min-width: 0px)and (max-width: 576px){
        .correction-al > div > article{
            margin: 0 auto;
        }
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
    
    @keyframes revelar {
        0% {opacity:0;width:0px;}
        20% {opacity:1;width:0px;}
        30% {width: 180px;}
        80% {opacity:1; width: 180px;}
        100% {opacity:1;width:180px;}
    }
    @keyframes revelar-mb {
        0% {opacity:0;width:0px;}
        20% {opacity:1;width:0px;}
        30% {width: 145px;}
        80% {opacity:1; width: 145px;}
        100% {opacity:1;width:145px;}
    }
    @keyframes mostrar {
        0% {opacity: 0;}
        100% {opacity: 1;}  
    }  
</style>
<script>
export default {
    name: 'Home',
    data(){
        return {
            slide: 0,
            sliding: null,
            show_each: 4,
            window_width: window.innerWidth,
            productos:[
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
                    "https://i.imgur.com/XXcQEdl.jpg",
                    "La Rafia se produce a partir de fibras textiles sintéticas, principalmente de polipropileno trenzado.",
                    "El material de Rafia es reutilizado en múltiples ocasiones debido a la resistencia y durabilidad del\
                    material. Toda nuestra Rafia es 100% virgen y con protección a los rayos UVB.",
                    "Rafia"
                ],
                [
                    ['cable_de_nilon'],
                    [
                        { cable_de_nilon:'NYLON DE COLOR'},
                        { cable_de_nilon:'NYLON NEGRO'},
                        { cable_de_nilon:'HILAZA'},
                        { cable_de_nilon:'CORDON FLOJO'},
                        { cable_de_nilon:'CORDON FLOJO COLOR'},
                        { cable_de_nilon:'PASTELERO'},
                        { cable_de_nilon:'PIOLA'},
                        { cable_de_nilon:'PIOLA BLANCA'},
                       
                    ],
                    "https://i.imgur.com/9j9nsDo.jpg",
                    "Cordeles, elaborados de fibras naturales como algodón, Yute, Cáñamo, Sisal, Henequén y fibra de Coco.",
                    "Todo tipo de Cordeles:\n\
                    Trenzados, torcidos y con esfuerzo al interior para el uso en el hogar, hoteles, restaurantes,\
                    decoración… etc.",
                    "Cordeles"
                ],
                [
                    ['tela_de_yute'],
                    [
                        { tela_de_yute:'1.30 Metros de ancho'},
                        { tela_de_yute:'2.80 Metros de ancho'},
                    ],
                    "https://i.imgur.com/IkKvasv.jpg",
                    "Se extrae de una planta conocida como “Corchorus Capsularis” la cual solo se da en climas húmedos y cálidos,",
                    "Se usa para la industria de la decoración, entre otros. Existen adicionalmente costales de yute. Hilo de Yute de 1 o 2 Cabos.",
                    "Yute"
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
                        { diametro:'16 mm - 5/8”',peso_en_kg:"0.198",peso:"100",resistencia:"1537"},
                        { diametro:'19 mm - 3/4”',peso_en_kg:"0.248",peso:"100",resistencia:"1886"},
                        { diametro:'25 mm - 1”',peso_en_kg:"0.402",peso:"100",resistencia:"3144"},
                        { diametro:'25 mm - 1”',peso_en_kg:"0.620",peso:"500",resistencia:"4715"},
                        { diametro:'38 mm - 1  1/2”',peso_en_kg:"0.900",peso:"500",resistencia:"6417"},
                    ],
                    "https://i.imgur.com/JRxyq6R.jpg",
                    
                    "Se extrae del agave y fue conocido como el oro verde por la cultura maya, se utiliza\
                    para hacer cordones, telas, alfombras, uso marítimo y especialmente para la decoración hoy en día,\
                    existe el hilo.",
                    "Presentaciones en: Hilo Yucatán, Tomatero, Medio Cabo, 1,2,3, cabos, Titan, bambino, Hilo de color",
                    "Henequén"
                ],
                [
                    ['jaceria'],
                    [
                        {jaceria:'Escobas'},
                        {jaceria:'Fibras'},
                        {jaceria:'Despachadores'},
                        {jaceria:'Botes para basura'},
                        {jaceria:'Atomisadoes'},
                        {jaceria:'Cepillos'},
                        {jaceria:'Cubuetas'},
                        {jaceria:'Franelas'},
                        {jaceria:'Mechudos'},
                        {jaceria:'Mops'},
                        {jaceria:'Recogedores'},
                        {jaceria:'Quimicos'},
                    ],
                    "https://i.imgur.com/cVSkONj.jpg",
                    "Ofrecemos una gran variedad de productos para la limpieza: Escobas, fibras, despachadores, etc.",
                    "Escobas, fibras, despachadores, botes para basura, atomizadores, cepillos, cubetas, franelas, mechudos, mops, recogedores, quimicos... etc.",
                    "Jarcieria"
                ],
                [
                    ['diametro__(mm_x_pulgada)','metros_por_kilo','peso_por_royo'],
                    [
                        {'diametro__(mm_x_pulgada)':'4',metros_por_kilo:'3/16',peso_por_royo:'16'},
                        {'diametro__(mm_x_pulgada)':'6',metros_por_kilo:'1/4',peso_por_royo:'20'},
                        {'diametro__(mm_x_pulgada)':'8',metros_por_kilo:'1/16',peso_por_royo:'22'},
                        {'diametro__(mm_x_pulgada)':'10',metros_por_kilo:'3/8',peso_por_royo:'18/30'},
                        {'diametro__(mm_x_pulgada)':'11',metros_por_kilo:'7/16',peso_por_royo:'19/30'},
                        {'diametro__(mm_x_pulgada)':'13',metros_por_kilo:'1/2',peso_por_royo:'19/32'},
                        {'diametro__(mm_x_pulgada)':'16',metros_por_kilo:'5/8',peso_por_royo:'58/60'},
                        {'diametro__(mm_x_pulgada)':'19',metros_por_kilo:'3/4',peso_por_royo:'58/60'},
                        {'diametro__(mm_x_pulgada)':'25',metros_por_kilo:'1',peso_por_royo:'68/70'},
                    ],
                    "https://i.imgur.com/3zQbXwY.jpg",
                    "Tenemos productos de Sogas y cables de polipropileno, para ver mas de click en \"Mas detalles\".",
                    "Ofrecemos Sogas y cables de polipropileno.",
                    "Cables"
                ],
                [
                    ['barcinas_o_super_sacos'],
                    [
                        {barcinas_o_super_sacos:'Lona ligera, reforzada, vinílica 13 y 18 ONZ, de forro y con publicidad.'},
                        {barcinas_o_super_sacos:'Manguera para agua y gas.'},
                        {barcinas_o_super_sacos:'Petate'},
                        {barcinas_o_super_sacos:'Pachon'},
                    ],
                    "https://i.imgur.com/VyATffd.jpg",
                    "Tenemos productos de Lona ligera, reforzada, vinílica 13 y 18 ONZ, de forro y con publicidad.",
                    "Ofrecemos Manguera para agua y gas, Petate, Pachon, Lona ligera, reforzada y con publicidad. ",
                    "Varios"
                ],
                [
                    ['tipo','info','menudeo','medio_mayoreo','mayoreo'],
                    [
                        {tipo:'',info:'',menudeo:'De 1-99 PZAS',medio_mayoreo:'100-499 PZAS',mayoreo:'A PARTIR DE 500'},
                        {tipo:'Nuevo',info:'De 54 x 100 cm kg Nuevo sin impresión',menudeo:'$6.70',medio_mayoreo:'$5.70',mayoreo:'$5.20'},
                        {tipo:'Azucarero',info:'De 54 x 100 cm 50kg una vaciada impresa',menudeo:'$3.70',medio_mayoreo:'$3.20',mayoreo:'$3.00'},
                        {tipo:'Sucio',info:'De 50 kg. La medida varía y la capacidad',menudeo:'$2.70',medio_mayoreo:'$2.40',mayoreo:'$2.10'},
                        {tipo:'Una vaciada',info:'De 25 kg con compresión',menudeo:'$3.00',medio_mayoreo:'$2.70',mayoreo:'$2.50'},
                    ],
                    "https://i.imgur.com/a2JwdSk.jpg",
                    "Son sacos rígidos, ligeros y resistentes, así como reutilizables debido a la gran durabilidad y resistencia del tejido, disminuyendo el consumo.",
                    "Son usados mayoritariamente para envasar granos, alimentos balanceados, arena, escombros, legumbres, fertilizantes, productos químicos, etc ",
                    "Costales de Rafia"
                ],
                [
                    ['tipo','peso_gr','pzas_por_paca'],
                    [
                        {tipo:'TRIGUERO',peso_gr:'900 grs',pzas_por_paca:'100'},
                        {tipo:'BURRERO',peso_gr:'760 grs',pzas_por_paca:'100'},
                        {tipo:'AJONJOLÍ EXTRA',peso_gr:'1000 grs',pzas_por_paca:'100'},
                        {tipo:'AJONJOLÍ SUPER',peso_gr:'1000 grs',pzas_por_paca:'100'},
                        {tipo:'CACAOTERO',peso_gr:'80 grs',pzas_por_paca:'100'},
                        {tipo:'PERGAMINO',peso_gr:'1100 grs',pzas_por_paca:'100'},
                        {tipo:'CAFETERO',peso_gr:'1000 grs',pzas_por_paca:'100'},
                        {tipo:'MAIZ-FRIJOL',peso_gr:'750 grs',pzas_por_paca:'100'},
                        {tipo:'ZANAHORIA',peso_gr:'640 grs',pzas_por_paca:'100'},
                        {tipo:'ARROCERO',peso_gr:'620 grs',pzas_por_paca:'100'},
                        {tipo:'CACAHUATERO',peso_gr:'1000 grs',pzas_por_paca:'100'},
                        {tipo:'PIMIENTA',peso_gr:'1000 grs',pzas_por_paca:'100'},
                        {tipo:'DOBLE PIE',peso_gr:'1250 grs',pzas_por_paca:'50'},
                        {tipo:'DOBLE PIE',peso_gr:'1500 grs',pzas_por_paca:'50'},
                    ],
                    "https://i.imgur.com/17fr8T1.jpg",
                    "Costal hecho con fibra de Henequen varios modelos y pesaje.",
                    "Son utilizados para la recolección, empaque, almacenamiento y comercialización de productos en sectores como el agrícola (café, tubérculos, cacao) y el de construcción",
                    "Costal Henequén"
                ],
                [
                    ['nombre','medidas','capacidad'],
                    [
                        {nombre:'Cacahuatero',medidas:'55 cm X 1.00 mts.',capacidad:'50 Kgs'},
                        {nombre:'Africano',medidas:'70 cm X 1.05 mts.',capacidad:'70 Kgs'},
                    ],
                    "https://i.imgur.com/2mV6yBg.jpg",
                    "Los costales de Yute natural son un envase cómodo y flexible, ideales para el almacenamiento de Café, Cacao, Semillas, Granos, Verduras, Especias, Piñones, etc",
                    "Permite una perfecta transpiración de los productos que contienen, su elaboración no daña al medio ambiente debido a que su planta proviene del cultivo. Si el saco se llena de arena o tierra puede servir para fabricar barreras contra la erosión o diques para evitar inundaciones.",
                    "Costales de Yute"
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
            console.log(this.productos.length)
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
        /* Debbugeo del responsive
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
                if(this.window_width <= 770){ 
                    if(this.window_width < 580){
                        this.show_each = 1
                        return 1
                    }else{
                        this.show_each = 2
                        return 2
                    }
                }else{
                    this.show_each = 3
                    return 3
                    }
            }else{
                this.show_each = 4
                return 4
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
}
</script>
