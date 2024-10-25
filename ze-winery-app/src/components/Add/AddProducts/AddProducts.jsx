import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyProducts } from "../../../services/productService";
import SearchBar from "../../SearchBar/SearchBar";
import { useSearch } from "../../../hooks/useSearch";



const AddProducts = () => {

    const { companyId } = useParams();
    const [products, setProducts] = useState([]);
    const {found, updateSearchValue, searchValue} = useSearch(products);

    useEffect(() => {

        getCompanyProducts(companyId)
          .then(setProducts)
          .catch(err => console.log(err))
    
    
      }, [companyId])



      return (
      
        <div >
          
        <SearchBar updateSearchValue={updateSearchValue} searchValue={searchValue} />
        <ul>
            {found.map(f => 
            <li key={f._id}>
                <span>{f.trademark}</span>
                <span>   {f.additionalCode}</span>
            </li>)}
        </ul>
        
        </div>

      )

}

export default AddProducts;