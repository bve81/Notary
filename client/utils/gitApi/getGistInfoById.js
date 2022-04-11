//TODO: Функция должны подключаться к api github.com и возвращать объект вида {creator: ник создателя гиста, text: текст гиста, lastUpdate: дата последней модификации, }
import axios from "axios";

const getGistInfoById = async (gistId) => {
let id = gistId;
let info = axios.get(`https://api.github.com/gists/${id}`)
.then(res => {
    let info = res.data;
      return (info);}); 
const owner = info.then(result => result)
.then((result) =>{  
    let fileName = Object.values(result.files);
    let ownerInfo = {creator: result.owner.login, text: fileName[0].content, lastUpdate: result.updated_at }; return ownerInfo});
return (owner);

}
export default getGistInfoById;