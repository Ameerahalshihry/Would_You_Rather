import React, { Component } from 'react'
import { connect } from 'react-redux'

export class LeaderBoard extends Component {
    render() {
        return (
            <div>
                LeaderBoard
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)
