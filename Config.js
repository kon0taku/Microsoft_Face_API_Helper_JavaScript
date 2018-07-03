var 
    //Group that your person is going to be saved in/ manually set when creating a group
    personGroupId,

    //ID of the person who's profile you're uploading the image to
    personId,

    //Name of the person who's profile you're uploading the image to/ creating
    personName,

    //Person group display name. The maximum length is 128
    groupName,

    //The name of your uploaded image
    imageName,

    //URL that points to your uploaded image
    imageURL,

    //The faceId that is returned when you detect a face in an image
    face,

    //Your Face API key that you get from Azure
    FaceApiKey,

    //The API host URL that you get from Azure
    //NOTE: this is just the first part of the URL. E.G. "https://westus.api.cognitive.microsoft.com"
    ApiHost,

    //Any addidional details you want to be added to the person's profile
    personDetails,

    //Any addidional details you want to be added to the created group
    groupDetails,

    //This is a bool that will generally stay true.
    //It's the ID that is returned when detecting a face.
    //This is used to identify people and upload faces to profiles
    returnFaceId= true,

    //Bool that returns landmarks for the detected face
    returnFaceLandmarks,

    //Available attributes include:
    //age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise
    //These must be separated by a comma
    returnFaceAttributes,

    //The number of people or groups you want returned. 
    //NOTE: limit is 1000
    numToReturn= 10,

    //The number of people identified with identifyFace()
    //NOTE: limit is 10
    maxNumOfCandidatesReturned=10,

    //The confidence score a match must meet before it is returned in the identifyFace() function
    confidenceThreshold=0.6

;