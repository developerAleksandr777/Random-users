import React from 'react';
import { Pagination } from 'antd';
import { usePageState } from '../../hooks/usePageState';

interface IProps {
    totalItems: number;
}

const AntdPagination = ({ totalItems }: IProps) => {
    const { collection, setPage } = usePageState();
    const handlePageChange = (page: number) => {
        setPage({ page });
    };

    return (
        <Pagination
            defaultCurrent={1}
            total={totalItems}
            current={collection.page}
            onChange={handlePageChange}
        />
    );
};

export default AntdPagination;
