import type {Product, ProductFilters} from "@/types/product.ts";

export async function getProducts(filters : ProductFilters = {}) {
    /** THIS IS WHAT WOULD BE DONE WITH A REAL API - dummyjson.com doesn't support filter -> simulated afterwards
     *

     const params = new URLSearchParams()


    if(filters.search) params.set('title', filters.search)
    if(filters.category && filters.category !== 'All') {
        params.set('category', filters.category)
    }

    const res = await fetch(`https://dummyjson.com/products?${params.toString()}`)

    */

    const res = await fetch(`https://dummyjson.com/products`)

    if(!res.ok) {
        throw new Error('Failed to fetch products')
    }

    const { products } = await res.json()
    const productsArray = products as Product[]
    return productsArray
        .filter(product => filters.category == null || filters.category === 'All' || product.category === filters.category) //this should be done in the call with a real API
        .filter(product => filters.search == null || product.title.toLowerCase().includes(filters.search.toLowerCase()))
        .map(product => ({
            id: product.id,
            title: product.title,
            category: product.category,
            price: product.price,
            stock: product.stock
    }))
}

export async function getProductById(id: number): Promise<Product| null> {
    const res = await fetch(`https://dummyjson.com/products/${id}`)

    if(!res.ok) {
        throw new Error('Failed to fetch products')
    }

    const response = await res.json()
    return {
        id: response.id,
        title: response.title,
        category: response.category,
        price: response.price,
        stock: response.stock,
    }
}