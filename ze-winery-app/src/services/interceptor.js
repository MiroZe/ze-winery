const interceptor = async (method,url,data) => {
    const options = {credentials: 'include'};

    if (method !== 'GET') {
        options.method = method;
     

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    
    const result = await response.json();

 
   

    if (!response.ok) {
     
        throw result;
    }
   
    return result;
};

export const request =  {
     
        get: interceptor.bind(null, 'GET'),
        post: interceptor.bind(null, 'POST'),
        put: interceptor.bind(null, 'PUT'),
        patch: interceptor.bind(null, 'PATCH'),
        delete: interceptor.bind(null, 'DELETE'),
    
};