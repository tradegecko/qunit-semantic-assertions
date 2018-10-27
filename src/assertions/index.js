function assertExistance(asserter, elementDescriptor, truthyness, message) {
  const expectedWording = truthyness ? 'exists' : 'does not exist';
  const defaultMessage = `Element "${elementDescriptor}" ${expectedWording}".`;
  const exists = !!asserter.target;
  asserter.pushResult({
    result: exists === truthyness,
    exists,
    expected: truthyness,
    message: message || defaultMessage,
  });
}

function buildExists(asserter, elementDescriptor) {
  return (message) => {
    assertExistance(asserter, elementDescriptor, true, message);
  };
}

function buildDoesNotExist(asserter, elementDescriptor) {
  return (message) => {
    assertExistance(asserter, elementDescriptor, false, message);
  };
}

export default function buildAsserter(control, { label } = {}) {
  if (control) {
    let controlID = null;
    if (control.attributes.id) {
      controlID = control.attributes.id.value;
    }

    const asserter = QUnit.assert.dom(controlID ? `#${controlID}` : control);
    Object.defineProperty(asserter, 'targetDescription', {
      value: label ? `"${label}"` : `"${controlID}"`,
    });

    if (!controlID) {
      asserter.exists = buildExists(asserter, label);
      asserter.doesNotExist = buildDoesNotExist(asserter, label);
    }

    return asserter;
  }
  // qunit dom doesn't handle undefined well
  const weirdSelector = label ? label.replace(/[^\w _]+/ig, '').replace(/\b[\d]+/g, '') : 'that you requested';
  return QUnit.assert.dom(weirdSelector);
}
