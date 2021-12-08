import {Link} from "react-router-dom"

export default function CatigeriesItem(props){
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription}= props;
    return(
        <div>
        <div className="card  m-lg-2 d-flex flex-column" style={{width:"18rem"}}>
        <img className="card-img-top" src={strCategoryThumb} alt={strCategory} />
        <div className="card-body">
          <h5 className="card-title">{strCategory}</h5>
          <p className="card-text">{strCategoryDescription.slice(0,60)}...</p>
        </div>
          <div className="card-footer">
          <Link to={`/category/${strCategory}`} className="btn btn-primary">Watch Category</Link>
          </div>
      </div>
        </div>
    )
}