import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper';


const CustomRadioButton = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
      <View>
        {/* Add a label */}
        <Text>Choose an option:</Text>
        
        {/* Create a RadioButton.Group */}
        <RadioButton.Group
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
        >
          {/* Create individual radio buttons with labels */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="option1" color="blue" />
            <Text>Option 1</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="option2" color="red" />
            <Text>Option 2</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="option3" color="green" />
            <Text>Option 3</Text>
          </View>
        </RadioButton.Group>
  
        {/* Display the selected value */}
        <Text>Selected Value: {selectedValue}</Text>
      </View>
    );
}

export default CustomRadioButton

const styles = StyleSheet.create({})