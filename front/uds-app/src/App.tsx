import './App.css'
import {  Table } from 'antd';
import type { TableProps } from 'antd';
import { UserData, useUser } from './hooks/useUser';
import { CustomTypography } from './style';

 

const columns: TableProps<UserData>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'height',
    dataIndex: 'height',
    key: 'height',
  },
  {
    title: 'gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'mass',
    dataIndex: 'mass',
    key: 'mass',
  }  
]; 


function App() {

  const {data,isLoading, isError}= useUser();
 
  return (
    <>
       <CustomTypography>UDS TESTE + React + NODE JS</CustomTypography>
      <div className="card">
        {isError?(
           <p>Erro ao carregar dados.</p>
        ):(
          <Table loading={isLoading} columns={columns} dataSource={data} />  
        )} 
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
