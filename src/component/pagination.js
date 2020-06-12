import React from 'react';
import mainBody from './mainBody';



class Pagination extends React.Component {
    render (){
        console.warn(`
        Paginations needs to listen for router url changes to update previous & next routes.
    `   )

    let Page = {
        next:     { name: "", url:"route" },
        previous: { name: "", url:"route" }
    }
    
    return(
          
        <mainBody>
            {/* <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link" href={ Page.previous.url } tabindex="-1">Previous { Page.previous.name }</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href={ Page.next.url }>Next { Page.next.name } </a>
                    </li>
                </ul>
            </nav> */}
        </mainBody>
    );
}
}

export default Pagination;
