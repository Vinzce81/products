import type {Product, ProductFilters} from "@/types/product.ts";

export async function getProducts(filters : ProductFilters = {}) {
    const params = new URLSearchParams()

    if(filters.search) params.set('title', filters.search)
    if(filters.category && filters.category !== 'All') {
        params.set('category', filters.category)
    }

    const res = await fetch(`https://dummyjson.com/products?${params.toString()}`)

    if(!res.ok) {
        throw new Error('Failed to fetch products')
    }

    const resList =await  res.json()
    return resList.products
}

export async function getProductById(id: number): Promise<Product| null> {
    const res = await fetch(`https://dummyjson.com/products/${id}`)

    if(!res.ok) {
        throw new Error('Failed to fetch products')
    }

    return res.json()
}