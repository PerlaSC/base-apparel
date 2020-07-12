const iconError = document.getElementById('icon--error')
const textError = document.getElementById('text--error')
const arrow = document.getElementById('arrow')
const input = document.getElementById('input')

arrow.addEventListener('click', () => {
    iconError.classList.remove('hidden')
    textError.classList.remove('hidden')
    input.classList.remove('border')
    input.classList.add('border--error')
    arrow.classList.add('arrow--error')
})