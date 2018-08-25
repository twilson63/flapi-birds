const test = require('tape')
const app = require('../server')
const request = require('supertest')
const { compose, prop, allPass } = require('ramda')

const validBird = { _id: 'eagle', type: 'bird', name: 'eagle' }
const invalidBird = { _id: 'beagle', type: 'dog', name: 'beagle' }

const ok = (assert, key) =>
  compose(
    assert.ok.bind(assert),
    prop(key),
    prop('body')
  )
const notOk = (assert, key) =>
  compose(
    assert.notOk.bind(assert),
    prop(key),
    prop('body')
  )
const equals = (assert, key, expected) => {
  const actualFn = compose(
    prop(key),
    prop('body')
  )
  return actual => assert.equals(actualFn(actual), expected)
}

test('POST valid bird doc to /birds endpoint', assert => {
  assert.plan(1)
  request(app)
    .post('/birds')
    .send(validBird)
    .then(ok(assert, 'ok'))
})

test('POST invalid bird doc to /birds endpoint', assert => {
  assert.plan(2)
  request(app)
    .post('/birds')
    .send(invalidBird)
    .then(response => {
      equals(assert, 'message', 'Invalid Type, it should be bird.')(response)
      return response
    })
    .then(response => {
      notOk(assert, 'ok')(response)
      return response
    })
})

test('GET birds from /birds endpoint', assert => {
  assert.plan(1)
  request(app)
    .get('/birds')
    .then(response => {
      assert.ok(response.body.length > 0)
    })
})

test('GET bird from /birds/eagle endpoint', assert => {
  assert.plan(1)
  request(app)
    .get('/birds/eagle')
    .then(response => {
      assert.same(response.body, { type: 'bird', _id: 'eagle', name: 'eagle' })
    })
})

test('PUT bird using /birds/eagle endpoint', assert => {
  assert.plan(1)
  request(app)
    .put('/birds/eagle')
    .send({
      type: 'bird',
      _id: 'eagle',
      name: 'eagle',
      description: 'Bald Eagle'
    })
    .then(response => {
      assert.ok(response.body.ok)
    })
})

test('REMOVE bird using /birds/eagle endpoint', assert => {
  assert.plan(1)
  request(app)
    .delete('/birds/eagle')
    .then(response => {
      assert.ok(response.ok)
    })
})
