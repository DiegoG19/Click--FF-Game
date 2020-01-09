import React, { Component } from 'react';
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import './App.css'


// list all characters to the state and every key 
class App extends Compoment {
    state= {
        counter: 0,
        champions:[
            {
                key: 1,
                name: "Cloud",
                selected: false
            },
            {
                key: 2,
                name: "WOL",
                selected: false
            }
            ,
            {
                key: 3,
                name: "Tidus",
                selected: false
            }
            ,
            {
                key: 4,
                name: "Bartz",
                selected: false
            }
            ,
            {
                key: 5,
                name: "Sephiroth",
                selected: false
            }
            ,
            {
                key: 6,
                name: "Exdeath",
                selected: false
            }
            ,
            {
                key: 7,
                name:"Noctis",
                selected: false
            }
            ,
            {
                key: 8,
                name: "Gilgamesh",
                selected: false
            },
            {

                key: 9,
                name: "Snow",
                selected: false
            },
            {
                key: 10,
                name: "Lighting",
                selected: false
            },
            {
                key: 11,
                name: "Vaan",
                selected: false
            },
            {
                key: 12,
                name: "Ace",
                selected: false
            }

        ]
    };
    // had a problem with this but solve it later if can
    counterCheck=(name,selectedState)=>{
        let championsArray = this.state.champions;
        championsArray.sort(function(a, b){return 0.5 - Math.random()});

        if (selectedState){
            championsArray.forEach(champion=> champion.selected = false);
            this.setState({champions: championsArray, counter: 0})
        } else {
            championsArray.forEach((champion) => {
                if (champion.name === name && champion.selected === false) {
                    champion.selected = true;
                    this.setState({champions: championsArray, counter: this.state.counter + 1})
                }
            });
        }
    };

    render(){
        return(
            <wrapper>
                <Header score={this.state.counter} />
                <div className={"container"}>
                    <div className={"row"}>
                        {this.state.champions.map((champion) => <CharacterCard  key={champion.key} id ={champion.key} character={champion.name} selected={champion.selected} counterCheck={this.counterCheck}/>)}
                    </div>
                </div>
            </wrapper>
        )
    };
}

export default App;