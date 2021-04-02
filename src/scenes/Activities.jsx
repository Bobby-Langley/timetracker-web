import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Col, Container, Row, Spinner } from "react-bootstrap";

function Activities({activitiesList}) {
    
 
  return (
    <Container>
        <h1 style={{ float: "center", align: "center" }}>Your Activities</h1>
      <Row className="activitiesRow">
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
