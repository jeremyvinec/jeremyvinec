import React from 'react'

export default class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <p className="signature">Jérémy Yvinec</p>
                    <p className="copyright">Copyright © 2017. All Rights Reserved.</p>
                </div>
            </React.Fragment>
        )
    }
}