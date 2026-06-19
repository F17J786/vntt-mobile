import { useState, useCallback } from 'react';

export const useInvoices = () => {
  const [paidIds, setPaidIds] = useState<number[]>([]);

  const handlePay = useCallback((id: number) => {
    setPaidIds(prev => [...prev, id]);
  }, []);

  const isPaid = useCallback(
    (id: number) => paidIds.includes(id),
    [paidIds],
  );

  return { paidIds, handlePay, isPaid };
};
