<template>
  <div class="container w-full h-screen">
    <h1>home</h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  mounted() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    if (!user) {
      this.$router.push({ name: "signup" });
    }
  },
};
</script>
