export function validateUsername(username) {
    return username.length > 0;
}

export function validatePassword(password) {
    return password.length > 0;
}

//can use fetch to make API calls. Here response is mocked as we do not have authentication system built in.
 export function authenticateUser(name,password){
        if(name === 'Username' && password === 'Password'){
            return { message : 'Welcome to Carrefour. Happy shopping!!', status : '200' }
        } else return { message : 'Authorization failed!! Signin again.', status : '401' }
}