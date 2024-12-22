import "../styles/SelectPersonnelStyle.css";

export default function SelectPersonnel({
  personnelID,
  setPersonnelID,
  name,
  setName,
  lastName,
  setLastName,
  fatherName,
  setFatherName,
  nationalID,
  setNationalID,
}) {
  return (
    <section className="select-personnel">
      <p className="row"></p>
      <SelectPersonnelField value={personnelID} setValue={setPersonnelID}>
        کد پرسنلی
      </SelectPersonnelField>
      <SelectPersonnelField value={name} setValue={setName}>
        نام
      </SelectPersonnelField>
      <SelectPersonnelField value={lastName} setValue={setLastName}>
        نام خانوادگی
      </SelectPersonnelField>
      <SelectPersonnelField value={fatherName} setValue={setFatherName}>
        نام پدر
      </SelectPersonnelField>
      <SelectPersonnelField value={nationalID} setValue={setNationalID}>
        کد ملی
      </SelectPersonnelField>
    </section>
  );
}

function SelectPersonnelField({ children, value, setValue }) {
  return (
    <form className="select-personnel-field">
      <label>{children}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
