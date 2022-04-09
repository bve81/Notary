import Layout from "../components/Layout";
import { Card, Header } from "semantic-ui-react";

//TODO: здесь должен быть код который принимает из пропсов массив объектов list типа {owner : "", gistId: "", gistHash: "" } возвращает список нажимаемых карточек.
//TODO: По нажатию на карточку в консоль должен выводиться gistId
// Для теста уже закинул массив в пропсы

const style = {
  h3: {
    margin: "2em 0",
  },
};

const Index = ({ list }) => {
  const onCardClick = (gistId) => console.log(gistId);
  const cardList = list.map(({ owner, gistId, gistHash }) => (
    <Card
      onClick={() => onCardClick(gistId)}
      key={gistId}
      href={`#${gistId}`} /*mock href*/
      header={owner}
      meta={`GistId: ${gistId}`}
      description={`GistHash: ${gistHash}`}
    />
  ));

  return (
    <Layout>
      <Header as="h3" textAlign="center" style={style.h3}>
        Контракты:
      </Header>
      <Card.Group itemsPerRow="2">{cardList}</Card.Group>
    </Layout>
  );
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
    props: { list },
  };
}

export default Index;
