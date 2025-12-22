const socket = io();
// const socket = io();

const msg = document.getElementById('list')
const inp = document.getElementById('text-box')
const btn = document.getElementById('btn-box')
const form = document.getElementById('formm')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inp.value) {
        // console.log("Message: " + inp.value);
        socket.emit("chatSent", inp.value)
        inp.value = ''
        
    }
})

function CreateCrow(msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    list.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
    
}

socket.on("chatSent", (msg) => {
    CreateCrow(msg)
    
})