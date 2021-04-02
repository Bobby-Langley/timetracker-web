import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

function NewActivityForm({ setActivitiesList, setLoading }) {
  const [newActivity, setNewActivity] = useState(null);

  function addTodo() {
    if (newActivity && newActivity.item && newActivity.item.trim()) {
      setLoading(true);
      fetch("https://todo-bl-api.web.app/activities/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newActivity),
      })
        .then((res) => res.json())
        .then((data) => {
          setActivitiesList(data);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          console.log("error:", e);
        });
    }
    setNewActivity(null);
  }

  return (
    <>
      <Form>
        <Form.Group controlId="form">
          <Form.Label>Add New Activity</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">Add a new event that you want to track.</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" value={addTodo()}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default NewActivityForm;
