import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ServicesImg from "../../../public/assets/images/pexels-sindre-fs-1040880.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { apiUrl, imageUrl } from "../../backend/dashboard/common/Http";

const Team = () => {
  const [members, setMembers] = useState([]);
  const fetchApi = async () => {
    const res = await fetch(apiUrl + "latest-members?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == true) {
      setMembers(result.data);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="team py-5">
      <div className="text-center">
        <h4 className="section_sub_title">Team</h4>
        <h2 className="">Our Team</h2>
        <p>
          We specialize in a wide range of construction services, including
          residential, commercial, and industrial projects.
        </p>
      </div>
      <div className="container py-5">
        <div className="row">
          {members &&
            members.map((item) => (
              <div key={item.id} className="col-md-3">
                <Card className="card_head shadow">
                  <Card.Img
                    variant="top"
                    className="card_image"
                    src={`${imageUrl}uploads/our_team/${item.image}`}
                  />
                  <Card.Body className="card_body">
                    <div className="card-title">
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Title>{item.designation}</Card.Title>
                    </div>
                    {item.link && (
                      <Link to={item.link} className="team_linkedin">
                        <FaLinkedin />
                      </Link>
                    )}
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
