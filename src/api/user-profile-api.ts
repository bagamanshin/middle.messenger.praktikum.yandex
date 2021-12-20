import { HTTP } from '../modules';

import { RequestResult, UserRequest } from '../types';
import errorHandler from '../utils/decorators/errorHandler';

const userProfileAPIInstance = new HTTP('/user/profile');

class UserProfileAPI {
  @errorHandler
  update(data: UserRequest): Promise<RequestResult> {
    return userProfileAPIInstance.put('/', {
      data
    });
  }
}

export default new UserProfileAPI();
