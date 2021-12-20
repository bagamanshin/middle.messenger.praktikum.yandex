import { HTTP } from '../modules';

import { RequestResult, ChangeUserAvatarRequest } from '../types';
import errorHandler from '../utils/decorators/errorHandler';

const userAvatarAPIInstance = new HTTP('/user/profile/avatar');

class UserAvatarAPI {
  @errorHandler
  update(payload: ChangeUserAvatarRequest): Promise<RequestResult> {
    const { avatar } = payload;

    const data = new FormData();
    data.append('avatar', avatar);

    return userAvatarAPIInstance.put('/', {
      data,
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
  }
}

export default new UserAvatarAPI();
