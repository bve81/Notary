//TODO: Функция должны подключаться к api github.com и возвращать объект вида {creator: ник создателя гиста, text: текст гиста, lastUpdate: дата последней модификации, }
import axios from "axios";

const getGistInfoById = async (gistId) => {
let id = gistId;
let info = axios.get(`https://api.github.com/gists/${id}`)
.then(res => {
    let info = res.data;
      return (info);}); 
const owner = info.then(result => result)
.then((result) =>{let ownerInfo = {creator: result.owner.login, text: result.files, lastUpdate: result.updated_at }; return ownerInfo});

return (owner);

}
export default getGistInfoById;