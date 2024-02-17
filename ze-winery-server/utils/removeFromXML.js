const removeUnnecessaryFields = (data) => {
    const { _id,month,year,createdAt,ownerCompanyId,__v, ...xmlData } = data;
    return xmlData
}


module.exports = removeUnnecessaryFields;