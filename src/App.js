import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import ContainerLegends from "./components/Legends/ContainerLegends";

function App() {
  return (
    <Container className="text-center mt-5">
      <Header />
      <ContainerLegends />
    </Container>
  );
}

export default App;
