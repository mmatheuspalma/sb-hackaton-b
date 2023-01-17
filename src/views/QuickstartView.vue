<script setup lang="ts">
import Item from '../components/Item.vue'
</script>

<template>
  <main>
    <h1>Getting Started ✨</h1>
    <Item>
      <template #heading>Introduction</template>
      <p>Let's get started by introducing each other to your team.</p>
    </Item>
  </main>
</template>


<style scoped>
main {
  margin: 4rem;
}

</style>
