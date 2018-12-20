import { findControl } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function(label) {
  const control = findControl(label);
  return buildAsserter(control, { label });
}
