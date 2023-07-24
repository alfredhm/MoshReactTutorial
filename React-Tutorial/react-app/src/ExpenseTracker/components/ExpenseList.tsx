import styles from "../ExpenseTracker.module.css";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <table className={styles.expenseTable}>
      <thead>
        <tr>
          <th className={styles.expenseTableData}>Description</th>
          <th className={styles.expenseTableData}>Amount</th>
          <th className={styles.expenseTableData}>Category</th>
          <th className={styles.expenseTableData}></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td className={styles.expenseTableData}>{expense.description}</td>
            <td className={styles.expenseTableData}>
              ${expense.amount.toFixed(2)}
            </td>
            <td className={styles.expenseTableData}>{expense.category}</td>
            <td className={styles.expenseTableData}>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className={styles.expenseTableData}>Total</td>
          <td className={styles.expenseTableData}>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td className={styles.expenseTableData}></td>
          <td className={styles.expenseTableData}></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
