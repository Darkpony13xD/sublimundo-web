export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = "Todos" | "Camisetas" | "Tazas" | "Gorras" | "Accesorios";
