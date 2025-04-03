import { Image, StyleSheet, Platform } from 'react-native';
import { StyledView, StyledText } from '../../App';

export default function HomeScreen() {
  return (
    <StyledView>
      <StyledText className='text-white'>
        Hello User! Welcome to home
      </StyledText>
    </StyledView>
  );
}
