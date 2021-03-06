import alert from './src/alert';
import button from './src/button';
import definitionList from './src/definition-list';
import input from './src/input';
import link from './src/link';
import modal from './src/modal';
import progress from './src/progress-bar';

export default function(){
  QUnit.extend(QUnit.assert, {
    alert,
    button,
    definitionList,
    input,
    link,
    get modal(){
      return modal(...arguments)
    },
    progress
  });

}
