import React from "react";
import { Card, Row } from "react-bootstrap";
import {
  getAllSocialAccounts,
  getCityAndState,
  getEmail,
  getFullName,
  getMobileNumber,
  getProfile
} from "../../utilities";
import { SocialAccount } from "../common/SocialAccount";
import { TextIcon } from "../common/TextIcon";

export const Introduction = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Row>
            <Card.Title>
              <p className="h1">{getFullName()}</p>
            </Card.Title>
            <Card.Subtitle>
              <p className="h5 text-muted">{getProfile()}</p>
            </Card.Subtitle>
            <Card.Text style={{ paddingBottom: "0.5rem" }}>
              <TextIcon type="fas" name="at" size="lg" text={getEmail()} />
              <TextIcon
                type="fas"
                name="map-marker-alt"
                size="lg"
                text={getCityAndState()}
              />
              <TextIcon
                type="fas"
                name="mobile-alt"
                size="lg"
                text={getMobileNumber()}
              />
            </Card.Text>
          </Row>
          <Row>
            <Card.Text>
              {getAllSocialAccounts().map((item) => (
                <SocialAccount key={`social-${item.rank}`} social={item} />
              ))}
            </Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
