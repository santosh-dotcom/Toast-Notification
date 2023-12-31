const button = document.getElementById('button')
const toast = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message three',
    'Message Four',
    'Message Five',
]
const types = ['info', 'success', 'error']


button.addEventListener('click', () => createNotification('This is invalid data', 'success'))

function createNotification(message = null, type = null ) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type: getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(math.random() * types.length)]
}