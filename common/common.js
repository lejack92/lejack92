const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('active');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-xmark');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-solid');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-bars');
});

function link_copy(){
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크 주소가 복사되었습니다.")
 }