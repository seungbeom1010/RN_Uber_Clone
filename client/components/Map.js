import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { useSelector } from "react-redux";
import MapView from 'react-native-maps';
import { selectOrigin } from "../slices/navSlices";

const Map = () => {
    const origin = useSelector(selectOrigin);
    return (
        <MapView
        style={tw`flex-1`}
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />
    )
}

export default Map

const styles = StyleSheet.create({})
