import alert from './src/alert';
import button from './src/button';
import input from './src/input';
import modal from './src/modal';
import progress from './src/progress-bar';
import url from './src/url';

export default function(){
  QUnit.extend(QUnit.assert, {
    alert,
    button,
    input,
    get modal(){
      return modal(...arguments)
    },
    progress,
    url
  });

}
