import CatigeriesItem from "./CatigeriesItem";

export default function CatioriesList({catalog=[]}){

    return(
        <div className="card-group text-center justify-content-center m-5">
            {catalog.map(el => (<CatigeriesItem key={el.idCategory} {...el}/>))}
        </div>
    )
}