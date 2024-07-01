
const {goodsOrder} = require('../constants/declarationOrderExample')
function reorderProperties(obj, order) {
  const orderedObj = {};

  order.forEach(key => {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        // Handle nested objects
        orderedObj[key] = reorderProperties(obj[key], order);
      } else if (Array.isArray(obj[key])) {
        // Handle arrays
        if (key === 'ExciseGoods') {
          
          orderedObj[key] = reorderExciseGoods(obj[key], goodsOrder);
        } else {
          orderedObj[key] = obj[key];
        }
      } else {
        // Handle primitive values
        orderedObj[key] = obj[key];
      }
    }
  });

  // Add any remaining properties not in the order array
  Object.keys(obj).forEach(key => {
    if (!orderedObj.hasOwnProperty(key)) {
      orderedObj[key] = obj[key];
    }
  });

  return orderedObj;
}


function reorderExciseGoods(exciseGoods, order) {
  const reorderedExciseGoods = exciseGoods.map(exciseGood => {
    const reorderedExciseGood = {};

    order.forEach(key => {
      
      if (exciseGood.ExciseGood.hasOwnProperty(key)) {
        
        reorderedExciseGood[key] = exciseGood.ExciseGood[key];
      }
    });

   
    return reorderedExciseGood;
  });
  
  
  

  return reorderedExciseGoods;
}


  module.exports = reorderProperties;