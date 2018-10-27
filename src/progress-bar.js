import { findObject } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function progress(label) {
  const control = findObject("[role='progressbar']", label);
  const asserter = buildAsserter(control, { label });
  asserter.valueNow = function (value) {
    this.hasAttribute('aria-valuenow', `${value}`);
  };
  return asserter;
}
