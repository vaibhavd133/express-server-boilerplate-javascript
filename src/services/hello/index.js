import { data } from '../../subgraphs/index.js';

class Hello {
  static sayHello() {
    return data.data;
  }
}

export { Hello };
