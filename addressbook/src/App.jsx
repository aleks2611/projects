import "./App.scss";
import { AddressBook } from "./view/AddressBook/AddressBook";
import { AddressBookProvider } from "./view/AddressBook/AddressBookProvider/AddressBookProvider";

function App() {
  return (
    <AddressBookProvider>
      <AddressBook />
    </AddressBookProvider>
  );
}

export default App;
