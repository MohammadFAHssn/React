import "../styles/AppStyle.css";

import Logo from "./Logo";

function App() {
  return (
    <section className="create-business-trip">
      <Logo />
      <Forms />
    </section>
  );
}

function Forms() {
  return (
    <section className="forms">
      <form>
        <label>محل مأموریت</label>
        <input list="mahaleEzam"></input>
        <datalist id="mahaleEzam">
          <option>یزد</option>
          <option>عقدا</option>
        </datalist>
      </form>
      <form>
        <label>تاریخ اعزام</label>
        <input type="text"></input>
      </form>
      <form>
        <label>تاریخ بازگشت</label>
        <input type="text"></input>
      </form>
      <form>
        <label>واحد اعزام کننده</label>
        <input type="text"></input>
      </form>
      <form>
        <label>موضوع مأموریت</label>
        <input type="text"></input>
      </form>
      <form>
        <label>تعداد همکاران</label>
        <input type="text"></input>
      </form>
      <form>
        <label>وسیله نقلیه</label>
        <input type="text"></input>
      </form>
    </section>
  );
}

export default App;
