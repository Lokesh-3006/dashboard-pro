import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Table from '../components/Table';
import Main from './Main';

const GraphContainer = () => {
    const [clickedTable1, setClickedTable1] = useState(false)
    const [clickedTable2, setClickedTable2] = useState(false)
    const [clickedTable3, setClickedTable3] = useState(false)


    return (<>
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Stack style={{ alignSelf: 'flex-start', }}>
                <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', }}>
                    <Col xs={6}>
                        <Main
                            clickedTable={clickedTable1}
                            setClickedTable={setClickedTable1}
                            setNextTable={setClickedTable2}
                            buttonGroup={true}
                            renderIcon='business'
                            title='Business (Lakhs)'
                        />
                    </Col>
                    <Col xs={6}>
                        <Main
                            clickedTable={clickedTable2}
                            setClickedTable={setClickedTable2}
                            setNextTable={setClickedTable1}
                            renderIcon='recruitment'
                            title='Recruitment'
                        />
                    </Col>
                </Row>
                {clickedTable1 && < Table />}
                {clickedTable2 && < Table />}
            </Stack>
            <Stack style={{ padding: 12 }}>
                <Col xs={6}>
                    <Row style={{ alignSelf: 'flex-start', marginBottom: 0, width: '100%' }}>
                        <Main
                            clickedTable={clickedTable3}
                            setClickedTable={setClickedTable3}
                            renderIcon='activation'
                            title='Activation'
                        />
                    </Row>
                </Col>
            </Stack>
            <Stack >
                {clickedTable3 && < Table />}
            </Stack>
        </Container >
    </>)
}

export default GraphContainer