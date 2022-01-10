import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlices';
import { useNavigation } from '@react-navigation/native';
import RideOptionsCard from './RideOptionsCard';
import NavFavorites from './NavFavorites';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Seungbeom</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete 
                    placeholder="Where to?"
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    minLength={2}
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description,
                            })
                        );
                        navigation.navigate("RideOptionsCard");
                    }}
                    enablePoweredByContainer={false}
                    nearbyPlaceAPI="GooglePlacesSearch"
                    debounce={400}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language:"en",
                    }}
                    />
                </View>
                <NavFavorites />
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
})
