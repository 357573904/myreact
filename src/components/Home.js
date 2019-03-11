import React from 'react';
import '../css/home.css';

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <header>头部</header>
                <section>中间部分</section>
                <footer>底部</footer>
            </div>
        )
    }
}
export default Home;