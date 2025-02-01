document.addEventListener("DOMContentLoaded", function() {
    const parkingLot = document.getElementById("parkingLot");
    const totalSpots = 12;
    
    for (let i = 1; i <= totalSpots; i++) {
        let spot = document.createElement("div");
        spot.classList.add("parking-spot");
        spot.textContent = "Spot " + i;
        spot.addEventListener("click", function() {
            if (!spot.classList.contains("occupied")) {
                document.getElementById("paymentSection").style.display = "block";
                spotToReserve = spot;
            }
        });
        parkingLot.appendChild(spot);
    }
});

let spotToReserve;

function completePayment() {
    if (spotToReserve) {
        spotToReserve.classList.add("occupied");
        spotToReserve.textContent = "Reserved";
        document.getElementById("paymentSection").style.display = "none";
        spotToReserve = null;
    }
}



function showLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank');
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}