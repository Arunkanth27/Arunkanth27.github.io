const container = document.getElementById("root");
const gender = document.getElementById("gender");
const user = document.getElementById("name");
const mail=document.getElementById('mail');
const dob=document.getElementById('dob');

const getUser = () => {
    fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((res) => {
        console.log(res.results);
        gender.innerText="gender : " +res.results[0]["gender"];
        user.innerText="Name : " +res.results[0]["name"]['title']+" " +res.results[0]['name']['first']+" "+res.results[0]['name']['last'];
        mail.innerText="Email : "+res.results[0]['email'];
      dob.innerText="Date of Birth : "+ res.results[0]['dob']['date'];
})
}

getUser();

const btn = document.getElementById("button");
btn.addEventListener("click" ,getUser);