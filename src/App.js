import * as React from "react";

function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: "Angular",
      url: "https://angular.io",
      author: "Miško Hevery",
      num_comments: 2,
      points: 4,
      objectID: 3,
    },
    {
      title: "Webix",
      url: "https://webix.com/download/",
      author: "Bruno Denis",
      num_comments: 2,
      points: 3,
      objectID: 4,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(
    (story) =>
      story.title
        .toLowerCase()
        .includes(
          searchTerm
        ) /*Makes the story title lower case because the current way of searching things is to strict*/
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
}
const Search = (props) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />
  </div>
);
{
  /*Arrow functions do not need a return statement and use paranthesis instead of curly braces if you do not have anything in between the return statement you also DO NOT place a semicolon after the final statement*/
}
const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li key={props.item.objectID}>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);
export default App;
