import MealItem from "./MealItem";

export default function MealList({meals}){
    return(
        <div className="card-group text-center justify-content-center m-5">
            {meals.map(meal => (
                <MealItem key={meal.idMeal} {...meal} />
            ))}
        </div>
    )
}