import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const connectId = '26583153'; // Replace with the connected player's ID
  const baseURL = 'https://3574-93-121-165-213.ngrok.io';
  const [userData, setUserData] = useState({});
  const [playerStat, setPlayerStat] = useState({});
  const [playerData, setPlayerData] = useState({});
  const [itemData, setItemData] = useState({});
  const [weaponData, setWeaponData] = useState({});

  const formatGold = (gold) => {
    if (gold >= 1000) {
      return (gold / 1000).toFixed(1) + 'K';
    }
    return gold;
  };

  const fetchData = async () => {
    try {
      const endpoints = [
        'userData',
        'playerStat',
        'playerData',
        'itemData',
        'weaponData',
      ];

      const requests = endpoints.map((endpoint) =>
        axios.get(`${baseURL}/api/${endpoint}/${connectId}`)
      );

      const [
        userDataResponse,
        playerStatResponse,
        playerDataResponse,
        itemDataResponse,
        weaponDataResponse,
      ] = await Promise.all(requests);

      setUserData(userDataResponse.data);
      setPlayerStat(playerStatResponse.data);
      setPlayerData(playerDataResponse.data);
      setItemData(itemDataResponse.data);
      setWeaponData(weaponDataResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
    

        return (
                    <div className="card"> 
                        <img src="/Main.png" className="bg--img" alt="Background" />
                        <div className="card--mainstats">
                            <span className="main--infos">{userData.username}</span>
                        </div>
                        <div className="main--container">
                            <div>
                                <img src="slime.png" className="slime--img" alt="slime char" />
                            </div>
                            <div className="submain--container">
                                <div>
                                    <img src="lvl.png" className="subinfo--img" alt="lvl"/>
                                    <span className="main--infos2">{playerData.level}</span>
                                    
                                </div>
                                <div>
                                    <img src="/gold.png" className="subinfo--img" alt="gold"/>
                                    <span className="submain--infos">{formatGold(userData.gold)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="stat--container">
                            <img src="/bgstat.png" className="bgstat--container" alt="slime char" />
                            <button className="btn--quest">JOIN QUEST</button>
                            <div className="sub--infos--container">
                                <span className="sub--infos">VIT:{playerStat.vitality}</span>
                                <span className="sub--infos">STR:{playerStat.strength}</span>
                                <span className="sub--infos">AGI:{playerStat.agility}</span>
                                <span className="sub--infos">INT:{playerStat.intelligence}</span>
                                <span className="sub--infos">RES:{playerStat.resistance}</span>
                                <span className="sub--infos">LCK:{playerStat.luck}</span>
                            </div>
                            <div className="equipment--container">
                                <img src="/sword.png" className="equipment--img" alt="weapon"/>
                                <div>
                                    {weaponData.name !== null ? (
                                        <span className="equipment--base--infos">{weaponData.name}</span>
                                    ) : (
                                        <span className="equipment--base--infos">No weapon equipped</span>
                                    )}
                                </div>
                                <img src="/shield.png" className="equipment--img" alt="item"/>
                                <div>
                                    {itemData.name !== null ? (
                                        <span className="equipment--base--infos">{itemData.name}</span>
                                    ) : (
                                        <span className="equipment--base--infos">No item equipped</span>
                                    )}
                                </div>
                            </div>
                                
                        </div>
                        
                    </div>
        )  
    }


export default App;