import { Spin } from 'antd';

const Loading = () => {
    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
            <Spin />
        </div>
    );
};

export default Loading;