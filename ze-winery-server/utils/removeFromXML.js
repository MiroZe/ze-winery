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
    map(({ product: { _id, owner, __v, ...cleanedProduct },quantity}) => ({
        product: cleanedProduct,
        quantity
      }));
      

    return {
        ...xmlData,
        exciseGoods: cleanedExciseGoods
    };
};




module.exports = removeUnnecessaryFields;