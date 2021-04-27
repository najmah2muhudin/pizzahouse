function pizza(size, crust, toppings){
   this.size = size;
   this.crust = crust;
   this.toppings = toppings;
}

function total(){
       var nSize = document.getElementById("size").value;
       var nCrust = document.getElementById("crust").value;
       var ntoppings = document.getElementById("toppings").value;
       var number = document.getElementById("numero").value;
       var deliver = document.getElementById("deliver").checked;
       var location;

       if (deliver === true){
         location = prompt("Where do you stay?");
       }

      var price;
      var tprice;
      
      if(nSize =="large"){
         price = 1000;
         if(ntoppings == "extra cheese"){
            price += 100;
            tprice = price * number;
         } else if(ntoppings == "pepperoni"){
            price += 50;
            tprice = price* number;
         } else {
            price += 150;
            tprice = price*number;
         }
         
       } else if (nSize == "medium"){
          price = 800;
          if(ntoppings == "extra cheese"){
            price += 100;
            tprice = price * number;
         } else if(ntoppings == "pepperoni"){
            price += 50;
            tprice = price* number;
         } else {
            price += 150;
            tprice = price*number;
         }

       } else{
          price = 500;
          if(ntoppings == "extra cheese"){
            price += 100;
            tprice = price * number;
         } else if(ntoppings == "pepperoni"){
            price += 50;
            tprice = price* number;
         } else {
            price += 150;
            tprice = price*number;
         }
       }
     document.getElementById("demo").innerHTML = tprice + " KSh";
      
    }
