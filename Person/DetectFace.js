function detectFace() {

    var params = {
        "returnFaceId": returnFaceId,
        "returnFaceLandmarks": returnFaceLandmarks,
        "returnFaceAttributes":returnFaceAttributes
    };

    $.ajax({
        url: ApiHost + "/face/v1.0/detect?" + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", FaceApiKey);
            xhrObj.contentType = "application/octet-stream";
        },
        type: "POST",
        data: JSON.stringify({ url: imageURL })
    })
        .done(function (data) {
            try {
                face = data["0"].faceId;

            } catch (e) {
                return e.message;
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            return jqXHR.responseText;
        });

        return face;
}