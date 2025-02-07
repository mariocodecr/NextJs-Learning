import { CartCounter } from "@/shopping-cart/components";



export const metadata = {
 title: 'shopping Cart',
 description: 'This is a shopping cart page',
};


export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart products</span>
      <CartCounter value={ 20 } />
    </div>
    
  );
}


