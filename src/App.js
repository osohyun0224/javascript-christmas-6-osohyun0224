import { Console } from "@woowacourse/mission-utils";
import InputView from "./views/InputView"
import OutputView from "./views/OutputView";

class App {

  async run() {
    OutputView.printIntroMessage();
    try {
        const visitDate = await InputView.readDate();
    } catch (error) {
        Console.print(error.message);
    }
  }
}

export default App;
