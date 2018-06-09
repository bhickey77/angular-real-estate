app.service('AddService', function($http){
    let sv = this;
    sv.sendListingToServer = function(objectToSend){
        $http({
            method: 'POST',
            url: '/listing',
            data: objectToSend
        }).then(function(response){
            console.log(`Posted ${objectToSend} and received response: ${response}.`);
        }).catch(function(error){
            console.log(`Error in posting: ${error}.`);
        });
    }
});