import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
import ButtonGroupComponent from './ButtonGroup';
import { Briefcase } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import { Lightbulb } from 'react-bootstrap-icons';


const GraphHeader = (props) => {

    const RenderIcon = () => {
        if (props.renderIcon === 'business') return (<Briefcase size={15} />)
        else if (props.renderIcon === 'recruitment') return (<Search size={15} />)
        else return (<Lightbulb size={15} />)
    }

    return (<>
        <Stack style={{
            display: 'flex',
            backgroundColor: '#0c63e4',
            flexDirection: 'row',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: "0 0.3rem 20rem black"
        }}>
            <Stack style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'center',
                gap: 20,
                color: 'whitesmoke',
                alignItems: 'flex-end',
                justifyContent: 'center'
            }}>
                {RenderIcon()}
                <div style={{ fontSize: 15, margin: 0 }}>{props.title}</div>
            </Stack>
            <Stack style={{ alignSelf: 'center', padding: 10, height: 50 }}>
                {props.buttonGroup && < ButtonGroupComponent />}
            </Stack>
        </Stack>
    </>)
}

export default GraphHeader