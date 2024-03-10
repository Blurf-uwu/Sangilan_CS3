function typhoonCategory(windSpeed){

    var category = "";

    switch(true){
        case (windSpeed < 39):
            category = "Signal #0";
            break;
        case (windSpeed >= 39 && windSpeed <= 61):
            category = "Signal #1";
            break;
        case (windSpeed >= 62 && windSpeed <= 88):
            category = "Signal #2";
            break;
        case (windSpeed >= 89 && windSpeed <= 117):
            category = "Signal #3";
            break;
        case (windSpeed >= 118 && windSpeed <= 184):
            category = "Signal #4";
            break;
        default:
            category = "Signal #5";
            break;
    }
    return category;
}