function pizza(size, crust, toppings){
   this.size = size;
   this.crust = crust;
   this.toppings = toppings;
}

    function total(){
       var nSize = document.getElementById("size").value;
       var nCrust = document.getElementById("crust").value;
       var nToppings = document.getElementById("toppings").value;
      var price;
      var tPrice;

       if(nSize ==large){
         price = 1000;
         
       } else if (nSize == medium){
          price = 800;
       } else{
          price = 500;
       }

      
    }