//reducer是redux的自定义处理器，传参是旧state对象和action，返回的是新state对象
import {
    INCREASE,
    DECREASE,
} from './actions';

const initialState = {
    number: 0,
    list: ['初始内容...']
};
function reducer(state = initialState, action) {
    // console.log(action);
    switch (action.type) {
        case INCREASE:
            return { number: state.number + action.amount }
        case DECREASE:
            return { number: state.number - action.amount }
        case 'plus':
            return { number: state.number + action.act }
        case 'minus':
            return { number: state.number - action.act }
        case 'addtodo':
            let ll = [...state.list];
            ll.unshift(action.act);
            // console.log(ll);
            // console.log(typeof ll);
            // console.log(typeof(typeof ll));
            // console.log(ll instanceof Array);
            return Object.assign({}, state, { list: ll })
        default:
            return state;
    }
}

export default reducer;
