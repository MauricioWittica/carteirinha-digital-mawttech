import React from 'react';
import { Checkbox, Paragraph } from 'react-native-paper';

const CheckBoxSing = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox
    
      status={checked ? 'checked' : 'unchecked'}
      
      onPress={() => {
        setChecked(!checked);
      }}
    />
    
  );
};

export default CheckBoxSing;