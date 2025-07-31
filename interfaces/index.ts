export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  beds: number;
  baths: number;
  guests: number;
  amenities?: string[];
  onClick?: () => void;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PropertyProps {
  id?: string;
  name: string;
  description?: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string[];
  address: Address;
  reviwCount?: number;
}

export interface ReviewProps {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date?: string;
}