const perfilContenido = document.querySelector('.perfil__contenido');
const shareFooter = document.querySelector('.share-footer');
const shareVentana = document.querySelector('.share-ventana');

const shareBtn1 = document.getElementById('share-btn1');
const shareBtn2 = document.getElementById('share-btn2');
const shareBtnDesktop = document.getElementById('share-btn-desktop');
const shareBtnDesktopArrow = document.getElementById('share-btn-desktop__img');

shareBtnDesktop.addEventListener('click', ()=>{
    changeDesktop(shareBtnDesktop, shareVentana, shareBtnDesktopArrow);
})
shareBtn1.addEventListener('click', ()=>{
    change(shareFooter, perfilContenido);
})
shareBtn2.addEventListener('click', ()=>{
    change(perfilContenido, shareFooter);
})

function change(act,desact){
    act.classList.toggle('desactivo');
    desact.classList.toggle('desactivo');
}

function changeDesktop(btn,ventana,arrow){
    btn.classList.toggle('btn-desktop-activo-fondo');
    ventana.classList.toggle('desactivo');
    // ventana.style.opacity = '.5';
    arrow.classList.toggle('btn-desktop-activo');
}