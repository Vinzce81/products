<script setup lang="ts">
import type { Product } from '@/types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <article>
    <h3>{{ product.title }}</h3>
    <p>{{ product.category }}</p>
    <p>{{ product.price }} €</p>
    <p>Stock : {{ product.stock }}</p>

    <RouterLink :to="`/products/${product.id}`">See details</RouterLink>
  </article>
</template>