app.controller('AddController', function(AddService){
    console.log('AddController loaded');
    let vm = this;
    vm.image = 'choose';
    vm.addListing = function(){  
        let objectToSend = {
            price: vm.price,
            sqft: vm.sqft,
            city: vm.city,
            type: vm.type,
            image: vm.image
        }      
        console.log('obj to send', objectToSend);
        AddService.sendListingToServer(objectToSend);
        vm.resetFields();
    }
    vm.resetFields = function(){
        vm.price = '';
        vm.sqft = '';
        vm.city = '';
        vm.type = '';
        vm.image = 'choose';
    }
})