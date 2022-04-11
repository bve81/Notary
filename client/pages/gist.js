import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import getGistInfoById from '../utils/gitApi/getGistInfoById.js';

//TODO: Здесь должна быть форма которая принимает id гиста, вызывает функцию getGistInfoById из utils/gitAPI/getGistInfoById и результат выполнения отображает под формой

const Gist = (props) => {
    const [gistid, setGistid] = useState('');
    const [creator, setCreator] = useState([]);
    const [text, setText] = useState([]);
    const [lastupdate, setLastupdate] = useState([]);
  
    function handleOnSubmintForm(e) {
        let userInfo = getGistInfoById(gistid);
        userInfo.then(result=>result).then ((result) =>{ setCreator(result.creator); setText(result.text); setLastupdate(result.lastUpdate); });
        e.preventDefault();
      }
    
    return ( <Layout>
<div>
 <ul>
     <li>{creator}</li>
     <li>{text}</li>
     <li>{lastupdate}</li>
 </ul>
<form onSubmit={handleOnSubmintForm}>
  <label>
    GistID:
    <input type="text" name="name" value={gistid} onChange={(e) => setGistid(e.target.value)}/>
  </label>
  <input type="submit" value="Отправить" />
</form>
</div>
        {/* Код писать здесь */}
    </Layout> );
}
 
export default Gist;