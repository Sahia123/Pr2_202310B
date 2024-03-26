window.onload = function() {
    var ticker = document.getElementById('ticker');

    function updateTicker() {
        var now = new Date();
        var dateStr = now.toLocaleDateString();
        var timeStr = now.toLocaleTimeString();
        var locationStr = "";

        // Get user's geolocation
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                // You can use latitude and longitude to get location information from a geocoding service
                locationStr = "Latitude: " + latitude + ", Longitude: " + longitude;
            });
        }

        ticker.innerText = "Date: " + dateStr + " | Time: " + timeStr + " | Location: " + locationStr;
    }

    // Update ticker every second
    setInterval(updateTicker, 1000);

    var visitorCount = 1000;
    function updateVisitorCount() {
        // Update the visitor count on the page
        var visitorCountElement = document.getElementById('visitor-count');
        visitorCountElement.textContent = visitorCount.toLocaleString();    
        // Increment visitor count for demonstration
        visitorCount++;
    }
    // Initial update of visitor count
    updateVisitorCount();
    // Update visitor count every 10 seconds (for demonstration)
    setInterval(updateVisitorCount, 10000);
};
var products = [
{id:1 , Name:"Product1",Price:100 ,Quantity:4,Image:"1.jpg"},
{id:2 , Name:"Product2",Price:100 ,Quantity:4,Image:"2.jpg"},
{id:3 , Name:"Product3",Price:100 ,Quantity:4,Image:"3.jpg"},
{id:1 , Name:"Product1",Price:100 ,Quantity:4,Image:"1.jpg"},
{id:2 , Name:"Product2",Price:100 ,Quantity:4,Image:"2.jpg"},
{id:3 , Name:"Product3",Price:100 ,Quantity:4,Image:"3.jpg"},
{id:1 , Name:"Product1",Price:100 ,Quantity:4,Image:"1.jpg"},
{id:2 , Name:"Product2",Price:100 ,Quantity:4,Image:"2.jpg"},
{id:3 , Name:"Product3",Price:100 ,Quantity:4,Image:"3.jpg"},
{id:1 , Name:"Product1",Price:100 ,Quantity:4,Image:"1.jpg"},
{id:2 , Name:"Product2",Price:100 ,Quantity:4,Image:"2.jpg"},
{id:3 , Name:"Product3",Price:100 ,Quantity:4,Image:"3.jpg"}

]