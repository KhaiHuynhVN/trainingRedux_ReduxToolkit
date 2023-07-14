import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todoListSlice } from '../TodoList';

const priorityColorMapping = {
   High: 'red',
   Medium: 'blue',
   Low: 'gray',
};

export default function Todo({ dataID, name, type, completed }) {
   const [checked, setChecked] = useState(completed);
   const dispatch = useDispatch();

   const toggleCheckbox = () => {
      setChecked(!checked);
      dispatch(todoListSlice.actions.setCompleted({ dataID, checked: !checked }));
   };

   return (
      <Row
         justify="space-between"
         style={{
            marginBottom: 3,
            ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
         }}
      >
         <Checkbox checked={checked} onChange={toggleCheckbox}>
            {name}
         </Checkbox>
         <Tag color={priorityColorMapping[type]} style={{ margin: 0 }}>
            {type}
         </Tag>
      </Row>
   );
}
