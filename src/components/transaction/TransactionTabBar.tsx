import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Fonts } from '@/constants/fonts';
import { TabType } from '@/types/transaction';

interface Tab {
  key: TabType;
  label: string;
}

const TABS: Tab[] = [
  { key: 'unpaid', label: 'Chưa thanh toán' },
  { key: 'paid', label: 'Đã thanh toán' },
];

interface TransactionTabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function TransactionTabBar({
  activeTab,
  onTabChange,
}: TransactionTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {TABS.map(tab => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, isActive && styles.tabActive]}
            activeOpacity={0.85}
            onPress={() => onTabChange(tab.key)}
          >
            <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 4,
    borderRadius: 14,
    padding: 3,
    gap: 6,
  },
  tab: {
    flex: 1,
    padding: 14,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5EAF1',
  },
  tabActive: {
    backgroundColor: '#2563EB',
    shadowColor: '#2563EB',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 12,
    borderColor: 'transparent',
  },
  tabText: {
    fontSize: 13.5,
    fontFamily: Fonts.xBold,
    color: '#6B7280',
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
