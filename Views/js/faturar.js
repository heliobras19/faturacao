const toSend = {
    name: 'Dominic',
    age: 35,
    ocupation: 'Web developer',

}

const jsonString = JSON.stringify(toSend)
const xhr = new XMLHttpRequest()
xhr.open('DELETE', 'recive.php')
xhr.setRequestHeader("Content-Type", "application/json")
xhr.send(jsonString)