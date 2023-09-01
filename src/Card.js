import React from "react"

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
    if (props.item.username === connectedUsert) {
        return (
            <div className="card">
                <img src="parchment.jpg" className="bg--img" alt="Background" />
                <div className="card--stats">
                    <span className="main--infos">{props.item.username}</span>
                    <span className="main--infos"> lvl {props.item.player.level}</span>
                </div>
                <div>
                    <span className="submain--infos">{props.item.gold}</span>
                </div>
                <div>
                    <span className="sub--infos">Vitality: {props.item.player.permaStats.vitality}</span>
                    <span className="sub--infos">Strength: {props.item.player.permaStats.strength}</span>
                    <span className="sub--infos">Agility: {props.item.player.permaStats.agility}</span>
                    <span className="sub--infos">Intelligence: {props.item.player.permaStats.intelligence}</span>
                    <span className="sub--infos">Resistance: {props.item.player.permaStats.resistance}</span>
                    <span className="sub--infos">Luck: {props.item.player.permaStats.luck}</span>
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