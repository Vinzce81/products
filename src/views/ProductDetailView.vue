<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products.store'

const props = defineProps<{
  id: string
}>()

const productsStore = useProductsStore()
const { selectedProduct, loading, error } = storeToRefs(productsStore)

onMounted(() => {
  productsStore.fetchProductById(Number(props.id))
})
</script>

<template>
  <section>
    <p v-if="loading">Chargement...</p>
    <p v-else-if="error">{{ error }}</p>

    <article v-else-if="selectedProduct">
      <h1>{{ selectedProduct.title }}</h1>
      <p>Catégorie : {{ selectedProduct.category }}</p>
      <p>Prix : {{ selectedProduct.price }} €</p>
      <p>Stock : {{ selectedProduct.stock }}</p>
    </article>

    <p v-else>Produit introuvable.</p>
  </section>
</template>