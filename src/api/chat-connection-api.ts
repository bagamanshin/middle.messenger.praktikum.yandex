import { HTTP } from '../modules';

import { RequestResult } from '../types';
import errorHandler from '../utils/decorators/errorHandler';

const chatAPIInstance = new HTTP('/chats/token');

class ChatConnectionAPI {
  @errorHandler
  create(chatId: number): Promise<RequestResult> {
    return chatAPIInstance
      .post(`/${chatId}`);
  }
}

export default new ChatConnectionAPI();
