import React from 'react';

const EmptyState = ({message, level, address }) => {
    return (
        <div className='min-h-[calc(100vh-116px)] gap-5 flex flex-col justify-center items-center p-16 '>
            <p className='text-gray-600 text-lg lg:text-3xl'>{message}</p>
        </div>
    );
};

export default EmptyState;