function pizza(size, crust, toppings){
   this.size = size;
   this.crust = crust;
   this.toppings = toppings;
}
const calculateTotal = document.getElementById("calculate-total");

let anotherOrderPrompt;

function total(e){
   e.preventDefault();
       var nSize = document.getElementById("size").value;
        var nCrust = document.getElementById("crust").value;
       var nToppings = document.getElementById("toppings").value;
       var number = document.getElementById("numero").value;
       var deliver = document.getElementById("deliver").checked;
       var location;

       if (deliver === true){
         location = prompt("Where do you stay?");
       }
       
       let price;
       const numberOfOrders = number === '' ? 1 : number;
       price = (parseInt(nSize)+ parseInt(nCrust) + parseInt(nToppings)) * parseInt(numberOfOrders);
       document.getElementById("demo").innerHTML = `${price} Ksh`;
       alert(`amount due for your order is ksh. ${price}`);
       anotherOrderPrompt = prompt('would you like to make another order? Yes/No');
       if(anotherOrderPrompt ==='no' || anotherOrderPrompt === 'No' ) {
          alert('welcome');
       }
     
       }
       calculateTotal.addEventListener('click', (event) => total(event));
     
      
    
