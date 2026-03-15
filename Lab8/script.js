var products = []
var productname = document.getElementById("name");
var productprice = document.getElementById("price");
var addbtn = document.getElementById("addbtn");
var upbtn = document.getElementById("upbtn");

addbtn.style.display="block";
upbtn.style.display="none";

if(localStorage.getItem("productlist") != null){
    products = JSON.parse(localStorage.getItem("productlist"));
    display();
}
function addproduct(){
    var product = {
        name : productname.value ,
        price : productprice.value
    }
    products.push(product)
    console.log(products);
    localStorage.setItem("productlist" , JSON.stringify(products));
    display();
}

function deleteproduct(idx){
    var l = [];
    for(var i = 0 ; i<products.length ;i++){
        if(i != idx) l.push(products[i]);
    }
    products = l;
    localStorage.setItem("productlist" , JSON.stringify(products));
    display();
}
var indx;
function updateproduct(idx){
    productname.value = products[idx].name;
    productprice.value = products[idx].price;
    indx = idx;
    addbtn.style.display="none";
    upbtn.style.display="block";

}
function update(){
    products[indx].name = productname.value;
    products[indx].price = productprice.value;
    localStorage.setItem("productlist" , JSON.stringify(products));
    display();
    
}
function display(){
    var list = "";
    for(var i = 0  ; i<products.length ;i++){
        list+=`
            <div class="prodcut"> 
            <img src="./images.jpeg" alt="">
            <label for="">name:${products[i].name}</label>
            <label for="">price:${products[i].price}</label>
            <button class="addbnt" onclick="deleteproduct(${i})">delete product</button>
            <button class="updatebnt" onclick="updateproduct(${i})">update product</button>

            </div>
        
        `
    }

    document.getElementById("product").innerHTML=list;
    localStorage.setItem("productlist" , JSON.stringify(products));

}