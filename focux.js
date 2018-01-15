/** @preserve npm.im/focux */
!function(root, name, make) {
  if (typeof module != "undefined" && module.exports) module.exports = make()
  else root[name] = make()
}(this, "focux", function() {
  var api = {}

  function within(node) {
    var owner = node.ownerDocument
    var target = owner.activeElement
    if (target === owner || target === owner.body) return false
    if (!owner.querySelector(":focus")) return false
    return target === node || !!node.querySelector(":focus")
  }

  function define(key, value) {
    Object.defineProperty(api , key, {
      enumerable: true,
      value: value
    })
  }

  define("within", within)
  return api
});
