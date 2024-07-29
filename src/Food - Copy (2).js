import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pic from './images/food.jpg'
 const s = 'https://cdn-icons-png.flaticon.com/256/159/159606.png';
 
export default function Food() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
 
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => {
                setCategories(res.data.categories);
            })
            .catch(error => {
                console.error('Error fetching categories: ', error);
            });
    }, []);
 
    const fetchMealsByCategory = (category) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => {
                setMeals(res.data.meals);
                setSelectedCategory(category);
            })
            .catch(error => {
                console.error(`Error fetching meals for category ${category}: `, error);
            });
    };
 
    const resetCategorySelection = () => {
        setSelectedCategory(null);
        setMeals([]);
    };
 
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
 
    const filteredMeals = meals.filter(meal => {
        return meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
    });
 
    return (
        <body>
    <div className='container' style={{backgroundColor:"cream"}}>
     {selectedCategory ? (
     <>
    <button className='btn btn-link mb-3' onClick={resetCategorySelection}>
     <img src={pic} alt='' style={{ height: 50, width: 50, backgroundColor: 'black' }} />
    </button>
    <h2 className="text-center mb-4">{selectedCategory}</h2>
    <div className='row' style={{ marginBottom: 20 }}>
    <div className='col-md-5' style={{backgroundColor:"pink"}}>
                            <input
                                type='text'
                                placeholder='Search meals...'
                                className='form-control'
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        {filteredMeals.map(meal => (
                            <div key={meal.idMeal} className='col-md-auto mb-3'>
                                <div className="card text-center" style={{ height: 300, width: 200,backgroundColor:"violet" }}>
                                    <img
                                        src={meal.strMealThumb}
                                        className='card-img-top img-fluid'
                                        alt={meal.strMeal}
                                    />
                                    <div className='row'>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ color: 'balck' }}>{meal.strMeal}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
               ) : (
                <div className='row justify-content-center mb-4'>
                    {categories.map(category => (
                        <div key={category.idCategory} className='col-md-auto mb-3 text-center' backgroundColor="orange">
                            <button
                                className='btn btn-link'
                                onClick={() => fetchMealsByCategory(category.strCategory)}
                            >
                                <img
                                    src={category.strCategoryThumb}
                                    className='img-fluid bg-sucess'
                                    alt={category.strCategory} width='250px' height='200px'
                                    style={{ marginRight:'75px',backgroundColor:"lightgreen"}}
                                />
                                <h5 className='mt-2' style={{ margin: 0, padding: 0, marginRight:'75px' }}>
                                    {category.strCategory}
                                </h5>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </body>
    );
}