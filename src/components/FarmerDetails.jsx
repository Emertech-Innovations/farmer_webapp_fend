import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import "./FarmerDetails.css";
const FarmerDetails = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container maxWidth="md">
      {data.map((farmer, index) => (
        <Accordion
          key={farmer._id}
          expanded={expanded === `${farmer._id}`}
          onChange={handleChange(`${farmer._id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="heading">
              <div>{index + 1}</div>
              <div className="name">{farmer.name}</div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="details">
              <h5>
                <b>Name:</b> <span>{farmer.name}</span>
              </h5>
              <h5>
                <b>Gender:</b>
                <span> {farmer.gender}</span>
              </h5>
              <h5>
                <b>Address:</b>
                <span> {farmer.address}</span>
              </h5>
              <h5>
                <b>Aadhar No:</b>
                <span> {farmer.name}</span>
              </h5>
              <h5>
                <b>Date of Birth:</b>
                <span> {farmer.dob}</span>
              </h5>
              <h5>
                <b>Age:</b>
                <span>{farmer.age}</span>
              </h5>
              <h5>
                <b>State:</b>
                <span>{farmer.state}</span>
              </h5>
              <h5>
                <b>District:</b>
                <span>{farmer.district}</span>
              </h5>
              <h5>
                <b>Tahshil:</b>
                <span>{farmer.tahshil}</span>
              </h5>
              <h5>
                <b>Village:</b>
                <span> {farmer.village}</span>
              </h5>
              <h5>
                <b>Pin Code:</b>
                <span>{farmer.pin_code}</span>
              </h5>
              <h5>
                <b>Email:</b>
                <span> {farmer.email}</span>
              </h5>
              <h5>
                <b>Phone No:</b>
                <span> {farmer.phone}</span>
              </h5>
              <h5>
                <b>Alternate Phone No:</b>
                <span> {farmer.alternate_phone}</span>
              </h5>
              <h5>
                <b>Total Area:</b>
                <span> {farmer.area}</span>
              </h5>
              <h5>
                <b>Soil Type:</b>
                <span>{farmer.soil}</span>
              </h5>
              <h5>
                <b>Total Crops:</b>
                <div className="crops__list">
                  {farmer.crops.map((crop, index) => (
                    <li key={index}>{crop},</li>
                  ))}
                </div>
              </h5>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FarmerDetails;
