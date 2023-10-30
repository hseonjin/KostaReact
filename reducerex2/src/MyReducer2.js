export const initState = {
    id:'hong', nickname: 'gildong', subject: 'computer', grade:'1'
};

export const reducer = (state, action) => {
 switch (action.type) {
    case "CHANGE_ID": return { ...state, id: action.value }; // 현재 상태(state)를 복제하고 id값을 action으로 변경한다 (action 뒤에 붙는 type이나 value는 원하는 명칭으로 사용하면 된다) 여기서 value는 key임
    case "CHANGE_NICKNAME" :return {...state, nickname:action.value};
    case "CHANGE_SUBJECT" : return {...state, subject:action.value};
    case "CHANGE_GRADE": return {...state, grade:action.value};
    default: return state;


    // let new State;
    // switch(action.type) {
    //  case "ID": newState = {...state, id:action.payload}; break;
    // ...
    //  default: newState={...state};
    // } 이러한 형식으로 작성해도 무방
 }
}