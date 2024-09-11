import React from "react";

const MainContent = () => {
  return (
    <div>
      <div>
        <label for="getUp">Get up</label>
        <input type="checkbox" name="getUp" />
      </div>
      <div>
        <label for="work">Work</label>
        <input type="checkbox" name="work" />
      </div>
      <div>
        <label for="home">Home</label>
        <input type="checkbox" name="home" />
      </div>
      <div>
        <label for="homework">Homework</label>
        <input type="checkbox" name="homework" />
      </div>
    </div>
  );
};

export default MainContent;
