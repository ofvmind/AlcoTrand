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
  { id: 1, name: "Пиво", strength: "light" },
  { id: 2, name: "Шоти", strength: "light" },
  { id: 3, name: "Shake", strength: "light" },
  { id: 4, name: "Вино", strength: "light" },
  { id: 5, name: "Сидр", strength: "light" },
  { id: 6, name: "Джин Тонік", strength: "light" },
  { id: 7, name: "Крепе пиво", strength: "light" },
  { id: 8, name: "Ель", strength: "light" },
  { id: 9, name: "Шейк", strength: "light" },
  { id: 10, name: "Лїкер", strength: "light" },
  { id: 11, name: "Джин", strength: "light" },
  { id: 12, name: "Зубровка", strength: "hard" },
  { id: 13, name: "Revo", strength: "hard" },
  { id: 14, name: "Самбука", strength: "hard" },
  { id: 15, name: "Водка", strength: "hard" },
  { id: 16, name: "Абсент", strength: "hard" },
  { id: 17, name: "Віскі", strength: "hard" },
  { id: 18, name: "Скотч", strength: "hard" },
  { id: 19, name: "Самогон", strength: "hard" },
  { id: 20, name: "Коньяк", strength: "hard" },
];

export const places = [
  { id: 1, place: "Борщагівка", image: borschagovka, music: musicBorschagovka },
  { id: 2, place: "Відрадний", image: vidredniy, music: musicVidradniy },
  { id: 3, place: "Вишневе", image: vyshneve, music: musicVyshnya },
  { id: 4, place: "Парк Совки", image: Sovki, music: musicTest },
  { id: 5, place: "Легенда ФК", image: FC, music: musicFc },
  { id: 6, place: "Портер", image: PorterAkadem, music: musicPorterAkademgorodok,},
  { id: 7, place: "Бар79", image: TayneMisce, music: musicTest },
  { id: 8, place: "Центр", image: Chreschatik, music: musicTest },
  { id: 9, place: "ГідроПарк", image: Gidropark, music: musicTest },
  { id: 10, place: "Поляна", image: Polyana, music: musicPolyana },
];
