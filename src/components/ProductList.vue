<script setup lang="ts">
import {useProductsStore} from "@/stores/products.store.ts";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";
import ProductCard from "@/components/ProductCard.vue";

const productStore = useProductsStore()
const { items, loading, error, total } = storeToRefs(productStore)

onMounted(() => {productStore.fetchProducts()})
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