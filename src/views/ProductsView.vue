<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products.store'
import ProductFilters from '@/components/ProductFilters.vue'
import ProductList from '@/components/ProductList.vue'

const productsStore = useProductsStore()
const { items, loading, error } = storeToRefs(productsStore)

const search = ref('')
const category = ref('All')

const categories = computed(() => ['All', 'beauty', 'fragrances', 'furniture'])

watch(
    [search, category],
    ([newSearch, newCategory]) => {
      productsStore.fetchProducts({
        search: newSearch,
        category: newCategory,
      })
    },
    { immediate: true }
)
</script>

<template>
  <section>
    <h1>Produits</h1>

    <ProductFilters
        v-model:search="search"
        v-model:category="category"
        :categories="categories"
    />

    <p v-if="loading">Chargement...</p>
    <p v-else-if="error">{{ error }}</p>
    <ProductList v-else :items="items" />
  </section>
</template>