import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

function Activities() {
  const [activitiesList, setActivitiesList] = useState(null);
  useEffect(() => {
    fetch("https://tracker-bl.web.app/activities")
      .then((res) => res.json())
      .then((data) => setActivitiesList(data))
      .catch((error) => alert("Error getting Activities" + error));
  }, []);
  if (!activitiesList) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only"> Loading... </span>
      </Spinner>
    );
  }
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup className="Activities">
            {activitiesList.map((activity) => {
              return (
                <ListGroup.Item key={activity.id}>
                  {activity.name} <Button> Test </Button>{" "}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Activities;
