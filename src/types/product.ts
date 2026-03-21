export type Product = {
    id: number
    title: string
    category: string
    price: number
    stock: number
}

export type ProductFilters = {
    search?: string
    category?: string
    page?: number
}