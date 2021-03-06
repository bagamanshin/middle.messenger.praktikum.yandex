export class EventBus {
  listeners = {} as Record<string, Function[]>;

  on(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: Function) => listener !== callback
    );
  }

  emit(event: string, ...args: any): Error | void {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener: Function) => listener(...args));
    }
  }

  reset(event: string) {
    this.listeners[event] = [];
  }
}

export default new EventBus();
