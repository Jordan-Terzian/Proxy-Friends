import {StatusBar} from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useEffect, useState} from "react";

const originalLocations = [
    {
        lat: -33.872598,
        long: 151.206317,
        color: "blue",
        title: "",
        description: ""
    },
    {
        lat: -33.871038,
        long: 151.207602,
        color: "black",
        title: "State Theatre",
        description: ""
    },
    {
        lat: -33.86661,
        long: 151.207472,
        color: "black",
        title: "ivy",
        description: ""
    },
    {
        lat: -33.873304,
        long: 151.2083,
        color: "blue",
        title: "",
        description: ""
    },
    {
        lat: -33.869583,
        long: 151.205152,
        color: "blue",
        title: "",
        description: ""
    }
]

const MapHomeScreen = () => {
    const [showmt, setShowmt] = useState(false)
    const [filter, setFilter] = useState({p: true, a: true})
    const [locations, setLocations] = useState(originalLocations)
    useEffect(() => {
        const newLocs = []
        originalLocations.forEach((l) => {
            if (l.color === "blue" && filter.p) {
                newLocs.push(l)
            }
            if (l.color === "black" && filter.a){
                newLocs.push(l)
            }
        })
        setLocations(newLocs)
    }, [filter]);
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
                }} onPress={() => {
                    setShowmt(!showmt)
                }}>
                    <Text>Marker Type</Text>
                    <Icon name="chevron-down" size={15} color="#900"/>
                </Pressable>
                {
                    showmt ? <View style={{
                        position: "absolute",
                        top: 38,
                        right: 83,
                        width: 100,
                        backgroundColor: "#DDE2F5",
                        borderRadius: 5
                    }}>
                        <Pressable onPress={() => {setFilter({p: !filter.p, a: filter.a})}} style={{height: 35, justifyContent: "center", padding: 5}}><Text>People {filter.p ?
                            <Icon name="check-circle-o" size={15} color="#900"/> : null}</Text></Pressable>
                        <Pressable onPress={() => {setFilter({p: filter.p, a: !filter.a})}}
                            style={{height: 35, justifyContent: "center", padding: 5}}><Text>Activities {filter.a ?
                            <Icon name="check-circle-o" size={15} color="#900"/> : null}</Text></Pressable>
                    </View> : null
                }
            </View>
            <MapView
                style={styles.map}
                camera={{
                    center: {
                        latitude: -33.86955,
                        longitude: 151.20696,
                    },
                    pitch: 0,
                    altitude: 1850,
                    zoom: 1650
                }}
                showsPointsOfInterest={false}
                showsUserLocation={true}
            >
                {
                    locations.map((l, k)=>{
                        return <Marker key={k} coordinate={{latitude: l.lat, longitude: l.long}} pinColor={l.color} title={l.title}
                                       description={l.description}/>
                    })
                }
            </MapView>
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
