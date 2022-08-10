const p = document.createElement('p')
p.textContent = "Hey I'm red!"
p.setAttribute('style', 'color:red')
const h3 = document.createElement('h3')
h3.textContent = "I'm a blue h3"
h3.setAttribute('style', 'color:blue')
const div = document.createElement('div')
div.setAttribute('style', 'background-color:pink,border-color:black')
const h1 = document.createElement('h1')
h1.textContent = "I'm in a div"
const p2 = document.createElement('p')
p2.textContent = "ME TOO!"
div.appendChild(h1)
div.appendChild(p2)
document.body.appendChild(p)
document.body.appendChild(h3)
document.body.appendChild(div)