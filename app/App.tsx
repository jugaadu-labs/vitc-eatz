import { StyleSheet } from 'react-native';
import { ExpoRoot } from 'expo-router';
import { styled } from 'nativewind';
import { View, Text, Pressable, Image } from 'react-native';

// Ensure all core components have styled applied
export const StyledView = styled(View);
export const StyledText = styled(Text);
export const StyledPressable = styled(Pressable);
export const StyledImage = styled(Image);

export default function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}
