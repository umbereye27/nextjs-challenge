import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">YOU ORDER, WE DELIVER</h1>
        <Link href="/products" className=' text-lg font-semibold bg-primary rounded px-6 py-3 text-white hover:border-2 hover:border-primary hover:bg-rose hover:text-primary'>Order Now</Link>
    </div>
    </div>
  );
};

export default Home;
