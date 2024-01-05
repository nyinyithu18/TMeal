import React, { useEffect } from "react";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesMeals } from "../../redux/action/meals";

const CategoriesMeals = () => {
  const dispatch = useDispatch();
  let categoriesMeals = [];
  categoriesMeals = useSelector((state) => state.meals.categoriesMeals);
  console.log(categoriesMeals);

  const fetchRandomMeals = async () => {
    const res = await api.get("/categories.php");
    dispatch(fetchCategoriesMeals(res.data.categories));
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);

  if (categoriesMeals) {
    return (
      <div className="bg-stone-700">
        <hr className="my-2 mx-6 text-white md:mx-10 lg:mx-20" />
        <h1 className="text-xl text-white text-center">Categories Meals</h1>
        <div className="flex justify-center my-3 mx-5 md:mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoriesMeals.length > 0 ? (
              categoriesMeals.map((category) => (
                <div
                  key={category.idCategory}
                  className="rounded bg-stone-600"
                >
                  <img src={`${category.strCategoryThumb}`} />
                  <h3 className="text-center text-amber-500">
                    {category.strCategory}
                  </h3>
                </div>
              ))
            ) : (
              <h1>There is no movies!</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default CategoriesMeals;
