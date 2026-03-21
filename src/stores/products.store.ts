import {ref, computed, type Ref} from 'vue'
import { defineStore } from 'pinia'
import {getProductById, getProducts} from "@/services/product.api.ts";
import type {Product, ProductFilters} from "@/types/product.ts";

export const useProductsStore = defineStore('products', () => {
  const items = ref<Product[]>([])
  const selectedProduct : Ref<Product | null> = ref(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const total = computed(() => items.value.length)

  async function fetchProducts(filters : ProductFilters = {}) {
    loading.value = true
    error.value = null

    try {
      items.value = await getProducts(filters)
    } catch (err) {
      if (err instanceof Error) {
        error.value = err
      } else {
        error.value = new Error('unknown error')
      }
    } finally {
      loading.value = false
    }
  }

  async function fetchProductById(id: number) {
    loading.value = true
    error.value = null

    try {
      selectedProduct.value = await getProductById(id)
    } catch (err) {
      if (err instanceof Error) {
        error.value = err
      } else {
        error.value = new Error('unknown error')
      }
    } finally {
      loading.value = false
    }
  }

  return { items, fetchProducts, loading, error, total, selectedProduct, fetchProductById }

})