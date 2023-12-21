const requester = async (method,url,data) => {
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
     
        get: requester.bind(null, 'GET'),
        post: requester.bind(null, 'POST'),
        put: requester.bind(null, 'PUT'),
        patch: requester.bind(null, 'PATCH'),
        delete: requester.bind(null, 'DELETE'),
    
};