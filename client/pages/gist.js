import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import getGistInfoById from '../utils/gitApi/getGistInfoById.js';

//TODO: Здесь должна быть форма которая принимает id гиста, вызывает функцию getGistInfoById из utils/gitAPI/getGistInfoById и результат выполнения отображает под формой

const Gist = (props) => {
    const [gistid, setGistid] = useState('');
    function handleOnSubmintForm(e) {
        getGistInfoById(gistid);
        e.preventDefault();
      }
    

    return ( <Layout>
<form onSubmit={handleOnSubmintForm}>
  <label>
    GistID:
    <input type="text" name="name" value={gistid} onChange={(e) => setGistid(e.target.value)}/>
  </label>
  <input type="submit" value="Отправить" />
</form>

        {/* Код писать здесь */}
    </Layout> );
}
 
export default Gist;