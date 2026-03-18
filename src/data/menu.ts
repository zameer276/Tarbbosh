export interface MenuItem {
  id: string;
  name: string;
  category: 'Veg' | 'Non-Veg' | 'Fast Food' | 'Beverages';
  price: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  // Veg Food
  { id: 'v1', name: 'Paneer Butter Masala', category: 'Veg', price: '₹280', image: 'https://picsum.photos/seed/paneer/400/300' },
  { id: 'v2', name: 'Veg Biryani', category: 'Veg', price: '₹220', image: 'https://picsum.photos/seed/vegbiryani/400/300' },
  { id: 'v3', name: 'Dal Makhani', category: 'Veg', price: '₹180', image: 'https://picsum.photos/seed/dal/400/300' },
  { id: 'v4', name: 'Veg Fried Rice', category: 'Veg', price: '₹160', image: 'https://picsum.photos/seed/vegrice/400/300' },
  { id: 'v5', name: 'Mix Veg Curry', category: 'Veg', price: '₹200', image: 'https://picsum.photos/seed/mixveg/400/300' },

  // Non-Veg Food
  { id: 'nv1', name: 'Chicken Biryani', category: 'Non-Veg', price: '₹320', image: 'https://picsum.photos/seed/chickenbiryani/400/300' },
  { id: 'nv2', name: 'Butter Chicken', category: 'Non-Veg', price: '₹350', image: 'https://picsum.photos/seed/butterchicken/400/300' },
  { id: 'nv3', name: 'Chicken Tikka', category: 'Non-Veg', price: '₹300', image: 'https://picsum.photos/seed/chickentikka/400/300' },
  { id: 'nv4', name: 'Mutton Rogan Josh', category: 'Non-Veg', price: '₹450', image: 'https://picsum.photos/seed/roganjosh/400/300' },
  { id: 'nv5', name: 'Chicken Fried Rice', category: 'Non-Veg', price: '₹240', image: 'https://picsum.photos/seed/chickenrice/400/300' },

  // Fast Food
  { id: 'ff1', name: 'Chicken Burger', category: 'Fast Food', price: '₹120', image: 'https://picsum.photos/seed/burger/400/300' },
  { id: 'ff2', name: 'Veg Burger', category: 'Fast Food', price: '₹90', image: 'https://picsum.photos/seed/vegburger/400/300' },
  { id: 'ff3', name: 'French Fries', category: 'Fast Food', price: '₹80', image: 'https://picsum.photos/seed/fries/400/300' },
  { id: 'ff4', name: 'Chicken Pizza', category: 'Fast Food', price: '₹250', image: 'https://picsum.photos/seed/pizza/400/300' },
  { id: 'ff5', name: 'Sandwich', category: 'Fast Food', price: '₹70', image: 'https://picsum.photos/seed/sandwich/400/300' },

  // Beverages
  { id: 'b1', name: 'Cappuccino', category: 'Beverages', price: '₹110', image: 'https://picsum.photos/seed/cappuccino/400/300' },
  { id: 'b2', name: 'Latte', category: 'Beverages', price: '₹120', image: 'https://picsum.photos/seed/latte/400/300' },
  { id: 'b3', name: 'Espresso', category: 'Beverages', price: '₹80', image: 'https://picsum.photos/seed/espresso/400/300' },
  { id: 'b4', name: 'Cold Coffee', category: 'Beverages', price: '₹140', image: 'https://picsum.photos/seed/coldcoffee/400/300' },
  { id: 'b5', name: 'Kashmiri Kahwa', category: 'Beverages', price: '₹60', image: 'https://picsum.photos/seed/kahwa/400/300' },
  { id: 'b6', name: 'Green Tea', category: 'Beverages', price: '₹50', image: 'https://picsum.photos/seed/greentea/400/300' },
];
