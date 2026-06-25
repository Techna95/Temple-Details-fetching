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
    let temple = jsonData.find(item => item.name.toLowerCase() === value.toLowerCase());
    if (temple) 
        {
            headingEl.textContent=temple.location.city +" "+ temple.location.state + " "+temple.location.country ;
            headingEl2.textContent=temple.visiting_hours.open+" "+temple.visiting_hours.close;
            headingEl3.textContent=temple.established_year+" "+temple.deity+" "+temple.architecture_style;
        }
    else headingEl.textContent="Not Found";

let stateTemples = jsonData.filter(item => item.location.state.toLowerCase() === value.toLowerCase());
if(stateTemples){
stateTemples.forEach(t => {
    let li = document.createElement("li");   // make a new <li> tag in memory
    li.innerHTML = `<strong>${t.name}</strong> — ...`;  // fill it with content
    listEl.appendChild(li);                  // attach it to the <ul> in the page
});
}
else headingEl.textContent="Not Found";
}
)
