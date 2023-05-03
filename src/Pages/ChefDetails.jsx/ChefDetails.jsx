import React from 'react';
import { toast } from 'react-hot-toast';
import { FaHeart, FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails);
    return (
        <section className='w-[90%] mx-auto space-y-4 my-10'>
            <article key={chefDetails.chef_id} className="md:flex py-2 gap-2 ">
                <img src={chefDetails.chef_image} className='rounded-md h-64 shadow-md md:w-1/2' />
                <div className="flex flex-col justify-between shadow-md p-3 border rounded-md pr-5">
                    <div className='space-y-2'>
                        <h2 className="text-xl text-gray-700 font-semibold">{chefDetails.chef_name}</h2>
                        <p className=" text-xs lg:text-sm text-justify text-gray-500">{chefDetails.chef_bio}</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Experience : {chefDetails.years_of_experience} years</p>
                        <p className='text-sm mb-1 text-gray-500'>Recipes : {chefDetails.num_of_recipes}</p>
                        <div className="flex justify-between items-center">
                            <p className='flex justify-center items-center gap-1'><FaRegThumbsUp className='text-green-700' />
                                <span className='text-gray-500'>{chefDetails.likes}</span></p>
                            <Link to={`/`} className="bg-green-600 text-white hover:bg-green-500 duration-300 text-sm p-1 px-2 rounded-md">Go Home</Link>
                        </div>
                    </div>
                </div>
            </article>
            <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    chefDetails.chef_recipes.map((recipe) => <ShowRecipes key={recipe.recipe_id} recipe={recipe} />)
                }
            </article>
        </section>
    );
};


function ShowRecipes({ recipe }) {
    const { recipe_name, cooking_method, recipe_image, recipe_ingredients, rating } = recipe;
    return (
        <div className="card card-compact shadow-lg p-4">
            <figure><img src={recipe_image} alt="Shoes" /></figure>
            <div className="space-y-1">
                <div>
                <h2 className="card-title text-xl text-gray-700 mt-4">{recipe_name}</h2>
                <p className="text-sm font-semibold text-gray-500">Cooking method : </p>
                <p className='text-sm text-gray-400'>{cooking_method}</p>
                <div>
                    <p className="text-sm font-semibold text-gray-500">Ingredients : </p>
                    {
                        recipe_ingredients.map(item => <span key={Math
                            .random()} className='text-sm'>{item}, </span>)
                    }
                </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <Rating initialRating={rating} emptySymbol={<FaRegStar className='text-green-600' />} fullSymbol={<FaStar className='text-green-600' />} readonly />
                        <p className='text-sm'>{rating || 0}</p>
                    </div>
                    <button onClick={(e) => { e.currentTarget.disabled = true; toast.success('Added to Favorite') }} className="text-sm py-2 px-4 bg-green-600 hover:bg-green-500 flex justify-center items-center gap-3 text-white disabled:opacity-70 disabled:hover:bg-green-600 disabled:cursor-not-allowed disabled:text-black rounded-md"><FaHeart /> <span className="text-white">Favorite</span></button>
                </div>
            </div>
        </div>
    )
}


export default ChefDetails;