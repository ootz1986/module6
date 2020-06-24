<template>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="text-center">
          <h2>User Login/Registration</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 pl-0">
          <login />
        </div>
        <div class="col-md-6 pr-0">
          <RegisterForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import login from '@/components/Login.vue'
import RegisterForm from '@/components/Register.vue'
export default {
  name: 'account',
  components: {
    login,
    RegisterForm
  }
}
</script>
