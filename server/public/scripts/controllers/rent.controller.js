app.controller('RentController', function(RentService){
    console.log('RentController loaded');
    let vm = this;
    vm.getRentalListings = function(){
        RentService.getRentalListingsFromServer().then(function(){
            vm.listings = RentService.listings;
        });
    };
    vm.deleteListing = function(id){
        RentService.deleteRentListingFromServer(id).then(function(){
            vm.getRentListings();
        });
    };
    vm.getRentalListings();
})