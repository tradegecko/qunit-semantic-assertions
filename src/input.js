import { findControl } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function input(label) {
  let control = findControl(label);
  let asserter = buildAsserter(control, { label });
  return asserter;
}
