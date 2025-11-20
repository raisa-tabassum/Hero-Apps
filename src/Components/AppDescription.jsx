import React from 'react';

const AppDescription = ({app}) => {
    const {description} = app;
    return (
        <div className='max-w-7xl mx-auto sm:px-10 md:px-0'>
            <p className='font-bold text-xl mt-8 mb-3'>Description</p>
            <p className='text-[#a3acb3] text-lg mb-10'>{description}</p>
        </div>
    );
};

export default AppDescription;