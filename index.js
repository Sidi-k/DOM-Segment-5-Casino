let konto=100
document.querySelector("konto").innerHTML=konto+"Euro"


function run(){
    const zahl=Math.round(Math.random()*99+1)
    document.querySelector("#zahl").innerHTML  = zahl;

    if (zahl==50) {
        konto+=100
        
    } else {
        konto-=1
        
    }
    document.querySelector("#konto").innerHTML=konto+"Euro"
}

function revert(){
    konto=100
    document.querySelector("#konto").innerHTML=konto+"Euro"
}
