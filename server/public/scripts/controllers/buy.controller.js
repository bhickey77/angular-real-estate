app.controller('BuyController', function(BuyService){
    console.log('BuyController loaded');
    let vm = this;
    vm.getBuyListings = function(){
        vm.listings = [];
        BuyService.getBuyListingsFromServer().then(function(){
            vm.listings = BuyService.listings;
            vm.listings = vm.formatListings(vm.listings);
        });
    };
    vm.deleteListing = function(id){
        console.log('hi');
        
        BuyService.deleteBuyListingFromServer(id).then(function(){
            vm.getBuyListings();
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
    vm.getBuyListings();
})