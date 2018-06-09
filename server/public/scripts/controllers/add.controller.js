app.controller('AddController', function(AddService){
    console.log('AddController loaded');
    let vm = this;
    vm.addListing = function(){  
        let objectToSend = {
            price: vm.price,
            sqft: vm.sqft,
            city: vm.city,
            type: vm.type,
            image: vm.image
        }      
        AddService.sendListingToServer(objectToSend);
    }
})