import {Geolocation, GeolocationReturnType} from "react-native";

class LocationFetcher {
    successCallback = (location: String) => {
    };

    public getCurrentLocation(success: (location: String) => void) {
        this.successCallback = success
        navigator.geolocation.requestAuthorization();
        navigator.geolocation.getCurrentPosition((position: GeolocationReturnType) => {
            
            let positionString = JSON.stringify(position);
            this.successCallback(positionString);
        });

        return;
    }

    positionArrived(position: GeolocationReturnType) {
        this.successCallback("arrived")
    }
}

export default LocationFetcher;