import express from 'express'
//const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(201).json({
    ok: true,
    msg:'OK token en la peticion'
  });

  res.json({
    ok: true,
    msg: "todo salio bien",
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})