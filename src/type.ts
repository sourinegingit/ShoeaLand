export interface Category {
    id: string;
    title: string;
    label: string;
  };
  
  export interface ProductImage {
    title: { src: string };
    list: { src: string }[];
  };
  export interface IProductDetail {
    id: number;
    name: string;
    price: number;
    isFavorite: boolean;
    images: string[];
    icon: string;
    brand: string[];
    colors: string[];
    sizes: string[];
    order: number;
    is_popular: boolean;
    description: string;
    rating: number;
    view_count: number;
    sold_quantity: number;
  }
  export interface IProductProps {
    id: number;
  name: string;
    price: number;
    sold_quantity:number;
    src:string;
    description:string;
    colors:string[];
    images:string[];
    isFavorite:string;
    is_popular:boolean;
    order:number;
    rating:number;
    sizes:string[];
    view_count:number;
    onClick: () => void; 
    onRemove:(id:number) => void;// Remove item
  
  }
  export interface Comment  {
    id: string;
    text: string;
    postId: string;
  };
  
  export interface CartItem {
    productId: number;
    name: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    images: string[];
  }

  // checkout
 export  interface OrderItemProps {
    name: string;
    details: string;
    price: string;
    quantity: number;
    imageUrl: string;
  }
  export interface OrderListProps {
    items: OrderItemProps[];
  }

  export interface AmountSummaryProps {
    amount: string;
    shipping: string;
    total: string;
  }