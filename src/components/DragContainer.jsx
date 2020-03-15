import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { v4 as uuid } from "uuid";
import data from "../data/data";
import DropContainer from "./DropContainer";

import '../sass/app.scss'

const DragContainer = () => {
  const [dragList, setDragList] = useState(data);

  return (
    <div className="builder-container">
      <ReactSortable
        className="drag-container"
        sort={false}
        group={{
          name: "groupName",
          pull: "clone",
          put: false
        }}
        animation={300}
        delayOnTouchStart={true}
        delay={3}
        list={dragList}
        setList={setDragList}
        clone={item => ({ ...item, id: uuid() })}
      >
        {dragList.map(item => (
          <div className="sortable-element" key={item.id}>
            <span>{item.name}</span>
          </div>
        ))}
      </ReactSortable>
      <div>
        <DropContainer />
      </div>
    </div>
  );
};

export default DragContainer;
