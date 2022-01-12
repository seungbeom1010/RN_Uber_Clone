import React from 'react'
import { View, SafeAreaView, Image, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from "react-redux";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlices";
import NavFavorites from '../components/NavFavorites';


const HomeScreen = () => {
    const dispatch = useDispatch();
    // reducer 모듈 액션 실행 
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    style={{
                        width: 100, 
                        height: 100, 
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
                <GooglePlacesAutocomplete 
                    placeholder="현재 위치를 입력해주세요."
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 20,
                        }
                    }}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description
                        }));

                        dispatch(setDestination(null));
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'kor'
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />
                <NavOptions />
                <NavFavorites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen