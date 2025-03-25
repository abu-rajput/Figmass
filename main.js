let nolike = document.querySelector("#nolike");
// let curNo = parseInt(nolike.innerHTML)
let mode = document.getElementById("mode");

mode.addEventListener('click',themChange)

let love = document.querySelector("#love");

// love.addEventListener('dblclick',like);




function like(){
    nolike.innerHTML=curNo+1;
}

// for(let i of love){
//     i.addEventListener('click',like)
   

// }

// Color mode 
function themChange(){
    let classMode =document.getElementById("root");
    if(classMode.className=='light'){
        document.getElementById('root').className="dark";
    }
    else{
        document.getElementById('root').className="light";


    }
}


