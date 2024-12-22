import "../styles/AppStyle.css";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Logo from "./Logo";
import SelectPersonnel from "./SelectPersonnel";
import Personnel from "./Personnel";
import Operation from "./Operation";
// import { getPersonnel } from "../apiPersonnel";

// npm i @tanstack/react-query
// npm i @tanstack/react-query-devtools

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  // useEffect();
  // getPersonnel().then(
  //   (data) => console.log(data),
  //   (err) => console.log(err)
  // );

  const [personnelID, setPersonnelID] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [nationalID, setNationalID] = useState("");

  const [selectedPersonnel, setSelectedPersonnel] = useState([]);

  console.log(selectedPersonnel);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <section className="business-trip">
        <Logo />
        <SelectPersonnel
          personnelID={personnelID}
          setPersonnelID={setPersonnelID}
          name={name}
          setName={setName}
          lastName={lastName}
          setLastName={setLastName}
          fatherName={fatherName}
          setFatherName={setFatherName}
          nationalID={nationalID}
          setNationalID={setNationalID}
        />
        <Personnel
          personnelID={personnelID}
          name={name}
          lastName={lastName}
          fatherName={fatherName}
          nationalID={nationalID}
          selectedPersonnel={selectedPersonnel}
          setSelectedPersonnel={setSelectedPersonnel}
        />
        <Operation />
      </section>
    </QueryClientProvider>
  );
}

export default App;
