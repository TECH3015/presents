# Hello World

A presentation by [Fania](https://fania.eu).

---

## Images **absolute**
![alt](https://raw.githubusercontent.com/Fania/presents/master/imgs/technokitten.jpg)

---

## Code

```html
<!-- .element: class="stretch" -->
<!-- .slide: class="crammed" -->
```


## Code<sup>2</sup>

<pre><code class="hljs js" data-trim contenteditable>
function add( x, y ) {
    return x + y;
}

let val = add(3, 4);
console.log(val);
</code></pre>


## Code<sup>3</sup>

<pre><code class="hljs" data-line-numbers="4,8-11" contenteditable>
import React, { useState } from 'react';
 
function Example() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
</code></pre>


<iframe height="500" style="width: 100%;" scrolling="no" title="Very simple SVG Line Animation" src="https://codepen.io/faniae/embed/RwbBdye?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/faniae/pen/RwbBdye'>Very simple SVG Line Animation</a> by Fania Ra
  (<a href='https://codepen.io/faniae'>@faniae</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## Live Code Editor

<button class="btn"> Open </button>

---

<!-- .slide: data-background-image="https://raw.githubusercontent.com/Fania/presents/master/imgs/magicsquares.png" data-background-size="contain" -->
## Background Image 

**contain**


<!-- .slide: data-background-image="https://raw.githubusercontent.com/Fania/presents/master/imgs/magicsquares.png" -->
## Background Image<sup>2</sup> 

**cover** (default)


<!-- .slide: data-background="linear-gradient(45deg, #00637c 0%, #002b36 60%)" -->
## Background Gradient


<!-- .slide: data-background-iframe="https://daveeveritt.github.io/space-weather-words/" -->
## Background Iframe

---

## Goodbye

<3