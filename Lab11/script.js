var registername = document.getElementById("name");
var registermail = document.getElementById("email");
var registerpassword = document.getElementById("password");

var DataList = JSON.parse(localStorage.getItem("DataList")) || [];
// localStorage.removeItem("DataList");


function saveData(){

    var user ={
        name : registername.value,
        mail : registermail.value,
        password : registerpassword.value
    };
    DataList.push(user);
    localStorage.setItem("DataList",JSON.stringify(DataList));
    alert("Data Saved")
}

// know i will take the data from the login and check on it
//haroun@gmail.com
var cuurentuserIndex;
function logincheck(){

    var loginMail = document.getElementById("loginMail").value;
    var loginPassword = document.getElementById("loginPassword").value;

    
    for(var i = 0 ; i<DataList.length; i++){
        if(loginMail == DataList[i].mail && loginPassword == DataList[i].password){
            
            cuurentuserIndex=i
            window.location.href = "index3.html";
            document.getElementById("welcom").innerHTML = DataList[cuurentuserIndex].name;
            console.log(cuurentuserIndex);
            
            
        }
    }

    
}


async function getPizza() {
    var container = document.getElementById("recipes");

    var response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var data = await response.json();

    container.innerHTML = ""; 
    for (var i = 0; i < data.recipes.length; i++) {
        var recipe = data.recipes[i];

        container.innerHTML += `
            <h3 style="color: white;">${recipe.title}</h3>
            <p style="color: white;">${recipe.publisher}</p>
        `;

    }
}

window.onload = getPizza;

