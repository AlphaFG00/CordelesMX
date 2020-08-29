<template>
    <div>
        <div class="container">
            <b-modal id="modal-correo" centered hide-footer :title="messages[selected_message].title">
                <div class="d-block text-center">
                    <h3>{{ messages[selected_message].message }}</h3>
                </div>
                <b-button class="mt-3" :variant="`outline-${messages[selected_message].variant}`" block @click="$bvModal.hide('modal-correo')">Cerrar</b-button>
            </b-modal>
        </div>
        <b-card align="left">
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
    name: 'ContactForm',
    data() {
      return {
        form: {
            email: '',
            name: '',
            number: '',
            text: ''
        },
        selected_message: 'success',
        messages: {
            success: {
                title: 'Correo enviado',
                message: 'Pronto nos podremos en contacto con usted!',
                variant: 'cggreen'
            },
            error: {
                title: 'Parece que ocurrió un error :(',
                message: 'Por favor recargue la página e inténtelo de nuevo',
                variant: 'danger'
            }
        },
        show: true
      }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            let sending = this.form

            this.$store.dispatch('send_mail', {
                nombre: sending.name, telefono: sending.number, correo: sending.email, mensaje: sending.text
            })
            .then((res) => {
                console.log(res)

                this.showModal('success')
                this.clearForm()
            })
            .catch((error) => {
                console.log(error)
                this.showModal('error')
            })
        },
        onReset(evt) {
            evt.preventDefault()
            this.clearForm()
        },
        clearForm() {
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.text = ''
            this.form.number=''

            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        showModal (variant = 'success') {
            this.selected_message = variant
            this.$bvModal.show('modal-correo')
        }
    }
  }
</script>
