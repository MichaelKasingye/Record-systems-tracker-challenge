export const initialState = {
    contact:[],
    district: null,
    courses:null,
};
console.log(initialState.contact);
//SEARCH
export const actionTypes = {
    SET_COURSES:"SET_COURSES", 
};

//REDUCER
 function reducer(state,action){
    //  console.log(action.courses);
     console.log(state);

    switch (action.type) {
        case 'SET_DISTRICT':
            return {
                ...state,
                district: action.district
            };
        case actionTypes.SET_COURSES:
            return{
                ...state,
                courses: action.courses,
            };
        case 'ADD_TO_CONTACTS':
            //Login to add to contacts
            return {
                ...state,
                contact:action.contact
            };
           
        default:
            return state;
    }
};


export default reducer;