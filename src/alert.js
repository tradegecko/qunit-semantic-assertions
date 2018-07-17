import { findObject } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

QUnit.extend(QUnit.assert, {
  alert(label) {

  },
});

export default function button(label) {
  let control = findObject(`[role='alert']`, label, 'alert');
  return buildAsserter(control, { label });
}
