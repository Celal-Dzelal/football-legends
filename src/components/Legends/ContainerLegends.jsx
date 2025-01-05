import Form from "react-bootstrap/Form";
import { Container, Row } from "react-bootstrap";
import { data } from "../../helpers/data";
import { useState } from "react";
import CardLegends from "./CardLegends";

const ContainerLegends = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value); //!Setter metodu her zaman asenkron çalışır
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div>
      <Form.Control
        className="w-50 mx-auto my-2"
        type="search"
        placeholder="Search Legends.."
        onChange={handleChange}
      />

      <Container className="p-3 my-3 card-container">
        <Row xs={1} md={2} xl={3} className="justify-content-center g-3">
          {filteredData.map((legend) => (
            <CardLegends key={legend.id} legend={legend} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ContainerLegends;
