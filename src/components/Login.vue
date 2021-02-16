<template>
  <div>
      <b-row class="p-3">
        <b-col cols="8">1 of 3</b-col>
        <b-col cols="3">
          <b-card>
            <b-form class="" @submit="onSubmit" @reset="onReset">
            <b-form-group id="group-username" class="text-left" label="Nome de usuário" label-for="input-1">
              <b-form-input class="form-control-sm" id="usaername-field" v-model="form.username" type="email" placeholder="Enter email" >
              </b-form-input>
            </b-form-group>
            <b-form-group id="group-password" class="text-left" label="Senha" label-for="input-2">
              <b-form-input class="form-control-sm" id="password-field" v-model="form.password" type="password" placeholder="Enter password"></b-form-input>
            </b-form-group>
            <b-button type="submit"  variant="secondary">Entrar</b-button>
          </b-form>
          </b-card>
        </b-col>
        <b-col cols="1">3 of 3</b-col>
      </b-row>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
      return {
        form: {
          username: '',
          password: '',
        },
      }
    },
  methods:{
     onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
