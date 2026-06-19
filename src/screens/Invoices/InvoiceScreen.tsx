import React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { InvoiceStackParamList } from '@/types/navigation';
import { INVOICES } from '@/constants/invoices';
import { useInvoices } from '@/hooks/useInvoices';
import { InvoiceCard } from '@/components/invoice/InvoiceCard';
import { InvoiceHeader } from '@/components/invoice/InvoiceHeader';
import { Invoice } from '@/types/invoice';

export const InvoiceScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<InvoiceStackParamList>>();
  const { handlePay, isPaid } = useInvoices();

  const renderItem = ({ item }: { item: Invoice }) => (
    <InvoiceCard
      invoice={item}
      isPaid={isPaid(item.id)}
      onPay={() => handlePay(item.id)}
    />
  );

  const keyExtractor = (item: Invoice) => String(item.id);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#1B53DC" />

      <InvoiceHeader
        onSearchPress={() => navigation.navigate('SearchInvoices')}
      />

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Đến hạn thanh toán</Text>

        <FlatList
          data={INVOICES}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  body: {
    padding: 16,
    paddingBottom: 0,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111',
    marginTop: 4,
    marginLeft: 7,
    marginBottom: 15,
  },
  listContent: {
    paddingBottom: 95,
  },
});
