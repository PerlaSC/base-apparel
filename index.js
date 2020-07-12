const iconError = document.getElementById('icon--error')
const textError = document.getElementById('text--error')
const arrow = document.getElementById('arrow')

arrow.addEventListener('click', () => {
    iconError.classList.remove('hidden')
    textError.classList.remove('hidden')
})