let read = document.getElementById("read");

read.addEventListener('click', () => {
    document.querySelectorAll(".single-box").forEach(e => {
        e.classList.remove('unseen')
        e.classList.remove('dot')

        console.log(e)
    })

    document.querySelectorAll(".dot").forEach(e => {
        e.classList.remove('dot')

        console.log(e)
    })

    document.getElementById("num").innerHTML = "0"
})