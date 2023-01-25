<script setup lang="ts">
</script>

<template>
  <main class="layout">
    <header class="header">
      <div class="header__logo">
        <img src="../assets/logo.svg"/>
      </div>

      <nav></nav>
    </header>

    <slot />
  </main>
</template>

<style scoped>
.layout {
  height: 100%;
  width: 100%;

  background: blue;
}

.header {
  height: 40px;
  width: 100%;

  background-color: #000;
}
</style>
