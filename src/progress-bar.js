import { findObject } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function progress(label) {
  let control = findObject(`[role='progressbar']`, label);
  let asserter = buildAsserter(control, { label });
  asserter.valueNow = function(value) {
    this.hasAttribute('aria-valuenow', '' + value);
  };
  return asserter;
}
