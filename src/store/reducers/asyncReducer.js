const initialState = {
    isFetching: false, //非同期通信中はtrue
    data: {}　//データをオブジェクトに格納
};

export default function asyncReducer (state = initialState, action){
    switch (action.type) {

        case 'REQUEST_ASYNC_TYPE':
            return {
                ...state,
                isFetching: true
            };

        case 'RECIVE_ASYNC_TYPE':
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
    
        default:
            return state;
    };
};