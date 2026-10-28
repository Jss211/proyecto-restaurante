import type { Category, Dish } from '../types/restaurant';

export const CATEGORIES: Category[] = [
  { id: 'todos', name: 'Todos', icon: 'UtensilsCrossed' },
  { id: 'chifa', name: 'Chifas', icon: 'Flame' },            // Wok / fuego
  { id: 'ceviche', name: 'Ceviches', icon: 'Fish' },         // Pescado fresco
  { id: 'combos', name: 'Combinados', icon: 'Sparkles' },     // Especiales
  { id: 'bebidas', name: 'Bebidas', icon: 'CupSoda' },       // Vasos / bebidas
];

export const DISHES: Dish[] = [
  {
    id: 'chifa-1',
    name: 'Aeropuerto de Pollo al Wok',
    description: 'Chaufa de pollo salteado al wok con fideos chinos, frejolito chino y tortilla.',
    price: 15.00,
    category: 'chifa',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    popular: true,
  },
  {
    id: 'chifa-2',
    name: 'Arroz Chaufa Especial',
    description: 'Arroz chaufa ahumado al wok con trozos de pollo tierno y wantán crujiente.',
    price: 14.00,
    category: 'chifa',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    popular: false,
  },
  {
    id: 'ceviche-1',
    name: 'Ceviche Carretillero Clásico',
    description: 'Pescado fresco del día, leche de tigre picantita, canchita, camote glaseado y choclo.',
    price: 18.00,
    category: 'ceviche',
    image: 'https://images.unsplash.com/photo-1535400255456-984241443b29?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    popular: true,
  },
  {
    id: 'ceviche-2',
    name: 'Chicharrón Mixto con Yuca',
    description: 'Trocitos de pescado y pota crujiente con salsa criolla y tártara de la casa.',
    price: 16.00,
    category: 'ceviche',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    popular: false,
  },
  {
    id: 'combo-1',
    name: 'Dúo Marino Carretillero',
    description: 'El clásico infaltable: Media porción de ceviche fresco + Chicharrón de pota crocante.',
    price: 22.00,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    popular: true,
  },
  {
    id: 'combo-2',
    name: 'Mostrito Carretillero',
    description: 'Arroz chaufa al wok servido con un cuarto de pollo broaster crujiente y papas fritas.',
    price: 17.00,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    popular: true,
  },
  {
    id: 'bebida-1',
    name: 'Chicha Morada Casera (1 Litro)',
    description: 'Preparada con maíz morado, piña, manzana, canela y clavo de olor. Bien heladita.',
    price: 7.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    popular: false,
  },
  {
    id: 'bebida-2',
    name: 'Maracuyá Helada (1 Litro)',
    description: 'Jugo natural de maracuyá refrescante, ideal para acompañar el ceviche.',
    price: 7.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80',
    isAvailable: true,
    popular: false,
  },
];