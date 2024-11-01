<template>
  <div>
    <button @click="goToWelcomePage">Ir para Welcome Page</button>
  </div>
</template>

<script>
export default {
  name: "GoToWelcomeButton",
  methods: {
    goToWelcomePage() {
      window.location.href = "/welcome";
    }
  }
};
</script>

<style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #369870;
  }
</style>