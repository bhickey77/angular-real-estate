app.service('BuyService', function($http){
    let sv = this;
    sv.listings = '';
    sv.getBuyListingsFromServer = function(){
        return $http({
            method: 'GET',
            url: 'buylisting',
        }).then(function(response){
            sv.listings = response.data;
            console.log(`Received listings from server: ${response}`);
        }).catch(function(error){
            console.log(`Error in posting: ${error}`);
        })
    }
    sv.deleteBuyListingFromServer = function(id){
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