import test from 'tape'
import map from '../src/map'

test('map function should add 1 to each number', t => {
  t.same(map(v => v + 1, [1, 2, 3]), [2, 3, 4])
})
