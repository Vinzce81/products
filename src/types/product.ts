export interface Product {
    id: number
    title: string
    category: string
    price: number
    stock: number
}

export interface ProductFilters {
    search?: string
    category?: string
    page?: number
}