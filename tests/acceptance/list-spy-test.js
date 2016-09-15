import { test } from 'qunit';
import moduleForAcceptance from 'spy-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list spy');

test('should redirect to spies route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/spies', 'should redirect automatically');
  });
});

test('should list available spies.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

