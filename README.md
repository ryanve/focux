# focux
detect [`:focus-within`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) for better UX

```
npm install focux
```

```js
const focux = require("focux")
```

## api

### `focux.within(element)`

- test if `element` matches `:focus-within` specification
- matches even without native `:focus-within` support
- `element` is a DOM element node
- `@return boolean`

```js
focux.within(element) // true || false
```

## compatibility

- [ES5+](https://caniuse.com/#feat=es5)
- uses [`Node.contains`](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains#Browser_compatibility)
