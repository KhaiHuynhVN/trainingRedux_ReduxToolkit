import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import { useRef } from 'react';

import { Todo } from '../Todo';
import todoListSlice from './todoListSlice';
import { STORAGE } from '../../vendors';
import {
   inputValueSelector,
   typeAddTodoSelector,
   remainingTodosSelector,
} from '../../redux/selectors';

export default function TodoList() {
   const dispatch = useDispatch();

   const inputValue = useSelector(inputValueSelector);
   const typeAddTodo = useSelector(typeAddTodoSelector);
   const remainingTodos = useSelector(remainingTodosSelector);

   const inputRef = useRef();

   const handleAddTodo = () => {
      if (!inputValue.trim()) return;
      const todoData = {
         id: uuidV4(),
         name: inputValue,
         completed: false,
         type: typeAddTodo,
      };
      dispatch(todoListSlice.actions.setAddTodo(todoData));

      dispatch(todoListSlice.actions.setAddTodoInputValue(''));

      const todoListStorage = STORAGE('todoList');
      if (todoListStorage.get('todoList')) {
         const remainingData = [...todoListStorage.get('todoList'), todoData];
         todoListStorage.set('todoList', remainingData);
      } else {
         todoListStorage.set('todoList', [todoData]);
      }

      inputRef.current.focus();
   };

   const handleOnchange = (e) => {
      dispatch(todoListSlice.actions.setAddTodoInputValue(e.target.value));
   };

   const handleSelectType = (value) => {
      dispatch(todoListSlice.actions.setAddTodoType(value));
   };

   return (
      <Row style={{ height: 'calc(100% - 40px)', overflowY: 'hidden' }}>
         <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
            {(remainingTodos.length &&
               remainingTodos.map((todo) => {
                  return (
                     <Todo
                        key={todo.id}
                        dataID={todo.id}
                        name={todo.name}
                        type={todo.type}
                        completed={todo.completed}
                     />
                  );
               })) ||
               []}
         </Col>
         <Col span={24}>
            <Space.Compact style={{ display: 'flex' }}>
               <Input ref={inputRef} value={inputValue} onChange={handleOnchange} />
               <Select defaultValue="High" value={typeAddTodo} onChange={handleSelectType}>
                  <Select.Option value="High" label="High">
                     <Tag color="red">High</Tag>
                  </Select.Option>
                  <Select.Option value="Medium" label="Medium">
                     <Tag color="blue">Medium</Tag>
                  </Select.Option>
                  <Select.Option value="Low" label="Low">
                     <Tag color="gray">Low</Tag>
                  </Select.Option>
               </Select>
               <Button type="primary" onClick={handleAddTodo}>
                  Add
               </Button>
            </Space.Compact>
         </Col>
      </Row>
   );
}
