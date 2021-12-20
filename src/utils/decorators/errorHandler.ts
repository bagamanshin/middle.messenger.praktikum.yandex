import { bus } from '../../modules';
import { RequestResult } from '../../types';

export default function errorHandler(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<any>
):
    TypedPropertyDescriptor<any> {
  const originalMethod = descriptor.value;

  // eslint-disable-next-line no-param-reassign
  descriptor.value = function fn(this: unknown, ...args: unknown[]) {
    return originalMethod
      .apply(this, args)
      .then((response: RequestResult) => {
        if (!response.ok) {
          bus.emit('notification-open', ({
            type: 'error',
            title: 'Response',
            text: JSON.parse(response.response.response).reason
          }));
        }
        return response;
      });
    // catch block - is redundant as a promise always resolves
  };
  return descriptor;
}
