export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user') as any);
    if (user && user.access_token) {
        return { Authorization: 'Bearer ' + user.access_token }
    }
    else {
        return {}
    }

}