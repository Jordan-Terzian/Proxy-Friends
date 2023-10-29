import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const MapHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Map Home Screen</Text>
      <StatusBar style="auto" />
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
});
