<script setup lang="ts">
</script>

<template>
  <main class="layout">
    <header class="layout__header">
      <div class="header__logo">
        <img src="../assets/logo.svg"/>
      </div>
    </header>

    <div class="layout__content">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped>
.layout__header {
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 16px;
  background-color: #000;
}

.layout__content {
  padding: 16px;
}
</style>
