const btn = document.getElementById('btn')
const color = document.getElementById('color')
const wrap = document.getElementById('wrap')

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
                            //    10  11  12  13  14  15   

btn.addEventListener('click',changeBg)

function changeBg(){
    let hexColor = '#'
    for(let i=1; i<=6; i++){
       hexColor += random();
    }
    wrap.style.backgroundColor = hexColor
    color.innerHTML = hexColor  
}

function random(){
   let randomIndex =   Math.floor(Math.random()*16);
   return  hex[randomIndex]

}
                          




