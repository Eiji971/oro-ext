import React from "react"
import bg from './bg.png';
import slime from "./slime.png"
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

    const connectedUsert = "orobou"
    if (props.item.username === connectedUsert) 
    {
        return (
            <div className="card">
                <img src={bg} className="bg--img" alt="Background" />
                <div className="card--mainstats">
                    <span className="main--infos">{props.item.username}</span>
                    <span className="main--infos"> lvl {props.item.player.level}</span>
                </div>
                <div>
                    <span className="submain--infos">{props.item.gold}</span>
                </div>
                <div >
                    <img src={slime} className="slime--img" alt="char" />
                </div>
                <div className="sub--infos--container">
                    <span className="sub--infos">VIT:{props.item.player.permaStats.vitality}</span>
                    <span className="sub--infos">STR:{props.item.player.permaStats.strength}</span>
                    <span className="sub--infos">AGI:{props.item.player.permaStats.agility}</span>
                    <span className="sub--infos">INT:{props.item.player.permaStats.intelligence}</span>
                    <span className="sub--infos">RES:{props.item.player.permaStats.resistance}</span>
                    <span className="sub--infos">LCK:{props.item.player.permaStats.luck}</span>
                </div>
                <div>
                    {props.item.player.weapon && props.item.player.weapon.name !== null ? (
                        <span className="equipment--base--infos">{props.item.player.weapon.name}</span>
                    ) : (
                        <span className="equipment--base--infos">No weapon equipped</span>
                    )}
                </div>
                <div>
                    {props.item.player.item && props.item.player.item.name !== null ? (
                        <span className="equipment--base--infos">{props.item.player.item.name}</span>
                    ) : (
                        <span className="equipment--base--infos">No item equipped</span>
                    )}
                </div>
            </div>
        );
    } else {
        // Return null if the username doesn't match to hide the component
        return null;
    }
}    