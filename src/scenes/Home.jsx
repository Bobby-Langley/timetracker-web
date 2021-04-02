import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import NewActivityForm from "../components/newActivityForm";
import Activities from "./Activities";

function Home() {
    const [activitiesList, setActivitiesList] = useState(null);
    //   const [loading, setLoading] = useState(null)
      useEffect(() => {
        //   setLoading(true)
        fetch("https://tracker-bl.web.app/activities")
          .then((res) => res.json())
          .then((data) => 
            setActivitiesList(data))
            // setLoading(false)
          .catch((error) => alert("Error getting Activities" + error));
      }, [])
      if (!activitiesList) {
        return (
          <Spinner animation="border" role="status">
            <span className="sr-only"> Loading... </span>
          </Spinner>
        )
      }

  return (
    <>
      <NewActivityForm setActivitiesList = {setActivitiesList} />
      <Activities activitiesList = {activitiesList} />
    </>
  );
}

export default Home
