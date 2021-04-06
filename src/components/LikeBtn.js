// Ref. from Network Connection (totally new approach for me- EXCITING!). //

import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";


function Like() {
  
  // I still need to setup an account with Vercel/figure out GitHub retieval method for API targeted information.  Speak to contact; and see if he likes your TypeScript appproach (?can he help you troubleshoot?).  //
  const uri = "";
  const postUri = "";

  const [numLike, updateLike] = useState(0);
  const [likeCounter, upadteCounter] = useState(0);
  const [btnState, upadteBtn] = useState(true);
  const [likeClass, updateClass] = useState("far fa-heart");

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        updateLike(res.data.data);
        upadteBtn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function clickHandler() {
    updateClass("far fa-heart animate-like");
    updateLike(numLike + 1);
    upadteCounter(likeCounter + 1);

    if (likeCounter > 3) {
      upadteBtn(true);
    }

    axios
      .post(postUri)
      .then((res) => {
        console.log(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      updateClass("far fa-heart");
    }, 500);
  }

  return (
    <Nav.Item className="like-item">
      <Button className="like-btn" onClick={clickHandler} disabled={btnState}>
        <i className={likeClass} style={{ color: "#fb6fcd" }}></i> {numLike}
      </Button>
    </Nav.Item>
  );
}

export default Like;