import { Hello } from '../../services/index.js';

class HelloController {
  static hello(req, res) {
    res.json({
      message: Hello.sayHello()
    });
  }
}

export { HelloController };
