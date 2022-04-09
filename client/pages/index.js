import Layout from "../components/Layout";

//TODO: здесь должен быть код который принимает из пропсов массив объектов list типа {owner : "", gistId: "", gistHash: "" } возвращает список нажимаемых карточек.
//TODO: По нажатию на карточку в консоль должен выводиться gistId
// Для теста уже закинул массив в пропсы


const Index = (props) => {
  console.log(props.list);
  return <Layout>
    {/* Код писать здесь */}
  </Layout>;
};


export async function getStaticProps() {
  const list = [
    {
      owner: "Первый создатель",
      gistId: "0000000001",
      gistHash: "#####################__1",
    },
    {
      owner: "Второй создатель",
      gistId: "0000000002",
      gistHash: "#####################__2",
    },
    {
      owner: "Третий создатель",
      gistId: "0000000003",
      gistHash: "#####################__3",
    },
  ];
  return {
    props: {list}, 
  }
}

export default Index;
