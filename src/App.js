import { useState, useEffect } from "react";
import { CardListComponent, SearchBoxComponent } from "./components";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  console.log("rendering");

  useEffect(() => {
    async function fetchMonster() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(await response.json());
    }
    fetchMonster();
  }, []);

  useEffect(() => {
    const newFilterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilterMonsters(newFilterMonsters);
  }, [monsters, searchField]);

  const onSearchValueChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBoxComponent
        className="monsters-search-box"
        placeholder="Search for a monster"
        onChangeHandler={onSearchValueChange}
      />
      <CardListComponent monsters={filterMonsters} />
    </div>
  );
};

export default App;
