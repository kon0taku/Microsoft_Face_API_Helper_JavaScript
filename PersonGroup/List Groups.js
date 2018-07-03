function listGroups(){
	     var params = {
            // Request parameters
            "top": numToReturn,
        };
      
        $.ajax({
            url: ApiHost+"/face/v1.0/persongroups?" + $.param(params),
            beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",FaceApiKey);
            },
            type: "GET",
            data: null,
        })
        .done(function (data) {
            return data;
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            return jqXHR.responseText;
        });
}