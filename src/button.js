import { findButton } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function(label) {
  const control = findButton(label);
  return buildAsserter(control, { label });
}
