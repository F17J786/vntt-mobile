import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Invoice } from '@/types/invoice';

type Props = {
  invoice: Invoice;
  isPaid: boolean;
  onPay: () => void;
};

export const InvoiceCard = ({ invoice, onPay }: Props) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <View style={styles.iconBox}>
        <Icon name="file-text" size={20} color="#E02424" />
      </View>

      <View style={styles.titleCol}>
        <Text style={styles.name}>{invoice.name}</Text>
        <Text style={styles.due}>Hạn cuối: {invoice.dueDate}</Text>
      </View>

      <TouchableOpacity style={styles.alertIcon} activeOpacity={0.7}>
        <Icon name="alert-circle" size={20} color="#EF4444" />
      </TouchableOpacity>
    </View>

    <View style={styles.footer}>
      <Text style={styles.amount}>{invoice.amount}</Text>
      <TouchableOpacity style={styles.payBtn} onPress={onPay} activeOpacity={0.8}>
        <Text style={styles.payBtnText}>THANH TOÁN</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 6,
    borderRadius: 28,
    padding: 20,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 4,
    marginBottom: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    position: 'relative',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCol: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  due: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 2,
  },
  alertIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E02424',
  },
  payBtn: {
    backgroundColor: '#E02424',
    borderRadius: 13,
    paddingHorizontal: 18,
    paddingVertical: 10,
    shadowColor: '#E02424',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 7,
  },
  payBtnText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
