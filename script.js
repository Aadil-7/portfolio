// slide in effect for items in project section.

let targets = document.querySelectorAll(`.imgholder`)
let info = document.querySelectorAll(`.proInfo`)

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
})
targets.forEach(target => {
    observer.observe(target)
})
info.forEach(target => {
    observer.observe(target)
})

// on form submission

const senderName = document.getElementById(`sendername`)
const senderEmail = document.getElementById(`senderemail`)
const subject = document.getElementById(`subject`)
const message = document.getElementById(`message`)
const formSubmitHandler = function () {
    document.getElementById(`sender`).innerText = senderName.value
    senderName.value = ""
    senderEmail.value = ""
    subject.value = ""
    message.value = ""
}