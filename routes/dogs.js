const express = require('express')
const app = express()

app.post('/', (req, res) => {
  res.status(501).send({ ok: false, message: 'Not Implemented' })
})

app.get('/', (req, res) => {
  res.status(501).send({ ok: false, message: 'Not Implemented' })
})

app.put('/:id', (req, res) => {
  res.send({ ok: false, message: 'Not Implemented' })
})

app.get('/:id', (req, res) => {
  res.send({ ok: false, message: 'Not Implemented' })
})

app.delete('/:id', (req, res) => {
  res.send({ ok: false, message: 'Not Implemented' })
})

module.exports = app
