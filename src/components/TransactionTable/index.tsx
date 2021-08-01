import { useEffect, useState } from "react";

import { api } from "../../services/api";
// import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // const { transactions } = useTransactions();

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>

              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
                {/* {transaction.amount} */}
              </td>

              <td>{transaction.category}</td>

              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createAt)
                )}
                {/* {transaction.createAt} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
