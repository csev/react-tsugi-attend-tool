import * as React from 'react';
import {useState,useEffect} from 'react';
import { PageSection,Button,Modal,
    ModalVariant, Form, FormGroup, TextInput, 
    Checkbox, Popover, ActionGroup
 } from '@patternfly/react-core';
 import dashboardServices from '../../services/dashboard.services';
import {
  Table,
  TableHeader,
  TableBody,
  textCenter,
} from '@patternfly/react-table';

interface settingprops {
    isModalOpen: boolean,
    setisModalOPen: Function
}
export const SettingModal: React.FC<settingprops> = ({isModalOpen,setisModalOPen}) => {
  
  const [code,setcode]=useState('');
  const [grade,setgrade]=useState('');
  const [ipaddr,setipaddr]=useState('');
  
   useEffect(() => {
     const result = dashboardServices.GetInstructorData();
    result.then(data => {
      console.log(data);
    })
    .catch(err =>console.log(err))
 }, []);
 
    const data= 
    {
      "PHPSESSID": "f9f2db41533a13e8c60531143418d86d",
      "code": "1234",
      "grade": "1",
      "match": ""
  }
    //console.log(data);
   function  submitSetting(){
      setisModalOPen(false);
      const result = dashboardServices.UpdateSettings(data);
     }
   
  
  return (
    <>
  <PageSection>
      <Modal
          variant={ModalVariant.medium}
          title="rattend Settings"
          isOpen={isModalOpen}
          onClose={()=>setisModalOPen(false)}
          actions={[
            // <Button key="confirm" variant="primary" onClick={()=>setisModalOPen(false)}>
            //   Confirm
            // </Button>,
            // <Button key="cancel" variant="link" onClick={()=>setisModalOPen(false)}>
            //   Cancel
            // </Button>
          ]}
        >
             <Form>
        <FormGroup
          isRequired
          fieldId="simple-form-name-01"
          helperText="Configure the LTI Tool"
        >
        </FormGroup>
        <FormGroup
          label="Code"
         
          isRequired
          fieldId="simple-form-name-01"
          helperText=""
        >
          <TextInput
            isRequired
            type="text"
            id="simple-form-name-01"
            name="simple-form-name-01"
            aria-describedby="simple-form-name-01-helper"
            value={code}
            onChange={(e)=>{
              
              setcode(e)
            }}
          />
        </FormGroup>
        <FormGroup fieldId="checkbox01">
          <Checkbox
            label="Send a Grade"
            id="checkbox01"
            name="checkbox01"
            aria-label="Update via email"
          />
        </FormGroup>
        <FormGroup
          label="Limit access by IP address. This can be a prefix of an IP address
           like '142.16.41' or if it starts with a '/' it can be a regular expression (PHP syntax)"
         
          isRequired
          fieldId="simple-form-name-01"
          helperText="Your current IP address is ::1"
        >
          <TextInput
            isRequired
            type="text"
            id="simple-form-name-01"
            name="simple-form-name-01"
            aria-describedby="simple-form-name-01-helper"
            value={ipaddr}
            onChange={(e)=>setipaddr(e)}
          />
        </FormGroup>
        <ActionGroup>
          <Button variant="primary" onClick={submitSetting}>Submit form</Button>
          <Button variant="link" onClick={()=>setisModalOPen(false)}>Cancel</Button>
        </ActionGroup>
      </Form>
        </Modal>
  </PageSection>
  </>
)
  }

