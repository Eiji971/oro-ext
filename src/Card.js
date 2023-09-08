import React, { useState, useEffect } from "react"
import axios from 'axios';
import bg from './Main.png';
import slime from "./slime.png"
import bgstat from "./bgstat.png"
import shield from "./shield.png"
import sword from "./sword.png"
import lvl from "./lvl.png"
import gold from "./gold.png"

export default function Card(props) {
    /*
    const [connectedUser, setConnectedUser] = useState(""); // State to store the connected username

    useEffect(() => {
        // This event is triggered when the extension is authorized
        Twitch.ext.onAuthorized((auth) => {
            // Set the connected user's username in the state
            setConnectedUser(auth.userName);
        });
    }, []); // Empty dependency array to run this effect only once
    */

    const connectedUsert = "26583153"
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Define a function to fetch user data
        const fetchUserData = async () => {
          try {
            const response = await axios.get('http://localhost:3001/api/userData'); 
            setUserData(response.data); // Update the state with the fetched data
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchUserData(); // Call the function to fetch user data
      }, []);

      const formatGold = (gold) => {
        if (gold >= 1000) {
          return (gold / 1000).toFixed(1) + 'K';
        }
        return gold;
      };  

    if (props.item.userId === connectedUsert && userData) 
    {
        return (
            <div className="card">
                <img src={bg} className="bg--img" alt="Background" />
                <div className="card--mainstats">
                    <span className="main--infos">{userData.username}</span>
                </div>
                <div>
                    <img src={lvl} className="subinfo--img"/>
                    <div>
                        <span className="main--infos">{props.item.player.level}</span>
                    </div>
                    <img src={gold} className="subinfo--img"/>
                    <div>
                        <span className="submain--infos">{formatGold(userData.gold)}</span>
                    </div>
                </div>
                    
                <div>
                    <img src={slime} className="slime--img" alt="slime char" />
                </div>
                <div className="stat--container">
                    <img src={bgstat} className="bgstat--container" alt="slime char" />
                    <button className="btn--quest">JOIN QUEST</button>
                    <div className="sub--infos--container">
                        <span className="sub--infos">VIT:{props.item.player.permaStats.vitality}</span>
                        <span className="sub--infos">STR:{props.item.player.permaStats.strength}</span>
                        <span className="sub--infos">AGI:{props.item.player.permaStats.agility}</span>
                        <span className="sub--infos">INT:{props.item.player.permaStats.intelligence}</span>
                        <span className="sub--infos">RES:{props.item.player.permaStats.resistance}</span>
                        <span className="sub--infos">LCK:{props.item.player.permaStats.luck}</span>
                    </div>
                    <div className="equipment--container">
                        <img src={sword} className="equipment--img" alt="weapon"/>
                        <div>
                            {props.item.player.weapon && props.item.player.weapon.name !== null ? (
                                <span className="equipment--base--infos">{props.item.player.weapon.name}</span>
                            ) : (
                                <span className="equipment--base--infos">No weapon equipped</span>
                            )}
                        </div>
                        <img src={shield} className="equipment--img" alt="item"/>
                        <div>
                            {props.item.player.item && props.item.player.item.name !== null ? (
                                <span className="equipment--base--infos">{props.item.player.item.name}</span>
                            ) : (
                                <span className="equipment--base--infos">No item equipped</span>
                            )}
                        </div>
                    </div>
                        
                </div>
                
            </div>
        );
    } else {
        // Return null if the username doesn't match to hide the component
        return null;
    }
}    