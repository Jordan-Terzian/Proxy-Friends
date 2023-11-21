import {StatusBar} from 'expo-status-bar';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome'
import {useEffect, useState} from "react";

import flag from '../../assets/flag.png'
import person from '../../assets/profilecircle.png'
import Ticket from '../../assets/Ticket.png'
import Pin from '../../assets/Pin.png'
import Time from '../../assets/Time.png'
import People from '../../assets/People.png'
import Host from '../../assets/Host.png'
import Description from '../../assets/Text.png'

const originalLocations = [
    {
        lat: -33.872598,
        long: 151.206317,
        color: "blue",
        title: "Go for a drink",
        description: "Join me and my friends for a drink",
        host: "Bob",
        location: "Grandmas Bar",
        qty: 1
    },
    {
        lat: -33.871038,
        long: 151.207602,
        color: "black",
        title: "Mama Mia",
        description: "Join me and my friends for a fun show",
        host: "Annie",
        location: "State Theatre",
        qty: 10
    },
    {
        lat: -33.86661,
        long: 151.207472,
        color: "black",
        title: "WAO",
        description: "Join me and my friends for a night of clubbing",
        host: "Jordan",
        location: "ivy",
        qty: 6
    },
    {
        lat: -33.873304,
        long: 151.2083,
        color: "blue",
        title: "Dinner",
        description: "Join me and my friends for a fun dinner",
        host: "Harshil",
        location: "Cnr Park & Pitt St",
        qty: 1
    },
    {
        lat: -33.869583,
        long: 151.205152,
        color: "blue",
        title: "Walking tour",
        description: "Join me and my friends for fun discoveries",
        host: "James",
        location: "Hong Kong House",
        qty: 10
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
            if (l.color === "black" && filter.a) {
                newLocs.push(l)
            }
        })
        setLocations(newLocs)
    }, [filter]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Filter by:</Text>
                <Pressable style={styles.dropdown}>
                    <Text>Distance</Text>
                    <Icon name="chevron-down" size={15} color="#900"/>
                </Pressable>
                <Pressable style={styles.dropdown} onPress={() => {
                    setShowmt(!showmt)
                }}>
                    <Text>Marker Type</Text>
                    <Icon name="chevron-down" size={15} color="#900"/>
                </Pressable>
                {
                    showmt ? <View style={styles.dropdownOptions}>
                        <Pressable onPress={() => {
                            setFilter({p: !filter.p, a: filter.a})
                        }} style={{height: 35, justifyContent: "center", padding: 5}}><Text>People {filter.p ?
                            <Icon name="check-circle-o" size={15} color="#900"/> : null}</Text></Pressable>
                        <Pressable onPress={() => {
                            setFilter({p: filter.p, a: !filter.a})
                        }}
                                   style={{
                                       height: 35,
                                       justifyContent: "center",
                                       padding: 5
                                   }}><Text>Activities {filter.a ?
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
                    locations.map((l, k) => {
                        return <Marker key={k} coordinate={{latitude: l.lat, longitude: l.long}} title={l.title}
                                       description={l.description}>
                            <Image source={l.color === "black" ? flag : person} style={{width: 30, height: 30}}/>
                            <Callout style={styles.callout}>
                                <View>
                                    <Text style={{fontWeight: 800, textAlign: "center"}}>{l.color === "black" ? "ACTIVITY" : "PERSON"}</Text>
                                    <View style={styles.calloutRow}>
                                        <Image source={Ticket} style={styles.calloutIcon} width={10} height={10}/>
                                        <Text>{l.title}</Text>
                                    </View>
                                    <View style={styles.calloutRow}>
                                        <Image source={Pin} style={styles.calloutIcon} width={10} height={10}/>
                                        <Text>{l.location}</Text>
                                    </View>
                                    <View style={styles.calloutRow}>
                                        <Image source={Time} style={styles.calloutIcon} width={10} height={10}/>
                                        <Text>12/12/2023, 12pm-2pm</Text>
                                    </View>
                                    <View style={styles.calloutRow}>
                                        <Image source={People} style={styles.calloutIcon} width={10} height={10}/>
                                        <Text>{l.qty} attendees</Text>
                                    </View>
                                    <View style={styles.calloutRow}>
                                        <Image source={Host} style={styles.calloutIcon} width={10} height={10}/>
                                        <Text>{l.host}</Text>
                                    </View>
                                    <View style={styles.calloutRow}>
                                        <Image source={Description} style={styles.calloutIcon} width={10}
                                               height={10}/>
                                        <Text>{l.description}</Text>
                                    </View>
                                    <Pressable style={styles.calloutButton}><Text>Join</Text></Pressable>
                                </View>
                            </Callout>
                        </Marker>
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
    header: {
        position: "absolute",
        top: 55,
        backgroundColor: "white",
        zIndex: 2,
        width: "90%",
        padding: 10,
        borderRadius: 15,
        flexDirection: "row",
        gap: 15
    },
    headerTitle: {
        fontWeight: "700", fontSize: 17, display: "flex", alignSelf: "center"
    },
    dropdown: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        backgroundColor: "#DDE2F5",
        padding: 5,
        borderRadius: 10
    },
    dropdownOptions: {
        position: "absolute",
        top: 38,
        right: 83,
        width: 100,
        backgroundColor: "#DDE2F5",
        borderRadius: 5
    },
    callout: {
        display: "flex", width: 350, backgroundColor: "#DDE2F5", padding: 20
    },
    calloutRow: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        height: 30
    },
    calloutButton: {
        backgroundColor: "#5495FF",
        width: 100,
        padding: 8,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 20
    },
    calloutIcon: {
        width: 20, height: 20
    }
});
