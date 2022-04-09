import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

//TODO: надо дописать код так, чтобы компонент Header был вверху каждого компонента, находящегося внутри Layout
const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
