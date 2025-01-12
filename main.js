let div =document.querySelector('div')
let btn =document.querySelector("button")
btn.addEventListener("click",()=>{
    fetch("https://ipinfo.io/json")
.then((res) => res.json())
.then((data) =>{
    console.log(data);
    
    div.innerHTML =`
    <h1>${data.city}<h1>
     <h1>${data.country}<h1>
      <h1>${data.hostname}<h1>
       <h1>${data.ip}<h1>
        <h1>${data.loc}<h1>
    
    `
})
})