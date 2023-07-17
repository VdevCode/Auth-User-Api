<template>
  <div class="component bg-black text-white p-4 flex justify-between">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add restaurant</router-link>
    <router-link to="/update">Update</router-link>
    <a href="#" class="text-yellow-400" @click="Logout">Lougout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderApp",
  methods: {
    Logout() {
      localStorage.clear(), this.$router.push({ name: "signin" });
    },
  },
};
</script>

<style scoped></style>
