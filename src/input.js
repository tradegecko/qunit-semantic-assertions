import { findControl } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function input(label) {
  const control = findControl(label);
  const asserter = buildAsserter(control, { label });

  return asserter;
}
