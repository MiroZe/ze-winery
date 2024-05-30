
const {goodsOrder} = require('../constants/declarationOrderExample')

  function reorderProperties(obj, order) {

  

    const orderedObj = {};

    // First, add existing properties in the specified order
    order.forEach(key => {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          // Handle nested objects and preserve property order
          orderedObj[key] = reorderProperties(obj[key], order); // Pass the same order for nested objects
        } else if (Array.isArray(obj[key])){
          orderedObj[key] = reorderExciseGoods(obj[key], goodsOrder)
        } else {
          // Handle primitive values or arrays
          orderedObj[key] = obj[key];
        }
      }
    });
  
    return orderedObj;
  }

  function reorderExciseGoods(exciseGoods, order) {
    return exciseGoods.map(exciseGood => {
      const reorderedExciseGood = {};
  
      // Iterate through order array to maintain order
      order.forEach(key => {
        // Copy the property if it exists in the ExciseGood object
        if (exciseGood.hasOwnProperty('ExciseGood') && exciseGood.ExciseGood.hasOwnProperty(key)) {
          reorderedExciseGood[key] = exciseGood.ExciseGood[key];
        }
      });
  
      return { ExciseGood: reorderedExciseGood }; // Wrap reordered object in ExciseGood key
    });
  }
  

  
  
  module.exports = reorderProperties;