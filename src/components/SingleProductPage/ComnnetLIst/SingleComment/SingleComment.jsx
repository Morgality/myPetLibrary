import React, { useEffect, useState } from 'react';
import { List, Avatar } from 'antd';
import { useQuery, useQueryClient } from 'react-query';
import { getComments } from '../../../../api/getComments';

const SingleProductComment = ({data}) => {

    const page = useState(1);

    const query = useQueryClient();

    const client = useQuery({
        queryKey: ['commentlist', page],
        queryFn : (page) => getComments()
    });
    
    return (
      <List
        pagination={{
          position: 'bottom',
          align: 'center',
          defaultCurrent: 1,
          pageSize: 10,
          showSizeChanger: false
        }}
        dataSource={client?.data?.data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
            //   avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={ <span>{item.name}</span> }
              description={item.body}
            />
          </List.Item>
        )}
      />
  )
}


export default SingleProductComment;