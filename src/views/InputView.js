import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";

const InputView = {
    async readDate() {
        Console.print(GUIDE_MESSAGE.insertVisitDate);
        const visitDate = await Console.readLineAsync();
    }
}

export default InputView;
