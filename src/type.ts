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
  export interface Products  {
    id: number;
    title: string;
    rate: string;
    price: string;
    size: number[];
    color: string[];
    brand: string;
    images: ProductImage;
    discount: number;
    views: number;
    category: string;
  };
  
  export interface Comment  {
    id: string;
    text: string;
    postId: string;
  };
  
  export interface CartItem  {
    id: number;
    title: string;
    price: number;
    order: number;
    size: number[];
    color: string[];
    brand: string;
    images: string;
    sizeselect: number;
    colorselect: string;
    quantity: number;
    totalPr: number;
  };
  

  