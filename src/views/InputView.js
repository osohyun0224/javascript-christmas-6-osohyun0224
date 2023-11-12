import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";
import VisitDateValidator from "../validate/VisitDateValidator";

const InputView = {
    async readDate() {
        while (true) {
            try {
                const visitDate = await Console.readLineAsync(GUIDE_MESSAGE.insertVisitDate);
                const validator = new VisitDateValidator(visitDate);
                validator.validateVisitDate();
                return parseInt(visitDate, 10);
            } catch (error) {
                Console.print(error.message);
            }
        }
    }
}

export default InputView;
