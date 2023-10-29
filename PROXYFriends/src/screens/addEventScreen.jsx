import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const AddEventScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the add event Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default AddEventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
