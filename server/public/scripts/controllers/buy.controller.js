app.controller('BuyController', function(BuyService){
    console.log('BuyController loaded');
    let vm = this;
    vm.getBuyListings = function(){
        vm.listings = [];
        BuyService.getBuyListingsFromServer().then(function(){
            vm.listings = BuyService.listings;
        });
    };
    vm.deleteListing = function(id){
        BuyService.deleteBuyListingFromServer(id).then(function(){
            vm.getBuyListings();
        });
    };
    vm.getBuyListings();
})