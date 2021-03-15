import * as React from "react";

import {
    List,
    Edit,
    Create,
    Table,
    Column,
    EmailField,
    TagField,
    BooleanField,
    DateField,
    Show,
    ShowTab,
    Tab,
    Form,
    Input,
    TextField,
    Tabs,
    DatePicker,
    useTranslate,
    useTable,
    EditButton,
    DeleteButton,
    ShowButton,
    Space,
    useForm,
} from "readmin";

import { Aside } from "../aside";

export const UserList = (props: any) => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        initialPageSize: 20,
    });
    return (
        <List {...props} aside={Aside}>
            <Table
                {...tableProps}
                rowKey="id"
                pagination={{
                    ...tableProps.pagination,
                    position: ["bottomCenter"],
                    size: "small",
                }}
            >
                <Column
                    key="id"
                    dataIndex="id"
                    title={translate("common:resources.users.fields.id")}
                />
                <Column
                    key="firstName"
                    dataIndex="firstName"
                    title={translate("common:resources.users.fields.firstName")}
                />
                <Column
                    key="lastName"
                    dataIndex="lastName"
                    title={translate("common:resources.users.fields.lastName")}
                />
                <Column
                    dataIndex="status"
                    title={translate("common:resources.users.fields.status")}
                    key="status"
                    render={(value) => <TagField value={value} />}
                />
                <Column
                    key="email"
                    dataIndex="email"
                    title={translate("common:resources.users.fields.email")}
                    render={(value) => <EmailField value={value} />}
                />
                <Column
                    dataIndex="status"
                    title={translate("common:resources.users.fields.status")}
                    key="boolean"
                    render={(value) => <BooleanField value={value} />}
                />
                <Column
                    key="birthday"
                    dataIndex="birthday"
                    title={translate("common:resources.users.fields.birthday")}
                    render={(value) => <DateField value={value} />}
                />
                <Column
                    title={translate("common:table.actions", "Actions")}
                    dataIndex="actions"
                    key="actions"
                    render={(
                        _text: string | number,
                        record: {
                            id: string | number;
                        },
                    ): React.ReactNode => (
                        <Space>
                            <EditButton size="small" recordItemId={record.id} />
                            <DeleteButton
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton size="small" recordItemId={record.id} />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};

export const UserEdit = (props: any) => {
    const translate = useTranslate();
    const { formProps, editProps } = useForm({
        warnWhenUnsavedChanges: true,
    });

    const { TabPane } = Tabs;

    const dateFormat = "DD/MM/YYYY";

    return (
        <Edit {...props} {...editProps}>
            <Form {...formProps} wrapperCol={{ span: 14 }} layout="vertical">
                <Tabs>
                    <TabPane tab="Summary" key="summary">
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.firstName",
                            )}
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.lastName",
                            )}
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="Detail" key="detail">
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.email",
                            )}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.birthday",
                            )}
                            name="birthday"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker format={dateFormat} />
                        </Form.Item>
                    </TabPane>
                </Tabs>
            </Form>
        </Edit>
    );
};

export const UserCreate = (props: any) => {
    const translate = useTranslate();
    const { formProps, createProps } = useForm({
        warnWhenUnsavedChanges: true,
    });

    const { TabPane } = Tabs;

    const dateFormat = "DD/MM/YYYY";

    return (
        <Create {...props} {...createProps} submitOnEnter={false}>
            <Form {...formProps} wrapperCol={{ span: 14 }} layout="vertical">
                <Tabs>
                    <TabPane tab="Summary" key="summary">
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.firstName",
                            )}
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.lastName",
                            )}
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </TabPane>
                    <TabPane tab="Detail" key="detail">
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.email",
                            )}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label={translate(
                                "common:resources.users.fields.birthday",
                            )}
                            name="birthday"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker format={dateFormat} />
                        </Form.Item>
                    </TabPane>
                </Tabs>
            </Form>
        </Create>
    );
};

export const UserShow = (props: any) => {
    return (
        <Show {...props}>
            <ShowTab>
                <Tab tab="Summary">
                    <TextField renderRecordKey="id" />
                    <TextField renderRecordKey="firstName" />
                    <TextField renderRecordKey="lastName" />
                </Tab>
                <Tab tab="Detail">
                    <EmailField renderRecordKey="email" />
                    <DateField renderRecordKey="birthday" />
                </Tab>
            </ShowTab>
        </Show>
    );
};
