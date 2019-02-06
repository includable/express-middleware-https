# middleware-https

Simple force HTTPS redirect middleware, meant for use behind a proxy (e.g. Heroku).

## Installation

```sh
npm i @includable/middleware-https
```

## Usage

```js
const express = require('express')
const https = require('@includable/middleware-https')

app.use(https('example.com')) // leave out parameter to apply to all domains

app.listen(process.env.PORT || 3000, () => console.log(`Example app running.`))
```
