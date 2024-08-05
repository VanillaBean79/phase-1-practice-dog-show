document.addEventListener('DOMContentLoaded', () => {

    fetch('http://localhost:3000/dogs')

    .then(res => res.json())
    .then(data => {
        data.forEach((dogObjects)=>{
// console.log(dogObjects)
    const tableBody = document.getElementById('table-body')
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    td.innerText = `${dogObjects.name}`
    tr.append(td)
    tableBody.append(tr)
   
    const td2 = document.createElement('td')
    td2.innerText = `${dogObjects.breed}`
    tr.append(td2)

    const td3 = document.createElement('td')
    td3.innerText = `${dogObjects.sex}`
    tr.append(td3)

    const td4 = document.createElement('td')
    const button = document.createElement('button')
    button.innerText = 'Edit Dog'
    tr.append(td4)
    td4.append(button)
    button.addEventListener('click', (e)=>{
        console.log('Jamalamadingdong!')
        const element = document.getElementById("dog-form")
        const nameInput = document.querySelector('input[name = "name"]')
        nameInput.value = dogObjects.name
        nameInput.id = dogObjects.id
        const breedInput = document.querySelector('input[name = "breed"]')
        breedInput.value = dogObjects.breed

        const sexInput = document.querySelector('input[name = "sex"]')
        sexInput.value = dogObjects.sex


        })

        


})
 })
    
    })
    
document.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nameInput = document.querySelector('input[name = "name"]')
    const breedInput = document.querySelector('input[name = "breed"]')
    const sexInput = document.querySelector('input[name = "sex"]')
    const newDog = {
        name:nameInput.value,
        breed:breedInput.value,
        sex:sexInput.value
    }
fetch(`http://localhost:3000/dogs/${nameInput.id}`,{
    method:'PATCH',
    headers:{
        'Content-Type': 'application/json'
    },
  body: JSON.stringify(newDog)  
})
.then(res => res.json())
.then(data => {
    fetch('http://localhost:3000/dogs')

.then(res => res.json())
.then(data => {const tableBody = document.getElementById('table-body')
tableBody.innerHTML = ""
data.forEach((dogObjects)=>{
// console.log(dogObjects)
// const tableBody = document.getElementById('table-body')
const tr = document.createElement('tr')
const td = document.createElement('td')
td.innerText = `${dogObjects.name}`
tr.append(td)
tableBody.append(tr)

const td2 = document.createElement('td')
td2.innerText = `${dogObjects.breed}`
tr.append(td2)

const td3 = document.createElement('td')
td3.innerText = `${dogObjects.sex}`
tr.append(td3)

const td4 = document.createElement('td')
const button = document.createElement('button')
button.innerText = 'Edit Dog'
tr.append(td4)
td4.append(button)

button.addEventListener('click', (e)=>{
console.log('Jamalamadingdong!')
const element = document.getElementById("dog-form")
const nameInput = document.querySelector('input[name = "name"]')
nameInput.value = dogObjects.name

const breedInput = document.querySelector('input[name = "breed"]')
breedInput.value = dogObjects.breed

const sexInput = document.querySelector('input[name = "sex"]')
sexInput.value = dogObjects.sex
})
})
})
})
})