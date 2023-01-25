<script setup lang="ts">
import {ref} from 'vue'
import Expenses from '../components/Expenses.vue'
import Form from '../components/Form.vue'

const open = ref(false)

function openModal() {
  open.value = true
}
</script>

<template>
  <button @click="openModal">New Expense</button>
  <Expenses />
  <Teleport to="#app">
    <Form v-if="open" @close="open = false" />
  </Teleport>
</template>
