import { UploadOutlined } from '@ant-design/icons';
import {
  Breadcrumb,
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  Row,
  Select,
  Space,
  Table,
  Upload,
  UploadProps,
} from 'antd';
import Link from 'next/link';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const elementVariants = [
  {
    key: '1',
    updated: '02/23/2023 9:12am PST',
    headline: 32,
    description: 'Please upload a file to get started!',
    impressions: 123,
    clicks: 4,
    ctr: '3.25%',
  },
  {
    key: '2',
    updated: '12/23/2022 10:12am PST',
    headline: 42,
    description: 'Please upload some files to get started!',
    impressions: 342,
    clicks: 12,
    ctr: '3.25%',
  },
];
const variantColumns = [
  {
    title: 'Updated',
    dataIndex: 'updated',
    key: 'updated',
  },
  {
    title: 'Headline',
    dataIndex: 'headline',
    key: 'headline',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Impressions',
    dataIndex: 'impressions',
    key: 'impressions',
  },
  {
    title: 'Clicks',
    dataIndex: 'clicks',
    key: 'clicks',
  },
  {
    title: 'CTR %',
    dataIndex: 'ctr',
    key: 'ctr',
  },
];

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function ElementDetail() {
  const [form] = Form.useForm();

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href={'/elements'}>Elements</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">empty-state-logged-out</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={16}>
        <Col span={12}>
          <h2>Element Detail</h2>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="ID" tooltip="This is a required field">
              <Input value="empty-state-logged-out" disabled={true} />
            </Form.Item>
            <Form.Item
              label="Internal Name"
              tooltip="Defaults to the ID but you can change this anytime."
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Internal Description"
              tooltip="Describe the element, just for internal purposes."
            >
              <Input value="The thing that pops up when there is no results	" />
            </Form.Item>
            <Divider />
            <Form.Item label="Headline" tooltip="Tooltip with customize icon">
              <Input value="Header Test" />
            </Form.Item>
            <Form.Item
              label="User-Facing Description"
              tooltip="Tooltip with customize icon"
            >
              <Input value="Please upload a file to get started!" />
            </Form.Item>
            <Form.Item label="Image" tooltip="Tooltip with customize icon">
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            {/* TODO Not sure about this select: */}
            <Form.Item>
              <p>
                <label htmlFor="">Actions</label>
              </p>
              <Space>
                <Select
                  defaultValue="Primary Action"
                  style={{ width: 200 }}
                  onChange={handleChange}
                  options={[
                    { value: 'primaryAction', label: 'Primary Action' },
                    { value: 'secondaryAction', label: 'Secondary Action' },
                  ]}
                />
                <Select
                  defaultValue=""
                  style={{ width: 200 }}
                  onChange={handleChange}
                  options={[
                    { value: 'buttonAction', label: 'Button' },
                    { value: 'linkAction', label: 'Link' },
                    { value: 'textAction', label: 'Text' },
                  ]}
                />
                <Input value="Click me!" />
              </Space>
            </Form.Item>
            <Form.Item>
              <Button type="primary">Update</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <h2>Preview</h2>
          rendered component preview
        </Col>
      </Row>
      {/* Table showing older variants for this ID */}
      <h2>Variants</h2>
      <Table dataSource={elementVariants} columns={variantColumns} />;
    </>
  );
}
