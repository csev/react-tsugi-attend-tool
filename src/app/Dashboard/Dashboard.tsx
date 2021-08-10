import * as React from 'react';
import {useState,useEffect} from 'react';
import {SettingModal} from './SettingModal';
import dashboardServices from '../../services/dashboard.services';
import { PageSection, Title,Button} from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody, 
} from '@patternfly/react-table';
import './dashboard.css';
import { bool } from 'prop-types';

export  interface rowsInterfact {
  cells: any
}
const Dashboard: React.FunctionComponent = () => {
 
  const [columns, setColumn] = useState([
    { title: 'User' },
    { title: 'Attendence' },
    {
      title: 'IP Address'
    }
  ]);
  const [rows, setRows] = useState<rowsInterfact[]>([]);

  
  const [isModalOpen,setisModalOPen]=useState(false);
  useEffect(() => {
    //console.log(window.sessionStorage.getItem("_old_code"))
    const result = dashboardServices.GetDashboardData();
    result.then(data => {
      setRows( data.map(data1 => {
      return {cells: [data1.user_id, data1.attend, data1.ipaddr]}
     }))
      
     
    })
    
    .catch(err =>console.log(err))
  }, []);
  return (
    <>
   
  <PageSection>
    <div className="page-header">
    <Title headingLevel="h1" size="lg">Tsugi React</Title>
    <div className="header-btns"> 
    <Button variant="primary" onClick={ ()=>dashboardServices.ClearData()
    }>
          Clear
    </Button>
    <Button variant="primary" onClick={()=>setisModalOPen(true)}>
          Settings
    </Button>
    </div>

</div>
    
    <Table aria-label="Simple Table" cells={columns} rows={rows}>
        <TableHeader />
        
        <TableBody />
      </Table>

     <SettingModal isModalOpen={isModalOpen} setisModalOPen={setisModalOPen} />
  </PageSection>
  </>
)
  }
export { Dashboard };
