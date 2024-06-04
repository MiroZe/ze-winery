import _ from 'lodash'


export const debouncedFetchResults = _.debounce(async (query,id, clientSearch) => {
    try {
    const result = await clientSearch(query,id);
    return result;
   
    } catch (error) {
      console.error(error);
    }
  }, 100); 