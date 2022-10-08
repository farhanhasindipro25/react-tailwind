import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({feature}) => {
    return (
        <div className="flex items-center ml-2 mt-5">
                <CheckCircleIcon className='h-4 w-4'></CheckCircleIcon>
                <p className='ml-3'>{feature}</p>
        </div>
    );
};

export default Feature;