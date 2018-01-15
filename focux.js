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
    if (target === node) return true
    return node.contains(target)
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
