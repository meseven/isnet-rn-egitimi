import { useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import useMessageStore from "../store/useMessageStore";

const Map = () => {
  const messages = useMessageStore((state) => state.messages);
  const userLocation = useMessageStore((state) => state.userLocation);
  const focusedLocation = useMessageStore((state) => state.focusedLocation);
  const setUserLocation = useMessageStore((state) => state.setUserLocation);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  let region = {
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
  };

  if (focusedLocation) {
    region = focusedLocation;
  }

  return (
    <MapView
      style={styles.map}
      showsUserLocation
      region={{
        ...region,
        latitudeDelta: 0.0302,
        longitudeDelta: 0.0121,
      }}
    >
      {messages.map((message) => (
        <Marker
          key={message.id}
          coordinate={{
            latitude: message.latitude,
            longitude: message.longitude,
          }}
          title={"Mesaj"}
          description={message.text}
        />
      ))}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
