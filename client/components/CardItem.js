import { Card } from "semantic-ui-react";

const CardItem = ({ list }) => {
  const onCardClick = (gistId) => console.log(gistId);

  return list.map(({ title, owner, gistId, gistHash }) => (
    <Card
      onClick={() => onCardClick(gistId)}
      key={gistId}
      href={`#${gistId}`} /*mock href*/
      header={title}
      meta={`GistId: ${gistId}`}
      extra={`Автор: ${owner}`}
      description={`GistHash: ${gistHash}`}
    />
  ));
};

export default CardItem;
