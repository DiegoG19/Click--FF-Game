import React from 'react';
//creates the nav and displays score
const Header = (props)=> (
    <nav style={{background: "green", color: "red"}} className={"navbar navbar-default sticky-top"}>
        <div className={"conatiner"}>
            <div>Final Fantasy Clicker Game</div>
            <div>score:{props.score}</div>
        </div>
    </nav>
);

export default Header;