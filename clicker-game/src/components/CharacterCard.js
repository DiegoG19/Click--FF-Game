import React from 'react';
import Image from './Image'
class CharacterCard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            key: this.props.id,
            name: this.props.champions,
            selected: this.props.selected
        };
    }
    componentDidMount(){
        console.log(this.props.id, this.props.champions, this.props.selected, this.props.counterCheck);
    }

    render(){
        return(
            <div onClick={()=>this.props.counterCheck(this.props.champions,this.props.selected)} className={"col-3 mt-3"}>
                <Image imgSrc={this.props.champions} />
            </div>
        )
    }

}

export default CharacterCard