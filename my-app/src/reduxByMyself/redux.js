//手写redux原理
const createStore = (reducer) => {
    let state;
    let listeners = [];
    let getState = () => state;

    let dispatch = action => {
        let state = reducer(state,action)
    }

    let subscribe = (lis) => {
        listeners.push(lis);
        return ()=>{
            listeners.filter(item => item !== lis)
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

export { createStore }