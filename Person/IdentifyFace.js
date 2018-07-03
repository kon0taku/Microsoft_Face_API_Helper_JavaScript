function identifyFace() {
    $.ajax({
        url: ApiHost + "/face/v1.0/identify?",
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", FaceApiKey);
        },
        type: "POST",
        data: '{"PersonGroupId":"' +
            personGroupId +
            '",' +
            '"faceIds":["' +
            face +
            '"],' +
            '"maxNumOfCandidatesReturned": '+maxNumOfCandidatesReturned+',' +
            '"confidenceThreshold": '+confidenceThreshold+'}'
    })
        .done(function (data) {
            var pId;
            try {
                pId = data["0"].candidates["0"].personId;
            } catch (e) {
                return "Face Not Detected.";
            }
            getPerson(pId);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            return jqXHR.responseText;
        });
}