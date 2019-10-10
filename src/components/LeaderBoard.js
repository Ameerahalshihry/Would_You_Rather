import React, { Component } from 'react'
import { connect } from 'react-redux'

export class LeaderBoard extends Component {
    render() {
        return (
            <div>
                {/* LeaderBoard get all user VIEW 
                user.name
                user.avatarURL
                num of user.answers is obj
                num of user.questions is array
                score: sum 
                display more score at top and symbol */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)
