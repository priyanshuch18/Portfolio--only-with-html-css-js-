document.querySelector('.cross').style.display= 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
else{
    setTimeout(() => {
    document.querySelector('.cross').style.display = 'inline'
}, 300);
document.querySelector('.ham').style.display = 'none'
}
})