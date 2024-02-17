function capitalizeKeys(obj) {
    if (Array.isArray(obj)) {
        
        return obj.map(item => capitalizeKeys(item));
    } else if (typeof obj === 'object' && obj !== null) {
       
        const newObj = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
                const value = obj[key];
                newObj[capitalizedKey] = capitalizeKeys(value);
            }
        }
        return newObj;
    } else {
        
        return obj;
    }
}



module.exports = capitalizeKeys;