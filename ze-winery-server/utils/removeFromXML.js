const removeUnnecessaryFields = (data) => {
    const {
        _id,
        month,
        year,
        createdAt,
        ownerCompanyId,
        __v,
        exciseGoods,
      

        ...xmlData
    } = data;

    

    const cleanedExciseGoods = exciseGoods.
    map(({ exciseGood: { _id, owner, __v, ...cleanedProduct },sequenceNumber,quantityOfGoods,numberOfPackages}) => ({
        exciseGood: {...cleanedProduct,sequenceNumber,quantityOfGoods,numberOfPackages}
        
      }));
      

    return {
        ...xmlData,
        exciseGoods: cleanedExciseGoods
    };
};




module.exports = removeUnnecessaryFields;