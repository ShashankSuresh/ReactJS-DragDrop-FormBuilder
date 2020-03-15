import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

import Button from "./ui-elements/Button";
import TextArea from "./ui-elements/TextArea";
import DropDown from "./ui-elements/DropDown";

import '../sass/app.scss'

const DropContainer = () => {
  const [dropList, setDropList] = useState([]);

  return (
    <div>
      <ReactSortable
        className="drop-container"
        sort={true}
        group={{
          name: "groupName",
          pull: false,
          put: true
        }}
        animation={300}
        delayOnTouchStart={true}
        delay={3}
        list={dropList}
        setList={setDropList}
      >
        {dropList.map(item => {
          {
            switch (item.type) {
              case "button":
                return <Button key={item.id} />;
              case "dropdown":
                return <DropDown key={item.id} options={item.options} />;
              case "text":
                return <TextArea key={item.id} />;
              default:
                return <span key="123456">{item.type}</span>;
            }
          }
        })}
      </ReactSortable>
    </div>
  );
};

export default DropContainer;
