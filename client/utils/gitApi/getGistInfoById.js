//TODO: Функция должны подключаться к api github.com и возвращать объект вида {creator: ник создателя гиста, text: текст гиста, lastUpdate: дата последней модификации, }
const getGistInfoById = async (gistId) => {
    const response = await fetch(`https://api.github.com/gists/${gistId}`)
    .catch((error) => alert(error));
    const data = await response.json();
    let fileName = Object.values(data.files);
    let owner = {creator: data.owner.login, text: fileName[0].content, lastUpdate: data.updated_at };

return (owner);

}
export default getGistInfoById;