import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '@/constants/fonts';

interface TransactionDetailRowProps {
  label: string;
  value: string;
  valueColor?: string;
}

export function TransactionDetailRow({
  label,
  value,
  valueColor,
}: TransactionDetailRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[styles.value, valueColor ? { color: valueColor } : undefined]}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 11,
    fontFamily: Fonts.xBold,
    color: '#A3ADBA',
    letterSpacing: 0.6,
  },
  value: {
    fontSize: 13,
    fontWeight: '900',
    color: '#111827',
  },
});
