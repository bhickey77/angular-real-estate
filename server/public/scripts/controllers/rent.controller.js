app.controller('RentController', function(RentService){
    console.log('RentController loaded');
    let vm = this;
    vm.getRentalListings = function(){
        RentService.getRentalListingsFromServer().then(function(){
            vm.listings = RentService.listings;
            vm.listings = vm.formatListings(vm.listings);
        });
    };
    vm.deleteListing = function(id){
        RentService.deleteRentListingFromServer(id).then(function(){
            vm.getRentalListings();
        });
    };
    vm.formatListings = function(listings){
        listings = listings.map(listing => {
            listing.price = '$' + listing.price.toFixed(0).replace(/./g, function(c, i, a) {
                return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
            });
            return listing;
        })
        return listings;
    }
    vm.getRentalListings();
})