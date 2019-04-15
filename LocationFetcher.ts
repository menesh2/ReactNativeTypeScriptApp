import { Geolocation, GeolocationReturnType } from "react-native";

export default class LocationFetcher {
    successCallback = (location: String) => {};

    getCurrentLocation(success: (location: String) => void) {
        this.successCallback = success
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition(this.positionArrived);
        
        return;
    }

    positionArrived(position: GeolocationReturnType) {
        this.successCallback("arrived")
    }
}