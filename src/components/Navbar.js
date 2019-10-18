import React, { Component } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import  QuestionsList  from './QuestionsList';



export class Navbar extends Component {
    render() {
        return (
            <div>
          HHHHHHHH
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
