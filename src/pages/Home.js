import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import CatioriesList from "../components/CatioriesList";
import Loader from "../components/Loader";
import Header from "../components/Header";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filterCatalog, setFilterCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str) => {
    setFilterCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
            setFilterCatalog( search ?
                data.categories.filter((item) =>
                item.strCategory
                    .toLowerCase()
                    .includes(search.split("=")[1].toLowerCase())
                ): data.categories
      );
    });
  }, [search]);

  return (
    <>
      {!catalog.length ? <Loader /> : <CatioriesList catalog={filterCatalog} />}
      <div className="d-block">
        <Header handleSearch={handleSearch} />
      </div>
    </>
  );
}
