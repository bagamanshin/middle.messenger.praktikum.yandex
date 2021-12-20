import { HTTP } from '../modules';

import { ChangePasswordRequest, RequestResult } from '../types';
import errorHandler from '../utils/decorators/errorHandler';

const userPasswordAPIInstance = new HTTP('/user/password');

class UserPasswordAPI {
  @errorHandler
  update(data: ChangePasswordRequest): Promise<RequestResult> {
    return userPasswordAPIInstance.put('/', {
      data
    });
  }
}

export default new UserPasswordAPI();
