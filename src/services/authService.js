const authService = () => {
    const token = localStorage.getItem('token');
    if (!token) {
         return false;
    } else {
        return true;
    }
   
    
    // try {
    //     window.axios.post(process.env.REACT_APP_API_URL + '/api/users/is-logged-in', {
    //         token
    //     });
    //     return true;
    // } catch (err) {
    //     return false;
    // }
    
}

export default authService;