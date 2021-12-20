import { HTTP } from '../modules';

import { RequestResult } from '../types';
import errorHandler from '../utils/decorators/errorHandler';

const chatNewMessageAPIInstance = new HTTP('/chats/new');

class ChatNewMessagesAPI {
  @errorHandler
  request(chatId: number): Promise<RequestResult> {
    return chatNewMessageAPIInstance
      .get(`/${chatId}`);
  }
}

export default new ChatNewMessagesAPI();
