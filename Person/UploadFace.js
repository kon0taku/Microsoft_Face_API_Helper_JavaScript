function uploadFace() {
    if (personId == null && personName == null) {
        return "Please provide either a person's ID or a person's name.";
    }
    if (personId == null) {
            var params = {
                "personGroupId": personGroupId
            };

            $.ajax({
                url: ApiHost + "/face/v1.0/persongroups/{personGroupId}/persons?" + $.param(params),
                beforeSend: function (xhrObj) {
                    xhrObj.setRequestHeader("Content-Type", "application/json");
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", FaceApiKey);
                },
                type: "POST",
                data: JSON.stringify({ name: personName, userData: personDetails}),
            })
                .done(function (data) {
                    return data;
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    return jqXHR.responseText;
                });
    } else {
            var params = {
                "personGroupId": personGroupId,
                "personId": personId
            };

            $.ajax({
                url: ApiHost + "/face/v1.0/persongroups/{personGroupId}/persons/{personId}/persistedFaces?" +
                    $.param(params),
                beforeSend: function (xhrObj) {
                    xhrObj.setRequestHeader("Content-Type", "application/json");
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", FaceApiKey);
                },
                type: "POST",
                data: JSON.stringify({url: imageURL })
            })
                .done(function (data) {
                    return data;
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    return jqXHR.responseText;
                });
    }
    
}