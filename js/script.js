document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
        alert("Booking feature coming soon!");
    });
});


function bookVehicle(vehicleName, price){

    localStorage.setItem("vehicleName", vehicleName);
    localStorage.setItem("vehiclePrice", price);

}