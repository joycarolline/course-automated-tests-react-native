import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSwipe } from '../../hooks/useSwipe';
import styles from './styles';

const DateClock = (): JSX.Element => {
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
  const [date, setDate] = useState(new Date());

  function onSwipeLeft() {
    const d = date.setDate(date.getDate() + 1);
    setDate(new Date(d));
  }

  function onSwipeRight() {
    const d = date.setDate(date.getDate() - 1);
    setDate(new Date(d));
  }

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <TouchableOpacity>
      <View
        testID="date-clock"
        style={styles.container}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}>
        <Text style={styles.date}>{date.getDate()}</Text>
        <Text style={styles.month}>{monthNames[date.getMonth()]}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DateClock;
