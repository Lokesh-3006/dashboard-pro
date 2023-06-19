import React from "react";
import DataTable from "react-data-table-component";
import { GrNotes } from 'react-icons/gr'
import { Container, Stack } from "react-bootstrap";
import ButtonGroupComponent from "./ButtonGroup";
import './RenewalTable.css'


const RenewalTable = () => {

    const column = [
        {
            name: '',
            selector: row => row.name,
        },
        {
            name: 'Target',
            selector: row => row.patner,

        },
        {
            name: 'Converted',
            selector: row => row.type,

        },
        {
            name: 'Pending',
            selector: row => row.target,

        }
    ];

    const data = [
        {
            id: 1,
            name: '15 Nov',
            patner: '50 L',
            type: '35K',
            target: '15k'

        },
        {
            id: 2,
            name: '16 Nov',
            patner: '50 L',
            type: '35K',
            target: '15k'
        },
        {
            id: 3,
            name: '17 Nov',
            patner: '50 L',
            type: '35K',
            target: '15k'
        },
        {
            id: 4,
            name: '18 Nov',
            patner: '50 L',
            type: '-',
            target: '15K'
        },
        {
            id: 5,
            name: '19 Nov',
            patner: '50 L',
            type: '-',
            target: '15K'
        }

    ]


    return (
        <Container style={{ borderRadius: 20, backgroundColor: 'white', padding: 20, paddingTop: 0, marginTop: 20, boxShadow: "0 0.3rem 1rem #36454F" }}>
            <Stack>
                <Stack className="sub-container">
                    <Stack style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'flex-end', }}>
                        <GrNotes size={35} />
                        <div style={{ fontSize: 20, }}>Renewal Summary</div>
                    </Stack>
                    <Stack style={{ alignSelf: 'center', padding: 0 }}>
                        <ButtonGroupComponent />
                    </Stack>
                </Stack>
            </Stack>
            <Stack>
                <DataTable
                    style={{ backgroundColor: 'whitesmoke' }}
                    columns={column}
                    data={data}
                    highlightOnHover
                />
            </Stack>
        </Container >
    )

}

export default RenewalTable