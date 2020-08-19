<template>
    <div>
        <b-card>
            <b-form @submit="onSubmit" @reset="onReset" >

                <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                    <b-form-input
                        id="input-1"
                        v-model="form.name"
                        required
                        placeholder="Ingrese su nombre"
                    />
                </b-form-group>

                <b-form-group id="input-group-2" label="Correo Electrónico:" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Ingrese su correo"
                    />
                </b-form-group>

                <b-form-group
                    id="input-group-3"
                    label="Número de teléfono:"
                    label-for="input-3"
                    description="Sus datos no seran compartidos ni expuestos a terceros."
                >
                    <b-form-input
                        id="input-3"
                        v-model="form.number"
                        type="text"
                        required
                        placeholder="Ingrese su número teléfonico"
                    />
                </b-form-group>

                <b-form-group id="input-group-4" label="Mensaje:" label-for="input-4">
                    <b-form-textarea
                        id="input-4"
                        v-model="form.text"
                        required
                        placeholder="Mensaje"
                    />
                </b-form-group>

                <b-button type="submit" variant="light">Enviar</b-button>
                <b-button type="reset" variant="primary">Limpiar</b-button>
            </b-form>
        </b-card>
    </div>
</template>
<script>
export default {
    name:'contactForm',
    data(){
        return{
            form: {
                email: '',
                name: '',
                number: '',
                text: ''
            },
        }
    },
    methods: {
        onReset(){
            this.form.email = ''
            this.form.name = ''
            this.form.number = ''
            this.form.text = ''
        },
        onSubmit(){
            
        }
    },
}
</script>
