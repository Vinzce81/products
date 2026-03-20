import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProductsView from "@/views/ProductsView.vue";

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path : '/products', name: 'products', component: ProductsView },
  { path: '/products/:id', name: 'product-detail', component: ProductDetailView, props: true},
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
