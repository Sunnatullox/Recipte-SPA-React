import { Link } from "react-router-dom";
export default function  MealItem(props){
    const {strMeal,strMealThumb, idMeal}=props;
    
    
    return(
        <div>
        <div className="card  m-lg-2 d-flex flex-column" style={{width:"18rem"}}>
        <img className="card-img-top" src={strMealThumb} alt={strMeal} />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
        </div>
          <div className="card-footer">
          <Link to={`/meals/${idMeal}`} className="btn btn-primary">Watch Recipe</Link>
          </div>
      </div>
        </div>
    )

}