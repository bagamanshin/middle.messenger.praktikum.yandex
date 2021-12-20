import { HTTP } from '../modules';

import { RequestResult } from '../types';
import errorHandler from '../utils/decorators/errorHandler';

const userAPIInstance = new HTTP('/resources');

class ResourcesAPI {
  @errorHandler
  request(path: string): Promise<RequestResult> {
    return userAPIInstance
      .get(`${path}`, { blob: true });
  }
}

export default new ResourcesAPI();
