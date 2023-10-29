import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const PeopleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the People Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default PeopleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
