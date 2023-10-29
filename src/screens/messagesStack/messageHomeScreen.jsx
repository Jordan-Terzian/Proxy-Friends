import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const MessageHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Message Home Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default MessageHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
