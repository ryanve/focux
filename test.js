if (typeof document == "undefined") {
  const assert = require("assert")
  const focux = require("./")
  assert.strictEqual(typeof focux.within, "function")
  console.log("focux.js loads okay in node. Open index.html to test in browser.")
  console.log()
} else {
  const some = [].some
  const live = document.getElementsByTagName("*")
  const focux = window.focux

  const report = function() {
    some.call(live, function(node) {
      node.classList.toggle("focux-within", focux.within(node))
    })
    const data = {}
    const focus = document.querySelector(":focus")
    data.focus = focus ? focus.nodeName : 0
    data.target = document.activeElement.nodeName
    data.native = document.querySelectorAll(":focus-within").length
    data.module = document.querySelectorAll(".focux-within").length
    data.stamp = Date.now()
    some.call(document.querySelectorAll("[data-report]"), function(node) {
      const type = node.dataset.report
      data.hasOwnProperty(type) || console.warn("No reporter for:", type)
      node.textContent = data[type]
    })
  }

  // useCapture=true so that stopPropagation within has no effect
  document.addEventListener("focus", report, true)
  document.addEventListener("blur", report, true)
  report()
}
