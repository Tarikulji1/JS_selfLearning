/*
document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM learning on Chai aur Code​</h1>​
document.getElementById('title').id
'title'
document.getElementById('title').class
undefined
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute
ƒ getAttribute() { [native code] }
document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').setAttribute('class', 'test')
undefined
document.getElementById('title').setAttribute('class', 'test heading')
undefined
document.getElementById('title')
<h1 id=​"title" class=​"test heading">​DOM learning on Chai aur Code​</h1>​
const title = document.getElementById('title')
undefined
title
<h1 id=​"title" class=​"test heading">​DOM learning on Chai aur Code​</h1>​
title.style.backgroundColor = 'green'
'green'
title.style.padding = '15px'
'15px'
title.style.borderRadius = '15px'
'15px'
title.innerHTML
'DOM learning on Chai aur Code <span style="display: none;">test text</span>'
title.innerText
'DOM learning on Chai aur Code'
title.textContent
'DOM learning on Chai aur Code test text'
document.querySelector('h2')
<h2>​Heading 2​</h2>​
document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​"DOM learning on Chai aur Code "<span style=​"display:​ none;​">​test text​</span>​</h1>​
document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​…​</h1>​"DOM learning on Chai aur Code "<span style=​"display:​ none;​">​test text​</span>​</h1>​
document.querySelector('input[type="password"]')
<input type=​"password" name id>​
document.querySelector('ul')
<ul>​…​</ul>​
const myul = document.querySelector('ul')
undefined
myul.querySelector('li')
<li>​…​</li>​::marker​"one"</li>​
const turnGreen = myul.querySelector('li')
undefined
turnGreen.style.backgroundColor = "green"
'green'
turnGreen.style.padding = "10px"
'10px'
turnGreen.innerText
'one'
turnGreen.innerText = "five"
'five'
document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
const tempLiList = document.querySelectorAll('li')
undefined
tempLiList
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
tempLiList[1].style.color = "red"
'red'
const myH1 = document.querySelectorAll('h1')
undefined
myH1
NodeList [h1#title.heading]0: h1#title.headinglength: 1[[Prototype]]: NodeList
myH1[0].style.color = "orange"
'orange'
tempLiList.forEach((item)=> item.style.backgroundColor = "gray")
undefined

*/