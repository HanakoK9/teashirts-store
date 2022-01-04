import React from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/shopContext';
import Cart from './Cart';

export default function Navbar() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  return (
    <header className='border-b sticky top-0 z-20 bg-gray-100'>
      <div className='flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 m-auto lg:max-w-screen-xl'>
        <div>
          <Link href='/' passHref>
            <a className='cursor-pointer'>
              <span className='text-lg text-blue-600 pt-1 md:ml-4 font-bold'>
                TeaShirts
              </span>
            </a>
          </Link>
        </div>
        <div>
          <Link href='/contact'>
            <a className='cursor-pointer'>
              <span className='pt-1 mr-8 text-blue-500 font-bold'>Contact</span>
            </a>
          </Link>
          <a
            className='text-md font-bold text-blue-500 cursor-pointer'
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
          >
            Cart ({cartQuantity})
          </a>
          <Cart cart={cart} />
        </div>
      </div>
    </header>
  );
}
