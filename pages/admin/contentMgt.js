import React, { useEffect } from 'react'
import { Table } from 'semantic-ui-react'

export default function ContentMgt({state}) {

    useEffect(() => {
        console.log(state)
    }, [])

    return (
        <>
            <p className="heading">
                Content management
            </p>
            <Table basic='very'>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Notes</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>John</Table.Cell>
                    <Table.Cell>Approved</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jamie</Table.Cell>
                    <Table.Cell>Approved</Table.Cell>
                    <Table.Cell>Requires call</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jill</Table.Cell>
                    <Table.Cell>Denied</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>            
        </>
    )
}
