    var products= [
        {id:1 , name:"phone" , price:10 ,categoreis:"electronics"},
        {id:2 , name:"game" , price:20 ,categoreis:"electronics"},
        {id:3 , name:"food" , price:5 , categoreis:"food"},
        {id:4 , name:"t-shirt" , price:30 ,categoreis:"clothes"}
    ]
    var cart = []
    const discounts = {
    "SAVE10": 0.10,
    "STUDENT20": 0.20,
    "VIP50": 0.50
    };
    function calculateTotal(cart){
        var totalprice = 0 , totalitmes = 0; 
        for(var i = 0 ; i<cart.length ;i++){
            totalprice += (cart[i].price*cart[i].quantity);
            totalitmes += cart[i].quantity
        }
        return {totalitmes , totalprice}
    }
    while(true){
        console.log("\n===== Smart Shopping Cart =====");
        console.log("1. Show all products");
        console.log("2. Search for a product by name");
        console.log("3. Add a product to the cart");
        console.log("4. Remove a product from the cart");
        console.log("5. View cart and total price");
        console.log("6. Apply discount code");
        console.log("7. Exit");

        var choice = +prompt("enter the choice")
        if (choice == 1) {
            for (var i = 0; i < products.length; i++) {
                console.log(products[i]);
            }
        }
        else if (choice == 2) {
            var name = prompt("Enter name: ");
            var found = [];

            for (let i = 0; i < products.length; i++) {
                if (products[i].name.toLowerCase() == name.toLowerCase()) {
                    found.push(products[i]);
                }
            }
            console.log(found);
        }
        else if (choice == 3) {
            var idToAdd = +prompt("Enter the ID of the product to add:");
            var productBase = products.findIndex(products => products.id == idToAdd);
            if(productBase != -1){
                var idx = cart.findIndex(cart => cart.id == idToAdd);
                if(idx != -1) cart[idx].quantity++;
                else cart.push({...products[productBase] , quantity:1});
                console.log("the product added")
            }else{
                console.log("this product is not exist");
            }

        }
        else if(choice == 4){
            var name = prompt("Enter the product name that you want to remove");
            var indx = cart.findIndex(cart => cart.name == name);

            if(indx != -1){
                if(cart[indx].quantity > 1) cart[indx].quantity--;
                else cart.splice(indx , 1);

                console.log("the product removed ");

            }
            else{
                console.log("the product is not exist");
            }
        }
        else if (choice == 5){
            var {totalitmes , totalprice} = calculateTotal(cart);
            console.log("the total items is : " + totalitmes , "the total price is : " + totalprice);
        }
        else if(choice == 6){
            var code = prompt("enter the discount code");
            if(discounts[code]){
                var {totalitmes , totalprice} = calculateTotal(cart);
                totalprice = totalprice * (1 - discounts[code]);
                console.log("the discount applied and the total price after the discount is " + totalprice);
            }
            else{
                console.log("the code is wrong");
            }
        }
        else if(choice == 7) break;
        // break;
    }