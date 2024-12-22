import "../styles/OperationStyle.css";

export default function Operation() {
  return (
    <form className="operation">
      <Button>ایجاد مأموریت</Button>
      <Button>مدیریت مأموریت</Button>
    </form>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}
