<template>
  <div class="mx-auto">
    <img src="" alt="" />
    <h1 class="text-center text-xl text-blue-400 my-10 capitalize">Sign up</h1>
    <div class="register mx-auto">
      <input
        type="text"
        placeholder="Enter Name"
        v-model="name"
        class="mx-auto"
      />
      <input type="email" placeholder="Enter Email" v-model="email" />
      <input
        type="password"
        name=""
        id=""
        placeholder="Enter Password"
        v-model="password"
      />
      <button @click="signUp">Sign Up</button>
      <p class="text-center">
        <router-link to="/signin">Login</router-link>
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
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
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
