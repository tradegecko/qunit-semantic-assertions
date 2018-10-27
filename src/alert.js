import { findObject } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

QUnit.extend(QUnit.assert, {
  // eslint-disable-next-line no-unused-vars
  alert(label) {

  },
});

export default function button(label) {
  const control = findObject("[role='alert']", label, 'alert');
  return buildAsserter(control, { label });
}
