import {
  BarChart2,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

export const SIDE_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    path: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8b5cfcf6",
    path: "/products",
  },
  {
    name: "Users",
    icon: Users,
    color: "#ec4899",
    path: "/users",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#10b981",
    path: "/sales",
  },
  {
    name: "Order",
    icon: ShoppingCart,
    color: "#f59e0b",
    path: "/orders",
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#3b82f6",
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6ee7b7",
    path: "/settings",
  },
];

export const SALES_DATA = [
  {
    name: "Jul",
    sales: 4000,
  },
  {
    name: "Aug",
    sales: 3800,
  },
  {
    name: "Sep",
    sales: 5100,
  },
  {
    name: "Oct",
    sales: 4600,
  },
  {
    name: "Nov",
    sales: 7400,
  },
  {
    name: "Jan",
    sales: 6100,
  },
  {
    name: "Feb",
    sales: 5900,
  },
  {
    name: "Mar",
    sales: 6800,
  },
  {
    name: "Apr",
    sales: 6300,
  },
  {
    name: "May",
    sales: 7100,
  },
  {
    name: "Jun",
    sales: 7500,
  },
];

export const CATEGORY_DATA = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & arden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sport & Outdoors", value: 1900 },
];
export const SALES_CHANNEL_DATA = [
  {
    name: "website",
    value: 45600,
  },
  {
    name: "App",
    value: 45000,
  },
  {
    name: "Social Media",
    value: 42000,
  },
  {
    name: "Email",
    value: 40000,
  },
];
// colors using common
export const COLORS = ["#6366f1", "#ef553b", "#00b894", "#f7dc6f", "#e5e5ea"];

export const PRODUCT_DATA = [
  {
    id: 1,
    name: "Product 1",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1000,
  },
  {
    id: 2,
    name: "Product 2",
    category: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Product 3",
    category: "Smart Watch",
    category: "Electrocnics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Product 4",
    category: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 66,
    sales: 700,
  },
  {
    id: 5,
    name: "product 5",
    category: "Coffee Maker",
    category: "Electronics",
    price: 55.8,
    stock: 80,
    sales: 950,
  },
];

export const CONNECTEDICONS = [
  {
    id: 1,
    name: "FaceBook",
    connected: true,
    icon: "/icons/facebook.png",
  },
  {
    id: 2,
    name: "Google",
    connected: false,
    icon: "/icons/google.png",
  },
  {
    id: 3,
    name: "Twitter X",
    connected: true,
    icon: "/icons/twitter.png",
  },
];
