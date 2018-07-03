function trainGroup() {
    var params = {
        "personGroupId": personGroupId
    };

    $.ajax({
            url: ApiHost + "/face/v1.0/persongroups/{personGroupId}/train?" + $.param(params),
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", FaceApiKey);
            },
            type: "POST",
            data: null,
        })
        .done(function (data) {
            return "Training in progress. Call getTrainingStatus() to get the status of the group training.";
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            return jqXHR.responseText;
        });
}