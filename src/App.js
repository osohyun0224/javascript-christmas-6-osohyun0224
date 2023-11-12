import InputView from "./views/InputView";
import OutputView from "./views/OutputView";

class App {
  async run() {
    OutputView.printIntroMessage();
    const visitDate = await InputView.readDate();
  }
}

export default App;