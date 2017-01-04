const url = require('url')

module.exports = (path) => {
  const parsed = url.parse(path, true)

  return parsed.pathname.split('/').reduce(({ obj, i }, part) => {
    if (!part) return { obj, i }
    obj[i++] = part
    return { obj, i }
  }, { obj: parsed.query, i: 0 }).obj
}
