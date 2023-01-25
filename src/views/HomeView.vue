<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useExpensesStore } from '@/stores/expenses'

import Expenses from '../components/Expenses.vue'
import Form from '../components/Form.vue'

const store = useExpensesStore()

const { toggleEditing } = store;
const { isEditing } = storeToRefs(store);
</script>

<template>
  <button @click="toggleEditing(true)">New Expense</button>
  <Expenses />
  <Teleport to="#app">
    <Form v-if="isEditing" @close="toggleEditing(false)" />
  </Teleport>
</template>
