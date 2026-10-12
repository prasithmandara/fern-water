export interface MineralInfo {
  name: string;
  symbol: string;
  amount: string;
  unit: string;
  percentage: number; // for visual progress bar
  description: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: "luxury-dining" | "everyday" | "bulk-office" | "dispensers";
  volume: string;
  priceLKR: number;
  priceUSD: number;
  image: string;
  badge?: string;
  description: string;
  features: string[];
  ph: number;
  packaging: string;
  idealFor: string;
  minerals: MineralInfo[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OutletInfo {
  city: string;
  phone: string;
  address: string;
  isHeadquarters?: boolean;
}
