import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "../components/Loader";

export default function Recipte() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, []);

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <div className="recepte text-center">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          {recipe.strArea ? (
            <h4>
              {" "}
              <b>Area:</b> {recipe.strArea}
            </h4>
          ) : null}
          <h6>
            <b>Category:</b> {recipe.strCategory}
          </h6>
          <p>{recipe.strInstructions}</p>
          <p>
            <button
              className="btn btn-primary"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Show Recepe
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <table className="table table-hove=">
                <thead>
                  <tr>
                    <th>Ingredent</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(recipe).map((key) => {
                    if (key.includes("Ingredient") && recipe[key]) {
                      return (
                        <tr>
                          <td>{recipe[key]}</td>
                          <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
              <div className="">
              {recipe.strYoutube ? (
                <div className="col-md-auto">
                  <h5 className="text-center">Video Recepe</h5>
                  <iframe
                  className="embed-responsive-item "
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                      -11
                    )}`}
                    allowFullScreen
                    title={id}
                  />
                </div>
              ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
