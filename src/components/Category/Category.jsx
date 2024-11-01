import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
    const [categoryItems, setCategory] = useState([]);
    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className='container mx-auto my-10 px-5'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-5'>Job Category List</h1>
                <p className='md:w-8/12 mx-auto'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {
                   categoryItems.map(item=><CategoryCard 
                   key={item.id}
                   item={item}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;