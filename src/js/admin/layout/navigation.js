/*
|--------------------------------------------------
| Designer's Image Admin Navigation Scripts
|--------------------------------------------------
*/

export const navigation = () => {
    const adminNav = document.querySelector('nav.admin-nav')
    const menuBtn = document.querySelector('.menu-control')
    let viewport = window.innerWidth
    window.addEventListener('resize', () => {
        viewport = window.innerWidth
    })

    menuBtn.addEventListener('click', (e) => {
        e.preventDefault()
        
        if (viewport < 1024) {
            if (adminNav.classList.contains('open') || adminNav.classList.contains('closed')) {
                // Toggle Open and Closed class
                if (adminNav.classList.contains('open')) {
                    adminNav.classList.remove('open')
                    adminNav.classList.add('closed')
                } else if (adminNav.classList.contains('closed')) {
                    adminNav.classList.remove('closed')
                    adminNav.classList.add('open')
                }
            } else {
                // Set the class to open
                adminNav.classList.add('open')
            }
        } else {
            if (adminNav.classList.contains('open') || adminNav.classList.contains('closed')) {
                // Toggle Open and Closed class
                if (adminNav.classList.contains('open')) {
                    adminNav.classList.remove('open')
                    adminNav.classList.add('closed')
                } else if (adminNav.classList.contains('closed')) {
                    adminNav.classList.remove('closed')
                    adminNav.classList.add('open')
                }
            } else {
                // Set the class to close
                adminNav.classList.add('closed')
            }
        }
    })
}