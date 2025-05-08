import {ax} from '../lib/axios'; 

export function getTask () { 
    return ax
    .get('/api/task')
    .then((res)=>{
        return(res.data); 
    })
    .catch((error)=> { 
        console.log("Error",error); 
        return null; 
    })
}

export function getTaksID (id) {
    return ax 
    .get(`/api/task/${id}`)
    .then((resp)=>{ 
        return resp.data;
    })
    .catch((error)=>{ 
        console.log('Error',error);
        return null; 
    })
}

export function postTask(text) { 
    console.log(text)
    return ax
    .post("/api/task",{ 
        title: text
    })
    .then((resp)=> { 
        console.log('Respuesta',resp)
        return resp.data; 
    })
    .catch((error)=> { 
        console.log('ERROR',error);
        return null; 
    })
}

export function putTask(id, text){
    console.log(`${id} ${text}`);

    return ax
    .put(`/api/task/${id}`,{
        title: text
    })
    .then((resp)=> { 
        console.log('Respuesta',resp)
        return resp.data; 
    })
    .catch((error)=> { 
        console.log('ERROR',error);
        return null; 
    })
}

export function deleteTask(id){
    console.log(`${id}`);

    return ax
    .delete(`/api/task/${id}`)
    .then((resp)=> { 
        console.log('Respuesta',resp)
        return resp.data; 
    })
    .catch((error)=> { 
        console.log('ERROR',error);
        return null; 
    })
}

export function search(text) { 
    console.log(text); 

    return ax
    .get(`api/task/titulo/${text}`)
    .then((resp)=> { 
        console.log('Respuesta',resp)
        return resp.data; 
    })
    .catch((error)=> { 
        console.log('ERROR',error);
        return null; 
    })

}
