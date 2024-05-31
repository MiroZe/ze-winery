import _ from 'lodash'


export const debouncedFetchResults = _.debounce(async (query, clientSearch) => {
    try {
    const result = await clientSearch(query);
    return result;
   
    } catch (error) {
      console.error(error);
    }
  }, 3000); 