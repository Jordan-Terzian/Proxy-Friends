import {StatusBar} from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome'

const MapHomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                position: "absolute",
                top: 55,
                backgroundColor: "white",
                zIndex: 2,
                width: "90%",
                padding: 10,
                borderRadius: 15,
                flexDirection: "row",
                gap: 15
            }}>
                <Text style={{fontWeight: "700", fontSize: 17, display: "flex", alignSelf: "center"}}>Filter by:</Text>
                <Pressable style={{
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                    backgroundColor: "#DDE2F5",
                    padding: 5,
                    borderRadius: 10
                }}>
                    <Text>Distance</Text>
                    <Icon name="chevron-down" size={15} color="#900"/>
                </Pressable>
                <Pressable style={{
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                    backgroundColor: "#DDE2F5",
                    padding: 5,
                    borderRadius: 10
                }}>
                    <Text>Marker Type</Text>
                    <Icon name="chevron-down" size={15} color="#900"/>
                </Pressable>
            </View>
            <MapView
                style={styles.map}
                camera={{
                    center: {
                        latitude: -33.87055,
                        longitude: 151.20596,
                    },
                    pitch: 40,
                    altitude: 1450,
                    zoom: 1650
                }}
                showsPointsOfInterest={true}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

export default MapHomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
