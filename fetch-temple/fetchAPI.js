let jsonData;

window.addEventListener("load", ()=>{
    fetch("data.json")
    .then((res) =>res.json())
    .then((data)=> (jsonData=data))
    .catch((err)=>console.log(err));
});

let inputEl=document.querySelector("input");
let buttonEl=document.querySelector("button");
let headingEl=document.querySelector("h1");
let headingEl2=document.querySelector("h2");
let headingEl3=document.querySelector("h3");

buttonEl.addEventListener("click" , () => {
    let value= inputEl.value;
    let name= String(value);
    let user = jsonData.find(item =>item.name==name);
    if (user) 
        {
            headingEl.textContent=user.location.city +" "+ user.location.state + " "+user.location.country ;
            headingEl2.textContent=user.visiting_hours.open+" "+user.visiting_hours.close;
            headingEl3.textContent=user.established_year+" "+user.deity+" "+user.architecture_style;
        }
    else headingEl.textContent="Not Found";
})