import { HTTP } from '../modules';

import { LoginRequest, RegisterRequest, RequestResult } from '../types';
import errorHandler from '../utils/decorators/errorHandler';

const authAPIInstance = new HTTP('/auth');

class AuthAPI {
  @errorHandler
  create(user: RegisterRequest): Promise<RequestResult> {
    return authAPIInstance.post('/signup', { data: user });
  }

  @errorHandler
  request(user: LoginRequest): Promise<RequestResult> {
    return authAPIInstance.post('/signin', { data: user });
  }

  @errorHandler
  logout() {
    return authAPIInstance.post('/logout');
  }
}

export default new AuthAPI();
