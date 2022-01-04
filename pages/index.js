import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';

export default function Home({ products }) {
  return (
    <>
      <div className='bg-gray-700 relative overflow-hidden h-screen'>
        <div className='inset-0 bg-black opacity-25 absolute'>
          <img src='showcase.svg'></img>
        </div>

        <div className='container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32'>
          <div className='w-full flex flex-col items-center justify-between relative z-10'>
            <p className='flex flex-col items-center font-extrabold text-6xl text-center md:text-7xl text-white'>
              Get your swag Today!
            </p>
            <p className='flex flex-col max-w-lg text-center items-center font-semibold mt-6 text-white'>
              New lineup coming live this weekend
            </p>
            <a
              href='#'
              className='block bg-gray-800 hover:bg-gray-600 py-3 px-4 text-lg text-white font-bold uppercase mt-10 rounded-lg'
            >
              Get Notified
            </a>
          </div>
        </div>
      </div>
      <div className='text-3xl text-purple-600'>
        <ProductList products={products} />
      </div>

      <div className='container py-6 bg-gray-100'>
        <h1 className='text-lg font-bold text-center lg:text-2xl'>
          Get notified whenever a new product is released!
        </h1>

        <div className='flex justify-center mt-6'>
          <div className='bg-white border rounded-md focus-within:ring focus-within:border-blue-500'>
            <div className='flex flex-wrap justify-between md:flex-row'>
              <input
                type='email'
                className='p-2 m-1 text-sm text-gray-700 appearance-none focus:outline-none focus:placeholder-transparent'
                placeholder='Enter your email'
                aria-label='Enter your email'
              />
              <button className='w-full p-2 m-1 text-sm font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded-md lg:w-auto hover:bg-gray-700'>
                subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className='h-px mt-6 border-gray-300 border-none'></hr>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
