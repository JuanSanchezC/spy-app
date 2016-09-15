import { test } from 'qunit';
import moduleForAcceptance from 'spy-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | accessing site');

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("Nosotros")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contacto")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

