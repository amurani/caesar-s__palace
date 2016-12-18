define(['jquery'], function($) {

    function fetchData(url, data) {

        return new Promise(function(res, rej) {
           $.post( url, data, function(response) {
               res( JSON.parse(response) );
            }).fail( rej ).always(  );
        });
    }

    return {
        fetchData : fetchData
    }
});
