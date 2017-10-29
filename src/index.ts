import 'normalize.css';
import './styles/prismjs.hopscotch.css';

import screen, { Flavor } from './screen';
import print from 'spectacle/lib/themes/default/print';

const createTheme = (flavor: Flavor = 'dark', custom = {}) => ({
  screen: screen(flavor, custom),
  print: print()
});

export default createTheme;
