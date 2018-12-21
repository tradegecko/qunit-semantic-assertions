import { findObject } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function(label) {
  const control = findObject("[role='alert']", label, 'alert');
  return buildAsserter(control, { label });
}
