export default function link(label) {
  const asserter = QUnit.assert.button(label);
  asserter.href = function (link) {
    this.hasAttribute('href', link);
  };

  return asserter;
}
