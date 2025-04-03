import { Ionicons } from '@expo/vector-icons';
import React from 'react';

interface IconProps {
  name: any;
  color: string;
  size: number;
}

export function IconSymbol({ name, color, size }: IconProps) {
  return <Ionicons name={name} size={size} color={color} />;
}
