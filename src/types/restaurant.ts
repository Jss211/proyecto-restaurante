// Categorías disponibles en la carretilla
export type CategoryId= 'todos' | 'chifa' | 'ceviche' | 'bebidas' | 'combos';

export interface Category {
    id: CategoryId;
    name: string;
    icon: string;
}

// Estructura de cada plato o bebida
export interface Dish {
    id: string;
    name: string;
    description: string;
    price: number;
    category: CategoryId;
    image: string;
    isAvailable: boolean;
    popular?: boolean; // Etiqueta de "Mas pedido" o "Especial"
}

// Estructura de un item dentro del carrito
export interface CartItem {
    dish: Dish;
    quantity: number;
    notes?: string; // Ejemplos: "Sin cebolla", "Con bastante ají"
}

// Modalidad de entrega
export type DeliveryType = 'pickup' | 'delivery';

// Resumen del pedido completo
export interface Order {
    customerName: string;
    phone: string;
    address?: string;
    deliveryType: DeliveryType;
    items: CartItem[];
    subtotal: number;
    deliveryFee: number;
    total: number;
    notes?: string;
}