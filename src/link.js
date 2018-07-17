export default function link(label) {
  let asserter = QUnit.assert.button(label);
  asserter.href = function(link) {
    this.hasAttribute('href', link);
  };
  return asserter;
}
