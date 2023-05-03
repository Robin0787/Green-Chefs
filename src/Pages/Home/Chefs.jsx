import React, { useEffect, useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://green-cehfs-server-3fletaisf-robin0787.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data));
    }, []);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                chefs.map(item => {
                    return (
                        <div key={item.chef_id} className="flex px-3 py-2 border shadow-lg rounded gap-2">
                            <img src={item.chef_image} className='w-40 md:w-32 lg:w-48 lg:h-52 rounded-md' />
                            <div className="space-y-3 flex flex-col justify-between py-2 w-full">
                                <div>
                                    <h2 className="text-xl text-gray-700 font-semibold">{item.chef_name}</h2>
                                    <p className='text-sm text-gray-500'>Experience : {item.years_of_experience} years</p>
                                </div>
                                <div>
                                    <p className='text-sm mb-1 text-gray-500'>Recipes : {item.num_of_recipes}</p>
                                    <div className="flex justify-between items-center w-auto">
                                        <p className='flex justify-center items-center gap-1'><FaRegThumbsUp className='text-green-700' />
                                            <span className='text-gray-500'>{item.likes}</span></p>
                                        <Link to={`/chef/${item.chef_id}`} className="bg-green-600 text-white hover:bg-green-500 duration-300 text-sm p-1 px-2 rounded-md">View Recipes</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};





export default Chefs;