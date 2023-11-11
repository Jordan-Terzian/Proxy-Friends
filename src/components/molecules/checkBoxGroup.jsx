import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';


import Metrics from '../../constants/metrics';



const CheckboxGroup = ({ options, selectedOption, onOptionChange }) => {

  const styles = createStyles();

  return (
    <View>
      <View style={styles.lineSeparator} />
      {options.map((option) => (
        <View key={option}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity style={styles.checkbox} onPress={() => onOptionChange(option)}>
              {selectedOption === option && (
                <View style={styles.checkboxInner} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onOptionChange(option)}>
              <Text style={styles.text}>{option}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineSeparator} />
        </View>
      ))}
    </View>
  );
};

const createStyles = () =>
  StyleSheet.create({
    checkboxContainer: {
      flexDirection: 'row',
      padding: Metrics.screenWidth * 0.022
    },
    checkbox: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#DDE2F5',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8
    },
    checkboxInner: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'black'
    },
    lineSeparator: {
      height: 1,
      backgroundColor: '#D9D9D9',
      width: '100%'
    }, 
    text: {
      fontSize: 17,
      lineHeight: 20,
      color: 'black',
    }
  });

export default CheckboxGroup;
