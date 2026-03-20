<script setup lang="ts">
const search = defineModel<string>('search', { default: '' })
const category = defineModel<string>('category', { default: 'All' })

defineProps<{
  categories: string[]
}>()
</script>

<template>
  <div>
    <input v-model="search" type="text" placeholder="Recherche..." />

    <select v-model="category">
      <option v-for="item in categories" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>