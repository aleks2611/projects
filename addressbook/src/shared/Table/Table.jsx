import classes from "./Table.module.css";

function Table({ columns, children }) {
  const columnsData = columns.map((data, index) => {
    return <th key={index}>{data}</th>;
  });

  return (
    <>
      <table className={classes["address-book--table"]}>
        <thead>
          <tr>{columnsData}</tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </>
  );
}
export default Table;
