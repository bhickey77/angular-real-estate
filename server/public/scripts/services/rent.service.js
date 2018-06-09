app.service('RentService', function($http){
    let sv = this;
    sv.listings = '';
    sv.getRentalListingsFromServer = function(){
        return $http({
            method: 'GET',
            url: 'rentlisting',
        }).then(function(response){
            sv.listings = response.data;
            console.log(`Received listings from server: ${response}`);
        }).catch(function(error){
            console.log(`Error in posting: ${error}`);
        })
    }
    sv.deleteRentListingFromServer = function(id){
        return $http({
            method: 'DELETE',
            url: `listing/${id}`
        }).then(function(response){
            console.log(`Successfully deleted ${id}`);
        }).catch(function(error){
            console.log(`Error in deleting: ${error}`);
        });
    }
})