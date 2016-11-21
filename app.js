var samsung = {productName:"Samsung S7", price:500, description:"Description of Samsung S7"}; 
var iphone = {productName:"iPhone 7", price:700, description:"Description of iPhone 7"}; 
var productList = [ samsung, iphone ];
$(document).ready(function(){
        var list = "";
        for(i = 0; i < productList.length; i++){
            list += "<a href=\"#\" class=\"list-group-item\"><div class=\"row\"><span class=\"col-md-10\">" + productList[i].productName + 
            "</span><span class=\"col-md-2\">$" + productList[i].price + "</span></div>" + "</a>"
        }
    $("#products").append(list);
});
function addProduct(){
    var list = "";
    var newProduct = {
        productName:document.forms[0].elements["productName"].value,
        price:document.forms[0].elements["price"].value,
        description:document.forms[0].elements["description"].value
    }
    list += "<a href=\"#\" class=\"list-group-item\"><div class=\"row\"><span class=\"col-md-10\">" + newProduct.productName + 
    "</span><span class=\"col-md-2\">$" + newProduct.price + "</span></div>" + "</a>"
    $("#products").append(list);
    productList.append();
};