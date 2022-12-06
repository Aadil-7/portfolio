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