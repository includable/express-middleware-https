/*
 * Copyright 2018 Includable
 * Created by Thomas Schoffelen
 */

 module.exports = (mainDomain = null) => {
   return (req, res, next) => {
    if (req.method === 'POST' || req.method === 'DELETE') {
      return next() // don't ruin form submissions
    }
    if (req.headers['x-forwarded-proto'] === 'https') {
      return next() // already https
    }
    if (mainDomain && req.hostname.indexOf(mainDomain) < 0) {
      return next() // not on live domain name
    }

    res.redirect(`https://${req.hostname}${req.url}`)
   }
 }
