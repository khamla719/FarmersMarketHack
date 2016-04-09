//Use the zip code and return all market ids in area.
    var marketId = []; //returned from the API
    var allLatlng = []; //returned from the API
    var allMarkers = []; //returned from the API
    var marketName = []; //returned from the API
    var infowindow = null;
    var pos;
    var userCords;
    var tempMarkerHolder = [];

    var userZip = 94578;
    var accessURL;

    if(userZip){
      accessURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + userZip;
    } else {
      accessURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + userCords.latitude + "&lng=" + userCords.longitude;
    }


      //Use the zip code and return all market ids in area.
      $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: accessURL,
        dataType: 'jsonp',
        success: function (data) {

         $.each(data.results, function (i, val) {
          marketId.push(val.id);
          marketName.push(val.marketname);
        });

         console.log(marketName);

       }
     })

