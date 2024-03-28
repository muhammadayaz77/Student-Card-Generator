let btn1 = document.querySelector('.btn1');
let up_con = document.querySelector('.up-con');
let fir_con = document.querySelector('.fir-con');
let iname = document.querySelector('#name');
    let iroll = document.querySelector('#roll');
    let file = document.querySelector('#file');
    let nam = document.querySelector('.name');
    let roll = document.querySelector('.roll');
btn1.onclick = () => {
    up_con.style.display = 'block';
    fir_con.style.display = 'none';
    
    nam.textContent = iname.value;
    roll.textContent = iroll.value;
        let img1 = document.querySelector('.img1');
        img1.src = URL.createObjectURL(file.files[0]);
        btn3.style.display = 'block'
}

let btn2 = document.querySelector('.btn2');
let th_con = document.querySelector('.th-con');
let nam2 = document.querySelector('.name2');
let roll2 = document.querySelector('.roll2');
let img2  = document.querySelector('.img2');
btn2.onclick = () => {
    th_con.style.display = 'block';
    up_con.style.display = 'none';
    nam2.textContent = nam.textContent;
    roll2.textContent = roll.textContent;
    img2.src = URL.createObjectURL(file.files[0]);

}
let btn3 = document.querySelector('.btn3');
btn3.onclick = () => {
    up_con.style.display = 'none';
    th_con.style.display = 'none';
    fir_con.style.display = 'block';

}

let btn4 = document.querySelector('.btn4');
btn4.onclick = () => {
    up_con.style.display = 'none';
    th_con.style.display = 'none';
    fir_con.style.display = 'block';
}
