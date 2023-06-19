import IconsSection from '../components/IconSection'
import CarouselComponent from '../components/Carousel'
import RenewalTable from '../components/RenewalTable'
import Calendar from '../components/Calendar'
import { Container, Stack } from "react-bootstrap";
import Navbar from "../components/Navbar";
import GraphContainer from './GraphContainer';
import './home.css'


const Home = () => {

    return (
        <>
            <Stack style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 20,
                marginTop: 10,
                padding: 10,
                marginBottom: 0,
            }}>
                <Stack style={{ flex: '0 1 auto', }}>
                    <CarouselComponent />
                    <h1 style={{ marginLeft: 40, fontSize: 32, marginBottom: 10, fontWeight: 600 }}>Dashboard</h1>
                    <GraphContainer />
                </Stack>
                <Stack style={{ marginTop: 20, flex: 1, }}>
                    <Calendar />
                    <RenewalTable />
                </Stack>
            </Stack>
            <Stack style={{ width: 100 }}>
                {/* <p>hey</p> */}
            </Stack>

        </>
    )
}

export default Home