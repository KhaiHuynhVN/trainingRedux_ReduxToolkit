import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import filtersSlice from './filtersSlice';
import { searchValueSelector, statusSelector, typeSelector } from '../../redux/selectors';

const { Search } = Input;

export default function Filters() {
   const dispatch = useDispatch();

   const searchValue = useSelector(searchValueSelector);
   const status = useSelector(statusSelector);
   const type = useSelector(typeSelector);

   const handleChangeSearchValue = (e) => {
      dispatch(filtersSlice.actions.setSearchValue(e.target.value));
   };

   const handleChangeSelectValue = (value) => {
      dispatch(filtersSlice.actions.setType(value));
   };

   const handleChangeStatus = (e) => {
      dispatch(filtersSlice.actions.setStatus(e.target.value));
   };

   return (
      <Row justify="center">
         <Col span={24}>
            <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
               Search
            </Typography.Paragraph>
            <Search
               value={searchValue}
               placeholder="input search text"
               onChange={handleChangeSearchValue}
            />
         </Col>
         <Col sm={24}>
            <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
               Filter By Status
            </Typography.Paragraph>
            <Radio.Group value={status} onChange={handleChangeStatus}>
               <Radio value="All">All</Radio>
               <Radio value={true}>Completed</Radio>
               <Radio value={false}>To do</Radio>
            </Radio.Group>
         </Col>
         <Col sm={24}>
            <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
               Filter By Priority
            </Typography.Paragraph>
            <Select
               mode="multiple"
               allowClear
               placeholder="Please select"
               style={{ width: '100%' }}
               onChange={handleChangeSelectValue}
               value={type}
            >
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
         </Col>
      </Row>
   );
}
