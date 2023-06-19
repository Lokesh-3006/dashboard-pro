import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Stack } from "react-bootstrap";


const Table = () => {

    const column = [
        {
            name: 'Franchise Name/Code',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Parter Name/code',
            selector: row => row.patner,
            sortable: true
        },
        {
            name: 'Partner Type',
            selector: row => row.type,
            sortable: true
        },
        {
            name: 'Oct 22 Target',
            selector: row => row.target,
            sortable: true
        },
        {
            name: 'Oct 22 Achievement',
            selector: row => row.achieve,
            sortable: true
        },
        {
            name: 'Nov 22 Target',
            selector: row => row.novtarget,
            sortable: true
        },
        {
            name: 'Nov 22 Achievement',
            selector: row => row.novachieve,
            sortable: true
        },
        {
            name: 'Growth',
            selector: row => row.growth,
            sortable: true
        }
    ];

    const data = [
        {
            id: 1,
            name: 'Swati Yadav/19A43693',
            patner: 'Swati Yadav/19A43693',
            type: 'RGICL POSP',
            target: '-',
            achieve: '1,00,000',
            novtarget: '-',
            novachieve: '0',
            growth: '65%'

        },
        {
            id: 2,
            name: 'Garima Yadav/19A43693',
            patner: 'Garima Yadav/19A43693',
            type: 'RGICL POSP',
            target: '-',
            achieve: '2,00,000',
            novtarget: '-',
            novachieve: '50,000',
            growth: '45%'
        },
        {
            id: 3,
            name: 'Swati Yadav/19A43693',
            patner: 'Swati Yadav/19A43693',
            type: 'RGICL POSP',
            target: '-',
            achieve: '1,00,000',
            novtarget: '-',
            novachieve: '0',
            growth: '-20%'
        },
        {
            id: 4,
            name: 'Garima Yadav/19A43693',
            patner: 'Garima Yadav/19A43693',
            type: 'RGICL POSP',
            target: '-',
            achieve: '2,00,000',
            novtarget: '-',
            novachieve: '50,000',
            growth: '45%'
        },
        {
            id: 5,
            name: 'Swati Yadav/19A43693',
            patner: 'Swati Yadav/19A43693',
            type: 'RGICL POSP',
            target: '-',
            achieve: '1,00,000',
            novtarget: '-',
            novachieve: '0',
            growth: '-20%'
        }

    ]

    const [records, setRecords] = useState(data);

    const handleFilter = (event) => {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }

    return (
        <Stack style={{
            borderWidth: '4px',
            borderStyle: 'solid',
            borderColor: '#094db1',
            marginTop: 0
        }}>
            <Stack className='text-input'><input type='text' onChange={handleFilter} /></Stack>
            <DataTable
                columns={column}
                data={records}
            ></DataTable>
        </Stack>
    )

}

export default Table