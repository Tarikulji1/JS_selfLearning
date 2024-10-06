/*
document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM learning on Chai aur Code​</h1>​

document.getElementById('title').id
'title'

document.getElementById('title').className
'heading'

document.getElementById('title').getAttribute('id')
'title'

document.getElementById('title').getAttribute('class')
'heading'

document.getElementById('title').setAttribute('class', 'test')
undefined // override

document.getElementById('title').setAttribute('class', 'test heading')
undefined // add

document.getElementById('title')
<h1 id=​"title" class=​"test heading">​DOM learning on Chai aur Code​</h1>​

const title = document.getElementById('title')

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

myul.querySelector('li')
<li>​…​</li>​::marker​"one"</li>​

const turnGreen = myul.querySelector('li')

turnGreen.style.backgroundColor = "green"
'green'
turnGreen.style.padding = "10px"
'10px'
turnGreen.innerText
'one'
turnGreen.innerText = "five"
'five'

const myH1 = document.querySelectorAll('h1')
myH1
NodeList [h1#title.heading]0: h1#title.headinglength: 1[[Prototype]]: NodeList
myH1[0].style.color = "orange"
'orange'

document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object

const tempLiList = document.querySelectorAll('li')
tempLiList[1].style.color = "red"
'red'
tempLiList.forEach((item)=> item.style.backgroundColor = "gray")

document.getElementsByClassName('list-item')
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const tempClassList = document.getElementsByClassName('list-item')

Array.from(tempClassList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object

const myConvertedArray = Array.from(tempClassList)
myConvertedArray.forEach(function (li) {
    li.style.color = 'orange'
})

document.querySelectorAll('h2')
NodeList(16) [h2.vector-pinnable-header-label, h2.cdx-dialog__header__title, h2#History, h2#Trademark, h2#Website_client-side_usage, h2#Other_usage, h2#Execution, h2#Features, h2#Syntax, h2#Security, h2#Development_tools, h2#Related_technologies, h2#References, h2#Sources, h2#Further_reading, h2#External_links]0: h2.vector-pinnable-header-label1: h2.cdx-dialog__header__title2: h2#History3: h2#Trademark4: h2#Website_client-side_usage5: h2#Other_usage6: h2#Execution7: h2#Features8: h2#Syntax9: h2#Security10: h2#Development_tools11: h2#Related_technologies12: h2#References13: h2#Sources14: h2#Further_reading15: h2#External_linkslength: 16[[Prototype]]: NodeList
const allH2 = document.querySelectorAll('h2')

allH2[0].innerText
'Contents'
allH2[2].innerText
'History'

document.querySelectorAll('.mw-heading')
NodeList(60) [div.mw-heading.mw-heading2, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading2, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading4, div.mw-heading.mw-heading4, div.mw-heading.mw-heading3, div.mw-heading.mw-heading4, div.mw-heading.mw-heading4, div.mw-heading.mw-heading4, div.mw-heading.mw-heading3, div.mw-heading.mw-heading4, div.mw-heading.mw-heading4, div.mw-heading.mw-heading3, div.mw-heading.mw-heading4, div.mw-heading.mw-heading4, div.mw-heading.mw-heading3, div.mw-heading.mw-heading4, div.mw-heading.mw-heading4, div.mw-heading.mw-heading4, div.mw-heading.mw-heading4, div.mw-heading.mw-heading4, div.mw-heading.mw-heading5, div.mw-heading.mw-heading5, div.mw-heading.mw-heading3, div.mw-heading.mw-heading2, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading2, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2, div.mw-heading.mw-heading2]0: div.mw-heading.mw-heading21: div.mw-heading.mw-heading32: div.mw-heading.mw-heading33: div.mw-heading.mw-heading34: div.mw-heading.mw-heading35: div.mw-heading.mw-heading36: div.mw-heading.mw-heading27: div.mw-heading.mw-heading28: div.mw-heading.mw-heading39: div.mw-heading.mw-heading310: div.mw-heading.mw-heading211: div.mw-heading.mw-heading212: div.mw-heading.mw-heading313: div.mw-heading.mw-heading314: div.mw-heading.mw-heading215: div.mw-heading.mw-heading316: div.mw-heading.mw-heading317: div.mw-heading.mw-heading318: div.mw-heading.mw-heading419: div.mw-heading.mw-heading420: div.mw-heading.mw-heading321: div.mw-heading.mw-heading422: div.mw-heading.mw-heading423: div.mw-heading.mw-heading424: div.mw-heading.mw-heading325: div.mw-heading.mw-heading426: div.mw-heading.mw-heading427: div.mw-heading.mw-heading328: div.mw-heading.mw-heading429: div.mw-heading.mw-heading430: div.mw-heading.mw-heading331: div.mw-heading.mw-heading432: div.mw-heading.mw-heading433: div.mw-heading.mw-heading434: div.mw-heading.mw-heading435: div.mw-heading.mw-heading436: div.mw-heading.mw-heading537: div.mw-heading.mw-heading538: div.mw-heading.mw-heading339: div.mw-heading.mw-heading240: div.mw-heading.mw-heading341: div.mw-heading.mw-heading342: div.mw-heading.mw-heading243: div.mw-heading.mw-heading344: div.mw-heading.mw-heading345: div.mw-heading.mw-heading346: div.mw-heading.mw-heading347: div.mw-heading.mw-heading348: div.mw-heading.mw-heading349: div.mw-heading.mw-heading350: div.mw-heading.mw-heading251: div.mw-heading.mw-heading252: div.mw-heading.mw-heading353: div.mw-heading.mw-heading354: div.mw-heading.mw-heading355: div.mw-heading.mw-heading356: div.mw-heading.mw-heading257: div.mw-heading.mw-heading258: div.mw-heading.mw-heading259: div.mw-heading.mw-heading2length: 60[[Prototype]]: NodeList
const myH2 = document.querySelectorAll('.mw-heading')

myH2[0].innerText
'History'
myH2.forEach(function (h) {
    h.style.color = 'red'
})

myH2.forEach(function (h) {
    h.style.color = 'orange';
    h.style.backgroundColor = 'gray';
    h.style.padding = '10px';
})

myH2.forEach(function (h) {
    h.style.color = 'orange';
    h.style.backgroundColor = 'green';
    h.style.padding = '10px';
    h.innerText = "Tarikul"
})


*/