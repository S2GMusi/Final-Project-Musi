let hesabYarat2=document.querySelector(".hesabYarat2")
let daxilOl=document.querySelector(".daxilOl")
let esasSehife=document.querySelector(".esesSehife")
let ad=document.querySelector(".ad2")
let tel=document.querySelector(".tel")
let iad=document.querySelector(".iad")
let sifre=document.querySelector(".sifre")
let form=document.querySelector("form")
let modalError2=new bootstrap.Modal(document.querySelector(".modalError2"))
let users=JSON.parse(localStorage.getItem("users")) 

form.addEventListener("submit",(e)=>{
    e.preventDefault()
   
    hesabYarat2.addEventListener("click",()=>{ 
if(form.checkValidity()){
    let checkUser=users.some(function(a){
        return a.iad==iad.value
    })
    if(!checkUser){
        let obj={
            ad:ad.value,
            tel:tel.value,
            iad:iad.value,
            sifre:sifre.value
         }
        users.push(obj)
         localStorage.setItem("users",JSON.stringify(users))
         alert("Ugurla Yaradildi!")
    }
    else{
modalError2.show()
    }
}

        })


})

daxilOl.addEventListener("click",()=>{
    location.href="../signIn/signIn.html"
})

esasSehife.addEventListener("click",()=>{
    location.href="../indexs/index.html"
})