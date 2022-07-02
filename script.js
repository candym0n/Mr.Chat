function resize(){
document.body.style.height = window.innerHeight + 'px';
document.body.style.width = window.innerWidth + 'px';
}
resize()
window.addEventListener('resize',resize)
