import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Link from 'next/link';

interface DataType {
  key: string;
  updated: string;
  name: string;
  id: string;
  description: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link href={'/elements/elementId'}>{text}</Link>,
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },

  {
    title: 'Last Updated',
    dataIndex: 'updated',
    key: 'updated',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'EmptyState Dashboard',
    id: 'emptystate-test',
    description: '',
    updated: '12/23/2023, 09:33am PST',
  },
  {
    key: '2',
    name: 'no-results-found',
    id: 'no-results-found',
    description: 'The thing that pops up when there is no results',
    updated: '12/23/2023, 09:33am PST',
  },
  {
    key: '3',
    name: '#1 User Notification',
    id: 'user-notification-one',
    description: 'The top notification that shows',
    updated: '12/23/2023, 09:33am PST',
  },
];

export default function Elements() {
  return (
    <>
      <h1>UI Elements</h1>
      <p>
        If a user clicks one of these rows, we can take them to the component
        detail page and show current and past content, along with trackMetrics
        data.
      </p>
      <Table dataSource={data} columns={columns} />;
    </>
  );
}
