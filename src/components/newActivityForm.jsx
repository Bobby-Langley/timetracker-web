import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

function NewActivityForm({ setActivitiesList, setLoading }) {
  const [newActivity, setNewActivity] = useState(null);

  function addNewActivity() {
    if (newActivity && newActivity.item && newActivity.item.trim()) {
      setLoading(true);
      fetch("https://tracker-bl.web.app/activities", {
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
      <Form className="activitiesRow">
        <Form.Group controlId="form">
          <Form.Label>Add New Activity</Form.Label>
          <Form.Control type="text" placeholder="Enter new activity" />
          <Form.Text className="text-muted">Add a new event that you want to track.</Form.Text>
          <Button variant="primary" type="submit" onChange={(e) => setNewActivity({ item: e.target.value})} onClick={() => addNewActivity()}
          >
            Add
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default NewActivityForm;
