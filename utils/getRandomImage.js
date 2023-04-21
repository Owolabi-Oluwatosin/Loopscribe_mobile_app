import dev from '../assets/icons/dev.png';
import science from '../assets/icons/science.jpg';
import celebrity from '../assets/icons/celebrity.png';
import food from '../assets/icons/food.jpg';
import history from '../assets/icons/history.jpg';
import money from '../assets/icons/money.png';
import travel from '../assets/icons/travel.jpg';
import sport from '../assets/icons/sport.png';
import religion from '../assets/icons/religion.png';
import political from '../assets/icons/political.png';
import music from '../assets/icons/music.png';
import movie from '../assets/icons/movie.png';
import explicit from '../assets/icons/explicit.png';
import fashion from '../assets/icons/fashion.png';
import career from '../assets/icons/career.png';
import animal from '../assets/icons/animal.png';

const getRandomImage = (category) => {
  const image = category === 'animal' ? animal : category === 'career' ? career : category === 'fashion' ? fashion :
  category === 'explicit' ? explicit : category === 'movie' ? movie : category === 'music' ? music : 
  category === 'political' ? political : category === 'religion' ? religion : category === 'sport' ? sport : 
  category === 'travel' ? travel : category === 'money' ? money : category === 'history' ? history :
  category === 'food' ? food : category === 'celebrity' ? celebrity : category === 'science' ? science :
  category === 'dev' && dev
  return image;
}

export default getRandomImage;