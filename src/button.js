import { findButton } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function button(label) {
  const control = findButton(label);
  return buildAsserter(control, { label });
}
