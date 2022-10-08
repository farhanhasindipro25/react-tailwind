import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingCategories = [
    { id: 1, name: "Free", price: 0.0, features: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ] },
    { id: 2, name: "Scale", price: 9.99, features: [
      'Everything on Free, plus.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ] },
    { id: 3, name: "Enterprise", price: 19.99, features: [
      'Everything on Scale, plus.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ] }
  ];
  return (
    <div>
      <h2 className="text-3xl bg-slate-800 font-bold p-12 text-white text-center">
        Best deal of the town!!!
      </h2>
      <div className="grid md:grid-cols-3 gap-12 mt-4 mx-56">
      {
        pricingCategories.map((category) => (
            <PriceOption 
            key={category.id} 
            category={category}
            ></PriceOption>
        ))
      }
      </div>
    </div>
  );
};

export default Pricing;
