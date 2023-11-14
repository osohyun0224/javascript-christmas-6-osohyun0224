import ChristmasController from "./controller/ChristmasController";

class App {
    async run() {
        const eventController = new ChristmasController();
        await eventController.runWootecoEvent();
    }
}

export default App;
