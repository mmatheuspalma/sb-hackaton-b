<template>
  <div class="list">
    <el-table :data="expenses" sortable style="width: 100%">
      <el-table-column fixed prop="id" label="Id" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="amount" label="Amount" width="120" />
      <el-table-column prop="date" label="Date" width="120" />
      <el-table-column prop="category" label="Category" width="120" />
      <el-table-column fixed="right" label="Actions" width="200">
        <template #default="scope">
          <el-button
            size="small"
            @click="updateExpense(scope.$index, scope.row)"
          >
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="removeExpense(scope.$index)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useExpensesStore } from '@/stores/expenses'

const { expenses, updateExpense, removeExpense } = useExpensesStore()

import ListItem from '../components/ListItem.vue'
</script>

<style scoped>
.list {
  background: #ccc;
}

.list__fields {
  display: flex;
  justify-content: space-between;
}
</style>
