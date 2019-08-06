import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Card, Table} from 'antd';

import {UsersFetchAll} from '../../store/actions/UserActions';
import {Container} from './styles';
import {columns} from './tableColumns';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const results = useSelector(store => store.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    setLoading(true);

    fetchData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters
    });
  };

  const fetchData = (params = {}) => {
    dispatch(UsersFetchAll(params)).then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  };

  return (
    <Container>
      <Card>
        <Table
          columns={columns}
          rowKey={record => record.id}
          dataSource={results.data}
          pagination={results.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </Card>
    </Container>
  );
};

export default withRouter(Home);
