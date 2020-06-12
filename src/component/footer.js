import React from 'react';


class Footer extends React.Component {
    render (){
        return(
            <footer className="footer">
        <div className="container">
          <span class="text-muted">ALL CONTENT COPYRIGHT @ Healing After Death { new Date().getFullYear() }</span> 
        </div>
        </footer>
        )
    }
}
export default Footer