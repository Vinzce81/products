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

    const { products } = await res.json()
    const productsArray = products as Product[]
    return productsArray.map(product => ({
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