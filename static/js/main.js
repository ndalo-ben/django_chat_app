// Elements 

const chatElement = document.querySelector('#chat')
const chatOpenElement = document.querySelector('#chat_open')
const chatJoinElement = document.querySelector('#chat_join')
const chatIconElement = document.querySelector('#chat_icon')
const chatWelcomeElement = document.querySelector('#chat_welcome')



// event listeners 

chatOpenElement.onclick = function(e) {
    e.preventDefault()

    chatIconElement.classList.add('hidden')
    chatWelcomeElement.classList.remove('hidden')

    return false
}
