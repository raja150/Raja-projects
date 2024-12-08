class SessionStorage {
    getUser() {
        return sessionStorage.getItem('user') == 'admin';
    }
}
export default new SessionStorage()