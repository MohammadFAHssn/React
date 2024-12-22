import "../styles/Logostyle.css";

export default function Logo() {
  return (
    <section className="logo">
      <img src={require("../images/person2.png")} alt=""></img>
      <p>نرم افزار مديریت مأموریت اداری</p>
    </section>
  );
}
