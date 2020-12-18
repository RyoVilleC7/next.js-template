function requestAsync (){
    return {
        type: 'REQUEST_ASYNC_TYPE'
    }
}

function receiveAsync (payload){
    console.log(payload)
    return {
        type: 'RECIVE_ASYNC_TYPE',
        payload
    }
}

export const asyncContents = () =>{
    return (dispatch)=>{
        dispatch(requestAsync());

        setTimeout(() => {
            return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(data => dispatch(receiveAsync(data)))
        }, 1000);
    }
}