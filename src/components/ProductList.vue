<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import type {Product} from "@/types/product.ts";
defineProps<{
  items : Product[],
  loading: boolean,
  error: Error|null,
  total: number
}>()
</script>

<template>
  <h1>Products list</h1>
  <p v-if="loading">Loading...</p>
  <p v-else-if="error">{{ error }}</p>

  <ul v-else>
    <ProductCard v-for="product in items" :key="product.id" :product="product" />
  </ul>
  <p>Total products: {{ total }}</p>
</template>