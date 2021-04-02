import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

function Activities({activitiesList}) {
 
  return (
    <Container>
      <Row className="activitiesRow">
        <h1 style={{ float: "center" }}>Your Activites</h1>
        <Col style={{ justifyContent: "center" }}>
          <ListGroup className="Activities">
            {activitiesList.map((activity) => {
              return (
                <ListGroup.Item key={activity.id}>
                  {activity.name} <Button style={{ float: "right" }}> Test </Button>{" "}
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
