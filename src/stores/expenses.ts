import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export type Expense = {
  id: number,
  name: string,
  amount: number,
  date: string,
  category: string
}

export const useExpensesStore = defineStore('expenses', () => {
  let expenses = reactive<Expense[]>([])
  const categories = ref([
    {
      value: 'food',
      label: 'Food',
    },
    {
      value: 'shopping',
      label: 'Shopping',
    },
    {
      value: 'travel',
      label: 'Travel',
    },
    {
      value: 'health',
      label: 'Health',
    }
  ])

  const currentId = computed((id) => {
    return expenses.find(item => item.id === id)
  }) 

  function addExpense(expense: Expense) {
    expenses.push(expense)
  }

  function updateExpense(index: number, expense: Expense) {
    expenses[index] = expense
  }

  function removeExpense(index: number) {
    delete expenses[index]
  }

  return {
    expenses,
    categories,
    addExpense,
    updateExpense,
    removeExpense
  }
})
