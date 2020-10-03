import {NextApiRequest, NextApiResponse} from "next";
import {Status} from "../../constants/Status";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200

    let result: string;
    if (Math.random() >= 0.5) {
        result = Status.Success
    } else {
        result = undefined
    }
    res.json({
        result: result
    })
}
