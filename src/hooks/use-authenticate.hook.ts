export const useAuthenticate = () => {
    const token = localStorage.getItem('token');
    const is_authenticated = !!token;
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    return { token, is_authenticated, user, logout };
};
