import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({category}) => {
    const {features} = category;
    return (
        <div className='bg-slate-900 mt-4 text-white text-center rounded-xl p-3'>
            <div>
                <p>
                <span className='text-4xl font-bold'>
                    {category.price}
                    </span> 
                    <span className='text-lg font-semibold'>
                        /month
                    </span>
                </p>
                <h3 className='font-bold text-2xl mt-1.'>
                    {category.name}
                </h3>
            </div>
            {
                features.map((feature, idx) => <Feature
                key={idx}
                feature = {feature}
                ></Feature>)
            }
            <button className='bg-green-500 w-full rounded-lg py-2 text-white font-bold mt-5 mb-3 hover:bg-green-600'>Buy Now</button>
        </div>
    );
};

export default PriceOption;