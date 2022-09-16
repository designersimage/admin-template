/*
|--------------------------------------------------
| Designer's Image Admin Theme Scripts
|--------------------------------------------------
*/

export const theme = () => {
    const themeToggleBtn = document.querySelector('.toggle-theme')

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme')

        themeToggleBtn.querySelector('span:nth-child(1)').classList.toggle('active')
        themeToggleBtn.querySelector('span:nth-child(2)').classList.toggle('active')
    })
}