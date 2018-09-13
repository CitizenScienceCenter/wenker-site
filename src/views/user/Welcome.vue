<template>
<div>
    <div>
        <login-form></login-form>
        <br/><br/>
        
    </div>
    <div>
    <register-form></register-form>
    </div>
</div>
</template>
<script>
import RegisterForm from "@/components/login-form.vue";
import LoginForm from "@/components/register-form.vue";
export default {
  name: "Welcome",
  components: {
    RegisterForm, LoginForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
