import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView, { Marker } from 'react-native-maps';
const Map = () => {
  const [chargeLocation, setChargeLocation] = useState([{ item: {} }]);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <MapView
        camera={{
          center: {
            latitude: 35.90710840112608,
            longitude: 128.61331299999998,
          },
          pitch: 40,
          heading: 20,
          // Only on iOS MapKit, in meters. The property is ignored by Google Maps.
          altitude: 3000,

          // Only when using Google Maps.
          zoom: 15,
        }}
        style={styles.map}
      >
        {chargeLocation.map((item, index) => {
          return (
            <Marker
              title={item.name}
              description={item.content}
              image={require('../image/marker.png')}
              key={index}
              onPress={() => {
                setLoading(false);
                setCurrentCharge(item);
                console.log(item);
              }}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
            />
          );
        })}
      </MapView>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Skeleton section</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
