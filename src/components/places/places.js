//Місця
import borschagovka from "../../images/places/borschagovka.jpg";
import vidredniy from "../../images/places/otradniy.jpg";
import vyshneve from "../../images/places/vyshneve.jpg";
import FC from "../../images/places/FC.jpg";
import Chreschatik from "../../images/places/Chreschatik.jpg";
import Sovki from "../../images/places/SquareSovki.jpg";
import Gidropark from "../../images/places/Gidropark.png";
import Polyana from "../../images/places/Polyana.jpeg";
import TayneMisce from "../../images/places/BarVernadskogo79.jpg";
import PorterAkadem from "../../images/places/PorterAkademgorodok.jpg";

//Музика
import musicTest from "../../music/places/test.mp3";
import musicBorschagovka from "../../music/places/Borschagovka.mp3";
import musicVyshnya from "../../music/places/Vyshnya.mp3";
import musicFc from "../../music/places/fc.mp3";
import musicVidradniy from "../../music/places/Vidradniy.mp3";
import musicPorterAkademgorodok from "../../music/places/PorterAkadem.mp3";
import musicPolyana from "../../music/places/Polyana.mp3";

export const alco = [
  "Пиво",
  "Шоти",
  "Shake",
  "Вино",
  "Сидр",
  "Джин Тоник",
  'Крепкое пиво',
  "Ель",
  "Шейк",
  'Ликер',
  "Джин",
  "Зубровка", 
  "Revo",
  "Самбука",
  "Водка", 
  "Абсент",
  "Віскі",
  "Скотч",
  "Самогон",
  "Коньяк", 
]

export const drinkSets_heavy = [
  "Джин",
  "Самбука",
  "Водка", 
  "Коньяк", 
  "Зубровка", 
  "Абсент",
  "Віскі",
  "Скотч",
  "Самогон"
];

export const drinkSets_light = [
  "Пиво",
  "Шоти",
  "Revo",
  "Shake",
  "Вино",
  "Сидр",
  "Ель"
];

export const places = [
  { id: 1, place: "Борщагівка", image: borschagovka, music: musicBorschagovka },
  { id: 2, place: "Відрадний", image: vidredniy, music: musicVidradniy },
  { id: 3, place: "Вишневе", image: vyshneve, music: musicVyshnya },
  { id: 4, place: "Парк Совки", image: Sovki, music: musicTest },
  { id: 5, place: "Легенда ФК", image: FC, music: musicFc },
  { id: 6, place: "Портер", image: PorterAkadem, music: musicPorterAkademgorodok },
  { id: 7, place: "Бар79", image: TayneMisce, music: musicTest },
  { id: 8, place: "Центр", image: Chreschatik, music: musicTest },
  { id: 9, place: "ГідроПарк", image: Gidropark, music: musicTest },
  { id: 10, place: "Поляна", image: Polyana, music: musicPolyana },
];
