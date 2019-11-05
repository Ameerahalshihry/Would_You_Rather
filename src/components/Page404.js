import React from 'react'
import {Card, CardColumns} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Page404 (){

        return (
            <CardColumns className="card p-5 ">
                    <Card className="text-center" style={{ width: '30rem' }}  >
                    <Card.Header>404: The Poll does not exist</Card.Header>
                        <Card.Body>
                        <NavLink className="btn btn-primary btn-block" variant="primary" to="/"> Go Home </NavLink>
                        </Card.Body>
                    </Card>
            </CardColumns>
    )
}
