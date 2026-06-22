import React, { useState, useCallback } from 'react';
import { View, FlatList, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Text } from 'react-native';

import { TransactionCard } from '@/components/transaction/TransactionCard';
import { TransactionTabBar } from '@/components/transaction/TransactionTabBar';
import { TRANSACTIONS } from '@/constants/transactions';
import { Transaction, TabType } from '@/types/transaction';

export const SearchInvoicesScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>('unpaid');

  const transactions = TRANSACTIONS.filter(i =>
    activeTab === 'unpaid' ? i.status === 'debt' : i.status === 'paid',
  );

  const handlePayPress = useCallback((transaction: Transaction) => {
    // TODO: navigate to payment screen
    console.log('Pay transaction:', transaction.transactionCode);
  }, []);

  const handleCodePress = useCallback((transaction: Transaction) => {
    // TODO: navigate to transaction detail
    console.log('View transaction detail:', transaction.transactionCode);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <TransactionTabBar activeTab={activeTab} onTabChange={setActiveTab} />

      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TransactionCard
            transaction={item}
            onPayPress={handlePayPress}
            onCodePress={handleCodePress}
          />
        )}
        ListEmptyComponent={<EmptyState />}
      />
    </View>
  );
};

function EmptyState() {
  return (
    <View style={styles.emptyState}>
      <Icon name="inbox" size={48} color="#C5CAD5" />
      <Text style={styles.emptyText}>Không có hóa đơn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 110,
    gap: 12,
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: 80,
    gap: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
});
