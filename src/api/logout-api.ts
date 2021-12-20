import { HTTP } from '../modules';
import errorHandler from '../utils/decorators/errorHandler';

const logoutAPIInstance = new HTTP('/auth');

class LogoutAPI {
  @errorHandler
  request() {
    return logoutAPIInstance.post('/logout');
  }
}

export default new LogoutAPI();
