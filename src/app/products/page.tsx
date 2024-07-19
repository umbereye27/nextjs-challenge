import React from 'react'
import Image from 'next/image';
import { MdAddShoppingCart } from "react-icons/md";

interface CardData {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: string;
}

const cardData: CardData[] = [
  {
    src: "/asset/images/image-waffle-tablet.jpg",
    alt: "Image 1",
    title: "Waffle with Berries",
    description: "Waffle",
    price: "$6.50"
  },
  {
    src: "/asset/images/image-creme-brulee-desktop.jpg",
    alt: "Image 2",
    title: "Creme Brulee",
    description: "Waffle",
    price: "$6.50"
  },
  {
    src: "/asset/images/image-macaron-desktop.jpg",
    alt: "Image 3",
    title: "Macaron",
    description: "Waffle",
    price: "$6.50"
  },
  {
    src: "/asset/images/image-tiramisu-desktop.jpg",
    alt: "Image 4",
    title: "Tiramisu",
    description: "Waffle",
    price: "$6.50"
  },
  {
    src: "/asset/images/image-baklava-desktop.jpg",
    alt: "Image 5",
    title: "Baklava",
    description: "Waffle",
    price: "$6.50"
  },
  {
    src: "/asset/images/image-meringue-desktop.jpg",
    alt: "Image 6",
    title: "Meringue",
    description: "Waffle",
    price: "$6.50"
  },
  {
    src: "/asset/images/image-cake-desktop.jpg",
    alt: "Image 7",
    title: "Cake",
    description: "Waffle",
    price: "$6.50"
  },
  {
    src: "/asset/images/image-brownie-desktop.jpg",
    alt: "Image 8",
    title: "Brownie",
    description: "Waffle",
    price: "$6.50"
  },
  {
    src: "/asset/images/image-panna-cotta-desktop.jpg",
    alt: "Image 9",
    title: "Panna Cotta",
    description: "Waffle",
    price: "$6.50"
  }
];
const ProductList = () => {
  return (
    <div className="bg-rose min-h-screen flex flex-col py-20 sm:p-8">
      <h1 className="text-4xl font-bold py-4 sm:text-5xl lg:text-5xl">Dessert</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-9 sm:gap-8 py-8">
        {cardData.map((card, index) => (
          <div key={index} className="bg-rose max-w-sm rounded overflow-hidden">
            <div className="relative rounded hover:border-2 hover:border-primary">
              <Image
                src={card.src}
                alt={card.alt}
                width={400}
                height={200}
                className="w-full"
              />
              <div className="absolute flex justify-center items-center -bottom-7 left-0 right-0">
                <div className="bg-white rounded-full border-2 border-secondary flex items-center justify-center px-4">
                  <MdAddShoppingCart className="text-2xl mr-2 text-primary" />
                  <button className="sm:px-4 sm:py-2 rounded">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="px-4 sm:px-6 py-4">
              <div className="text-secondary mb-2"><small>{card.description}</small></div>
              <small className='font-bold text-gray-800'>{card.title}</small>
              <p className='text-red-800 font-semibold py-2'>{card.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProductList
