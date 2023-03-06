<script setup>
import ChildComponentA from './components/ChildComponentA.vue'
</script>

<template>
  <section>
    <div>
      <h1>I am Parent Component</h1>
      <!-- ChildComponentA is locally registered here -->
      <ChildComponentA />
      <!-- GlobalA and GlobalB is globally registered here -->
      <GlobalA />
      <GlobalB />
    </div>
  </section>
</template>

<style scoped>
section {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
}

div {
  background-color: #333;
  padding: 15px;
  color: aliceblue;
  font-family: 'Montserrat', sans-serif;
}
</style>
