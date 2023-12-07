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

//Random images for PLACE
import r1 from "../../images/places/random1.jpg";
import r2 from "../../images/places/random2.jpg";
import r3 from "../../images/places/random3.jpg";
import r4 from "../../images/places/random4.jpg";
import r5 from "../../images/places/random5.jpg";
import r6 from "../../images/places/random6.jpg";
import r7 from "../../images/places/random7.jpg";
import r8 from "../../images/places/random8.jpeg";
import r9 from "../../images/places/random9.jpg";
import r10 from "../../images/places/random10.jpg";


export const images = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10];

export const temp = [{image: r4}];

export const alcoData = [
  { id: 1, name: "Пиво", strength: "light", included: true },
  { id: 2, name: "Шоти", strength: "light", included: true },
  { id: 3, name: "Shake", strength: "light", included: true },
  { id: 4, name: "Вино", strength: "light", included: true },
  { id: 5, name: "Сидр", strength: "light", included: true },
  { id: 6, name: "Джин Тонік", strength: "light", included: true },
  { id: 7, name: "Крепке пиво", strength: "light", included: true },
  { id: 8, name: "Ель", strength: "light", included: true },
  { id: 9, name: "Шейк", strength: "light", included: true },
  { id: 10, name: "Лїкер", strength: "light", included: true },
  { id: 11, name: "Джин", strength: "light", included: true },
  { id: 12, name: "Зубровка", strength: "hard", included: true },
  { id: 13, name: "Revo", strength: "light", included: true },
  { id: 14, name: "Самбука", strength: "hard", included: true },
  { id: 15, name: "Водка", strength: "hard", included: true },
  { id: 16, name: "Абсент", strength: "hard", included: true },
  { id: 17, name: "Віскі", strength: "hard", included: true },
  { id: 18, name: "Скотч", strength: "hard", included: true },
  { id: 19, name: "Самогон", strength: "hard", included: true },
  { id: 20, name: "Коньяк", strength: "hard", included: true },
  { id: 21, name: "Глінтвейн", strength: "light", included: true }
];

export const placesData = [
  { id: 1, place: "Борщагівка", image: borschagovka, music: musicBorschagovka, included: true},
  { id: 2, place: "Відрадний", image: vidredniy, music: musicVidradniy, included: true },
  { id: 3, place: "Вишневе", image: vyshneve, music: musicVyshnya, included: true },
  { id: 4, place: "Парк Совки", image: Sovki, music: musicTest, included: true },
  { id: 5, place: "Легенда ФК", image: FC, music: musicFc, included: true },
  { id: 6, place: "Портер", image: PorterAkadem, music: musicPorterAkademgorodok,  included: true},
  { id: 7, place: "Бар79", image: TayneMisce, music: musicTest, included: true },
  { id: 8, place: "Центр", image: Chreschatik, music: musicTest, included: true },
  { id: 9, place: "ГідроПарк", image: Gidropark, music: musicTest, included: true },
  { id: 10, place: "Поляна", image: Polyana, music: musicPolyana, included: true },
];
