<template>
  <div class="mx-auto">
    <img src="" alt="" />
    <h1 class="text-center text-xl text-blue-400 my-10 capitalize">Sign In</h1>
    <div class="register mx-auto">
      <input type="text" placeholder="Enter Email" v-model="email" />
      <input
        type="password"
        name=""
        id=""
        placeholder="Enter Password"
        v-model="password"
      />
      <button class="text-center" @click="Login">Login</button>
      <p class="text-center">
        <router-link to="/signup">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async Login() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      console.log(result);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        // khi sign up thành công sẽ chuyển qua trang home
        this.$router.push({ name: "home" });
      }
    },
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
input {
  outline: none;
  border: 1px solid rgb(49, 196, 176);
  width: 80%;
  padding: 8px 14px;
  display: block;
  margin: 10px auto;
}
button {
  display: block;
  margin: 10px auto;
  padding: 8px 12px;
  background: black;
  border-radius: 6px;
  color: white;
}
</style>
