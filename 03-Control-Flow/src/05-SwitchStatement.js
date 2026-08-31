// Basic Structure
/*
switch (value) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
*/

let orderStatus = "Shipped";

switch(orderStatus){

    case "Pending":
        console.log("Your Order is Pending");
        break;

        case "Shipped":
            console.log("Your Ordeer is Shipped");
            break;

            case "Deliverd":
                console.log("Your Order is Deliverd");

                default:
                    console.log("Unknow Order Status");


}