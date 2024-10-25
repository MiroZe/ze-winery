import { useState } from "react";

export const useSearch = (initialState) => {

    const [searchValue, setSearchValue] = useState('')

  


    const filterByName = (item, value) => {
      console.log(item);
      
      return Object.keys(item).some(
        (key) =>
          key.includes("trademark") &&
          item[key] 
          && item[key].toString().toLowerCase().includes(value.toLowerCase())
      );
    };

    const filterByDigits = (item, value) => {
   
      
        return Object.keys(item).some(
          (key) =>
            
            
            (key.includes('additional') &&
            item[key] &&
            item[key].includes(value)))
            
        
      };
    
    const filteredSearch = () => {
      if (searchValue === "") {
        return initialState;
      } else if (!isNaN(searchValue)){
     
        return initialState.filter((x) => filterByDigits(x, searchValue));
      }
      else {
       
        
        return initialState.filter((x) => filterByName(x, searchValue));
      }
    }


    
 const updateSearchValue =(value) => {
   setSearchValue(value);
 }
    
    return { found: filteredSearch() , updateSearchValue,searchValue };
  };