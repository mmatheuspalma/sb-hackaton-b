<template>
  <div v-if="isEditing" class="form">
    <header>Add Expense</header>
    <form @submit.prevent="handleExpense">
      <div>
        <label for="item">Item name</label>
        <input type="text" name="item" id="item" v-model="item" class="field" />
      </div>
      <div>
        <label for="category">Category</label>
        <select name="category" id="category" v-model="category" class="field">
          <option :value="option.value" v-for="option in categories" :key="option.value">{{ option.label }}</option>
        </select>
      </div>
      <div>
        <label for="amount">Amount</label>
        <div class="field"><input type="text" name="amount" id="amount" v-model="amount" class="field amount" />$</div>
      </div>
      <div>
        <label for="date">Date</label>
        <input type="date" name="date" id="date" v-model="date" class="field" />
      </div>
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import UUID from 'simple-uuid'

import { useExpensesStore } from '@/stores/expenses'

import { useRouter, useRoute } from 'vue-router'


export default {
  setup(_, ctx) {
    const { categories, addExpense, updateExpense, isEditing } = useExpensesStore()

    const today = new Date()
    const todayYear = today.getFullYear()
    const todayMonth = ("0" + (today.getMonth() + 1)).slice(-2)
    const todayDay = ("0" + today.getDate()).slice(-2)
    const defaultDate = `${todayYear}-${todayMonth}-${todayDay}`

    const item = ref('')
    const category = ref('health')
    const amount = ref(0)
    const date = ref(defaultDate)

    const route = useRoute()

    watch(
      () => route.params.id,
      async newId => {
        const item = currentId()
      }
    )
    
    function handleExpense() {
      addExpense({
        id: UUID(),
        name: item.value,
        amount: amount.value,
        date: date.value,
        category: category.value
      })
      item.value = ''
      category.value = 'health'
      amount.value = 0
      date.value = defaultDate
      ctx.emit('close')
    }

    return {
      item,
      category,
      categories,
      amount,
      date,
      handleExpense
    }
  },
}
</script>

<style scoped>
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  color: black;
  z-index: 10;
  min-width: 500px;
  box-shadow: 0px 2px 6px 5px rgba(128, 128, 128, 0.5);
}

input, select {
  border: solid 1px grey;
  padding: 2px;
}

.form header {
  font-size: 20px;
  text-transform: uppercase;
}

.form label, .form .field {
  display: flex;
  margin: 5px 0;
}

.form .field {
  width: 100%;
}
.form .field.amount {
  margin-right: 10px;
}

.form button {
  width: 100%;
  border: 0;
  background-color: black;
  text-transform: uppercase;
  height: 40px;
  color: white;
  margin-top: 10px;
}
</style>