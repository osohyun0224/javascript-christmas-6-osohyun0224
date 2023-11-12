import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";

const OutputView = {
    printIntroMessage() {
    Console.print(GUIDE_MESSAGE.intro);
    }
}

export default OutputView;
