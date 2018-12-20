import { currentURL } from '@ember/test-helpers';

export default function(url, message) {
  return QUnit.assert.equal(
    currentURL(),
    url,
    message || `URL should be ${url}.`
  );
}
