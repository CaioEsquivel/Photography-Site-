const menuBtn = document.querySelector('.ri-menu-line')
const closeBtn = document.querySelector('.ri-close-line')
const menuLinks = document.querySelector('.mobile-header-links')
const closeDiv = document.querySelector('.close-container')

menuBtn.addEventListener('click',()=>{
    menuLinks.classList.add('active')
    closeDiv.classList.add('activeCloseDiv')
    menuBtn.classList.add('close')
    menuBtn.classList.remove('open')
    closeBtn.classList.add('open')
    closeBtn.classList.remove('close')
    
})

closeBtn.addEventListener('click',()=>{
    menuBtn.classList.add('open')
    menuBtn.classList.remove('close')
    closeBtn.classList.add('close')
    closeBtn.classList.remove('open')
    menuLinks.classList.remove('active')
    closeDiv.classList.remove('activeCloseDiv')
    
    
})
closeDiv.addEventListener('click',()=>{
    menuLinks.classList.remove('active')
    closeDiv.classList.remove('activeCloseDiv')
    closeBtn.classList.add('close')
    closeBtn.classList.remove('open')
    menuBtn.classList.remove('close')
    menuBtn.classList.add('open')

})
