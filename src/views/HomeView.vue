<template>
  <div class="container w-full h-screen">
    <header-app />
    <div class="p-4">
      <p>hello {{ name }}</p>
    </div>
  </div>
</template>

<script>
import HeaderApp from "@/components/Header/HeaderApp.vue";

export default {
  name: "HomeView",
  components: {
    HeaderApp,
  },
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    console.log(user);
    if (user) {
      this.name = user.name;
    }
    if (!user) {
      this.$router.push({ name: "signup" });
    }
  },
};
</script>
