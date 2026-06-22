import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Fonts } from '@/constants/fonts';
import { Transaction } from '@/types/transaction';
import { TransactionDetailRow } from './TransactionDetailRow';

interface TransactionCardProps {
  transaction: Transaction;
  onPayPress?: (transaction: Transaction) => void;
  onCodePress?: (transaction: Transaction) => void;
}

export function TransactionCard({
  transaction,
  onPayPress,
  onCodePress,
}: TransactionCardProps) {
  const isDebt = transaction.status === 'debt';

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.cardHeader}>
        <View style={styles.iconWrap}>
          <Icon name="credit-card" size={18} color="#D65A5A" />
        </View>

        <View style={styles.titleBlock}>
          <Text style={styles.title}>{transaction.title}</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.codeRow}
            onPress={() => onCodePress?.(transaction)}
          >
            <Text style={styles.code}>
              SỐ HĐ: {transaction.transactionCode}
            </Text>
            <Icon
              name="external-link"
              size={12}
              color="#3564F0"
              style={styles.codeIcon}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[styles.badge, isDebt ? styles.badgeDebt : styles.badgePaid]}
        >
          <Text
            style={[
              styles.badgeText,
              isDebt ? styles.badgeTextDebt : styles.badgeTextPaid,
            ]}
          >
            {isDebt ? 'NỢ CƯỚC' : 'ĐÃ TRẢ'}
          </Text>
        </View>
      </View>

      {/* Detail block */}
      <View style={styles.detailContainer}>
        <View style={styles.detailRows}>
          <TransactionDetailRow
            label="NGÀY HÓA ĐƠN"
            value={transaction.transactionDate}
          />
          <TransactionDetailRow
            label="SỐ TIỀN NỢ"
            value={transaction.debtAmount}
          />
          <TransactionDetailRow
            label="ĐÃ THANH TOÁN"
            value={transaction.paidAmount}
            valueColor="#16A34A"
          />
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>CẦN THANH TOÁN</Text>
          <Text style={styles.totalValue}>{transaction.remainingAmount}</Text>
        </View>
      </View>

      {/* Pay button — chỉ hiện khi còn nợ */}
      {isDebt && (
        <TouchableOpacity
          style={styles.payBtn}
          activeOpacity={0.85}
          onPress={() => onPayPress?.(transaction)}
        >
          <Text style={styles.payBtnText}>Thanh toán điện tử</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 0.8,
  },

  // Header
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: 16,
    backgroundColor: '#FFF5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '900',
    color: '#111827',
    lineHeight: 20,
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  code: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#3564F0',
    marginTop: 3,
  },
  codeIcon: {
    marginLeft: 4,
    marginTop: 3,
  },

  // Badge
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
  },
  badgeDebt: { backgroundColor: '#FFF3F3' },
  badgePaid: { backgroundColor: '#ECFDF3' },
  badgeText: { fontSize: 9, fontWeight: '900' },
  badgeTextDebt: { color: '#D65A5A' },
  badgeTextPaid: { color: '#16A34A' },

  // Detail block
  detailContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#E8ECF1',
    backgroundColor: '#F5F6FA',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  detailRows: { gap: 8 },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E8ECF1',
    paddingTop: 12,
    marginTop: 12,
  },
  totalLabel: {
    fontSize: 11.5,
    fontFamily: Fonts.xBold,
    color: '#111827',
  },
  totalValue: {
    fontSize: 13,
    fontWeight: '900',
    color: '#D94A4A',
  },

  // Pay button
  payBtn: {
    paddingVertical: 13,
    borderRadius: 22,
    backgroundColor: '#3B66F6',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payBtnText: {
    color: '#FFFFFF',
    fontSize: 14.5,
    fontFamily: Fonts.xBold,
  },
});
