// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)

console.log('ok2 ----------------------------------------------------------------')
console.log(req)

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  console.log('ok ----------------------------------------------------------------')
  console.log(componentName)
  module.exports[componentName] = req(key).default
})