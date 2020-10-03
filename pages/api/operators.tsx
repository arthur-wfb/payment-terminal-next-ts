import {NextApiRequest, NextApiResponse} from "next";
import {IOperator} from "../../interfaces/IOperator";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200

  let operators: IOperator[];
  if (Math.random() >= 0.1){
    operators = [
      {
        id: 0,
        name: 'МТС',
        iconSrc: 'https://www.protarif.info/images/sladeshow/mts.png',
        iconAlt: 'mts_logo'
      },
      {
        id: 1,
        name: 'Билайн',
        iconSrc: 'https://www.protarif.info/images/sladeshow/beeline.png',
        iconAlt: 'beeline_logo'
      },
      {
        id: 3,
        name: 'Теле2',
        iconSrc: 'https://www.protarif.info/images/sladeshow/tele2.png',
        iconAlt: 'tele2_logo'
      },
      {
        id: 2,
        name: 'Мегафон Москва',
        iconSrc: 'https://www.protarif.info/images/sladeshow/megafon.png',
        iconAlt: 'megaphone_logo'
      },
      {
        id: 4,
        name: 'Мегафон Дальний восток',
        iconSrc: 'https://www.protarif.info/images/sladeshow/megafon.png',
        iconAlt: 'beeline_logo'
      },
      {
        id: 5,
        name: 'Мегафон Сибирь',
        iconSrc: 'https://www.protarif.info/images/sladeshow/megafon.png',
        iconAlt: 'megaphone_logo'
      },
    ]
  } else {
    operators = null
  }
  setTimeout(() => {
    res.json({
      operators: operators
    })
  }, 500);
}
