const cross = Array.from(document.querySelectorAll('.cross'));
cross.map(el=>el.addEventListener('click', myFunction))
function myFunction(e) {
    e.target.parentElement.parentElement.remove();
    document.getElementById("tot").innerHTML = sum()

}

const likes = Array.from(document.querySelectorAll('.heart'))
for (let like of likes){
    like.addEventListener("click", function () {
        if (like.style.color === "red"){
            like.style.color = "lightgray";
        }
        else like.style.color = "red"
});
}

const btns = Array.from(document.querySelectorAll('.add'))
btns.map(el => el.addEventListener("click", function(){
    el.nextElementSibling.innerHTML = Number(el.nextElementSibling.innerHTML)+ 1;
    // document.getElementById("tot").innerHTML = sum()
}))

const btn = Array.from(document.querySelectorAll('.minus'))
btn.map(el => el.addEventListener("click", function(){
    if(el.previousElementSibling.innerHTML >0){
    el.previousElementSibling.innerHTML = Number(el.previousElementSibling.innerHTML)- 1;
    // document.getElementById("tot").innerHTML = sum()
}
    
}))


function sum() {
    let qte = document.getElementsByClassName("qte");
    let prix = document.getElementsByClassName("price");
    let sum = 0;
    for(let i=0; i<qte.length; i++) {
        sum += qte[i].innerHTML * prix[i].innerHTML
    }
    return sum
}

 

const btnT = document.getElementById('btnTot').addEventListener("click", function(){
    document.getElementById("tot").innerHTML = sum()
})
// if you want to calculate '''automatically''' the total shopping price , you can make the btnTot code on comment and reactivate the add and minus onces