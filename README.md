# Semantic DOM Assertions for QUnit
Make DOM Assertions for [QUnit](https://qunitjs.com/) semantically.

eg: 
```js
QUnit.test ("Continue button is on page", function (assert) {
  assert.button('Continue').exists();
});
```

## Installation
`npm i qunit-semantic-assertions`

## Development
```bash
git clone https://github.com/tradegecko/qunit-semantic-assertions.git
cd qunit-semantic-assertions && yarn
```

## Testing
Refer to the `test/index.html` file and open it in your browser.
