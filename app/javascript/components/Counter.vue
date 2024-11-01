<template>
  <div>
    <h2>Contador: {{ count }}</h2>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
</script>

<style scoped>
  h2 {
    color: #42b983;
  }
</style>