import test from 'ava';

import { constitucion } from '.';

test('constitucion', (t) => {
  t.is(constitucion.capitulos.length, 11);
});
