export const columns = [
    {
        title: 'User Name',
        dataIndex: 'userName',
        sortDirections: ['descend', 'ascend'],
        sorter: (a, b) => a.userName.localeCompare(b.userName),
    },
    {
        title: 'Email',
        dataIndex: 'email',
        sortDirections: ['descend', 'ascend'],
        sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
        sortDirections: ['descend', 'ascend'],
    },
];