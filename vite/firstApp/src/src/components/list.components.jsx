import React from 'react'

const ListComponent = () => {
    const data = [
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
      ];
  return (
    <div>
      <hr />
      <h2>List of Objects</h2>
      {data.map((elem) => {
        return <li key={elem.objectID}>{elem.title}</li>
      })}
    </div>
  )
}

export default ListComponent
