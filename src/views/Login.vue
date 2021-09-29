<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="email" />
      <br />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login(e) {
        e.preventDefault();
      this.$store.dispatch('login', {email:this.email, password:this.password})
    },
  }
};
</script>