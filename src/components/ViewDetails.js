import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
import { useState } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import { ChevronUp } from 'react-bootstrap-icons';
import Table from './Table'


const ViewDetails = (props) => {

    const buttonHandler = () => {
        props.setClickedTable(prevState => !prevState)
        props.setNextTable && props.setNextTable(false)
    }

    return (<>
        <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#094db1', padding: 10, borderBottomLeftRadius: props.clickedTable ? 0 : 42, borderBottomRightRadius: props.clickedTable ? 0 : 42, }}>
            <Button onClick={buttonHandler} style={{ backgroundColor: '#094db1', border: 'none' }}>
                View Details
                {' '}
                {props.clickedTable ? <ChevronDown color='white' /> : <ChevronUp color='white' />}
            </Button>
        </Stack>
    </>)
}
export default ViewDetails