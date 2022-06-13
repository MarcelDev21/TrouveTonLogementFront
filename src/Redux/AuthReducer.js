export const mesTypes = {
    login:"login",
    logout:"logout"
}


const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case mesTypes.login:
            return{
                ...state,
                payload:action.payload,
                logged:true
            }
            case mesTypes.logout:
                return{
                    logged: false
                }
        default:
            return state;
    }
}
export default AuthReducer


