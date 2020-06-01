import React from 'react';

class Loggin extends React.Component{
    render(){
        const showStart = this.props.showStart;
        return(
            <div>
                {showStart}
            </div>
        );
    }
}

export default Loggin;