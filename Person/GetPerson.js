function getPerson(id) {
    if(personId == null && id==null){
        return "Please provide the ID of the person you wish to retrieve";
    }

    if (id == null) {
        id = personId;
    }
    var params = {
        "personGroupId": personGroupId,
        "personId": id
    };

    $.ajax({
            url:
                ApiHost +
                    "/face/v1.0/persongroups/{personGroupId}/persons/{personId}?" +
                    $.param(params),
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", FaceApiKey);
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