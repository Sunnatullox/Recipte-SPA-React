import { useState } from "react";

export default function Search({ cb }) {
  const [value, setValue] = useState("");


  const handelKey = (e)=> {
    if(e.key === "Enter"){
      handleSubmit()
    }
  }

  const handleSubmit =()=> {
    cb(value);
  }

  return (
    <div className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        id="search"
        placeholder="Search"
        onKeyDown={handelKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
