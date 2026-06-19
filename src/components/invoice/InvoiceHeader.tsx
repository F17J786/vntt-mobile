import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { BLUE } from '@/components/home/HomeHeader';

type Props = {
  onSearchPress: () => void;
  onDeviceListPress?: () => void;
};

export const InvoiceHeader = ({ onSearchPress, onDeviceListPress }: Props) => (
  <View style={styles.header}>
    <Text style={styles.title}>HÓA ĐƠN</Text>
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.75}
        onPress={onSearchPress}
      >
        <Icon name="search" size={22} color="#fff" />
        <Text style={styles.btnText}>Tra cứu giao dịch</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.75}
        onPress={onDeviceListPress}
      >
        <Icon name="wifi" size={22} color="#fff" />
        <Text style={styles.btnText}>Danh sách thiết bị</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: BLUE,
    paddingBottom: 30,
    paddingHorizontal: 22,
    paddingTop: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 26,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  btn: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 24,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    gap: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
});
