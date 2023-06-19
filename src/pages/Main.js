import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Graph from '../components/Graph';
import './main.css'
import ViewDetails from '../components/ViewDetails';
import GraphHeader from '../components/GraphHeader';

const Main = (props) => {
    return (
        <Container style={{
            borderRadius: 42,
            backgroundColor: '#0c63e4',
            marginBottom: props.clickedTable ? 0 : 20,
        }}>
            <Row >
                <GraphHeader buttonGroup={props.buttonGroup} renderIcon={props.renderIcon} title={props.title} />
            </Row>
            <Row>
                <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <div style={{ alignSelf: 'flex-start', width: '100%' }}>
                        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', }}>
                            <Col xs={6} >
                                <Graph />
                            </Col>
                            <Col xs={6}>
                                <Graph />
                            </Col>
                        </Row>
                    </div>
                    <hr style={{
                        border: 0,
                        borderRadius: 50,
                        width: '100%',
                        maxWidth: '100%',
                        color: 'whitesmoke',
                        backgroundColor: 'white',
                        height: 4,
                    }} />
                    <Row className='third-graph' >
                        <Col xs={6}>
                            <Graph />
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                <ViewDetails setClickedTable={props.setClickedTable} clickedTable={props.clickedTable} setNextTable={props.setNextTable} />
            </Row>
        </Container >)
}

export default Main