import { findObject } from 'semantic-dom-selectors';
import buildAsserter from './assertions/index';

export default function(label) {
  let asserter;
  if (label) {
    //TODO: convert to findModal (in semantic dom selector)
    const control = findObject("[role='dialog']", label, 'modal');
    asserter = buildAsserter(control, { label });
  } else {
    asserter = QUnit.assert.dom('[role="dialog"]');
  }
  return asserter;
}
