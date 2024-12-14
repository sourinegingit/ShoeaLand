export interface Category {
    id: string;
    title: string;
    label: string;
  };
  
  export interface ProductImage {
    title: { src: string };
    list: { src: string }[];
  };
  
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
  

  