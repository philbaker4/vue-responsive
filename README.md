# vue-responsive

A template repository for developing Typescript packages.


### Installation
```bash
$ npm install vue-responsive
```


### Setup
```js
// in file with root vue initialization - typically main.js / main.ts
import { ResponsivePlugin } from 'vue-responsive';

const minSizeBreakpoints = {
  smLower: 640,
  mdLower: 768,
  lgLower: 1024,
  xlLower: 1480,
  xxlLower: 1500,
}

Vue.use(ResponsivePlugin, minSizeBreakpoints)
```

### Usage 
```js
// access screensize or computed properties via this.$responsive
console.log(this.$responsive.screenSize)
```

#### Available Methods 
- ```widthAbove(n)```
- ```widthBelow(n)```
- ```widthAboveOrEqualTo(n)```
- ```widthBelowOrEqualTo(n)```

#### Available Computed Properties
- ```screenSize```
- ```smAndUp```
- ```mdAndUp```
- ```lgAndUp```
- ```xlAndUp```
- ```smAndDown```
- ```mdAndDown```
- ```xlAndDown```
- ```xsOnly```
- ```smOnly```
- ```mdOnly```
- ```lgOnly```
- ```xlOnly```
- ```xxlOnly```

