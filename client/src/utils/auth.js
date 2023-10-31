import decode from 'jwt-decode';


class AuthService {

  getUser() {
    try {
      const token = this.getToken();
      if (token) {
        return decode(token);
      }
      return null;
    } catch (err) {
      console.error("Failed to decode the token", err);
      return null;
    }
  }
  

  loggedIn() {

    const token = this.getToken();

    return !!token && !this.isTokenExpired(token);
  }

  getToken() {

    return localStorage.getItem('id_token');
  }

  login(idToken, userId) {
    localStorage.setItem('id_token', idToken);
    window.location.assign(`/SellerDashboard/${userId}`);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);

      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log('Expired check failed! Line 44: ', err);
      return true;
    }
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
