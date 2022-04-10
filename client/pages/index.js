import Layout from "../components/Layout";
import CardItem from "../components/CardItem";
import SearchComponent from "../components/SearchComponent";
import { Card, Grid, Header } from "semantic-ui-react";
import { useState } from "react";

//TODO: здесь должен быть код который принимает из пропсов массив объектов list типа {owner : "", gistId: "", gistHash: "" } возвращает список нажимаемых карточек.
//TODO: По нажатию на карточку в консоль должен выводиться gistId
// Для теста уже закинул массив в пропсы

const style = {
  h3: {
    margin: "2em 0",
  },
};

const Index = (props) => {
  const [list, setList] = useState(props.list);
  const searchResultCallback = (foundedContract) =>
    setList(foundedContract ? [foundedContract] : props.list);

  return (
    <Layout>
      <Grid verticalAlign="middle">
        <Grid.Column width={8}>
          <Header as="h3" textAlign="center" style={style.h3}>
            Контракты:
          </Header>
        </Grid.Column>

        <Grid.Column width={8} textAlign="right">
          <SearchComponent
            list={list}
            searchResultCallback={searchResultCallback}
          />
        </Grid.Column>
      </Grid>

      <Card.Group itemsPerRow="2">
        <CardItem list={list} />
      </Card.Group>
    </Layout>
  );
};

export async function getStaticProps() {
  const list = [
    {
      title: "Первый контракт",
      owner: "Первый создатель",
      gistId: "0000000001",
      gistHash: "#####################__1",
    },
    {
      title: "Второй контракт",
      owner: "Второй создатель",
      gistId: "0000000002",
      gistHash: "#####################__2",
    },
    {
      title: "Загловок третьей сделки",
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
