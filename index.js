// event listener for submitting a todo item

let title = document.getElementById("title");
let description = document.getElementById("description");
let btn = document.getElementById("btn-id");

btn.addEventListener("click",postItem2);

const CREATE_URL = "http://127.0.0.1:8080/createitem";

async function postItem2(event) {

    event.preventDefault();

    try{
        const res = await fetch(CREATE_URL, 
            {
            method: "POST",
            headers: {
            "Content-Type": "application/JSON",
            "Access-Control-Allow-Origin": "http://127.0.0.1:5500/"},
            body: JSON.stringify({
            title: `${title.value}`,
            description: `${description.value}`})
            }
        );
        const resJSON = await res.json();
        console.log(resJSON);
        const createdItem = resJSON;//JSON.parse(resJSON);
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(`Created item with title: ${createdItem.title}, and description: ${createdItem.description}`));
        document.querySelector("body").appendChild(p);
        return resJSON;
    } catch(err) {
        console.log(err);
    };
};