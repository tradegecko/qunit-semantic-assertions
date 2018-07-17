import { findButton } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function button(label) {
  let control = findButton(label);
  return buildAsserter(control, { label });
}
