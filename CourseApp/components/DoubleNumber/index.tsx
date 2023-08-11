import {Text, View} from 'react-native';

type Props = {
  num: number;
};

const DoubleNumber = ({num}: Props) => {
  return (
    <View>
      <Text>{num * num}</Text>
    </View>
  );
};

export default DoubleNumber;
