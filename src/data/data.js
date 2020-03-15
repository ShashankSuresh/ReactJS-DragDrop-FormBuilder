import { v4 as uuid } from 'uuid';

export default [
  {
    id: 1,
    type: "button",
    name: 'Button',
  },
  {
    id: 2,
    type: "text",
    name: 'Text',
  },
  {
    id: 3,
    type: "dropdown",
    options: [
      { value: 'USA', name: 'USA', key: uuid() },
      { value: 'CANADA', name: 'CANADA', key: uuid() }   
    ],
    name: 'Dropdown',
  },
].map(({ id, name, type, options }) => {
  return {
    id: uuid(),
    name,
    type,
    options: options ? options : "",
  };
});
