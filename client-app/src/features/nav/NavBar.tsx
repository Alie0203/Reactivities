import React, { useContext } from "react";
import { Menu, Container, Button, Flag } from "semantic-ui-react";
import ActivityStore from '../../app/stores/activityStore';
import { observer } from "mobx-react-lite";

const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            onClick={activityStore.openCreateForm}
            floated="right"
            positive
            content="Create Activity"
          />
        </Menu.Item>
        <Menu.Item>
          <Flag name="er" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);

// the navbar is created using semantic UI
//fixed='top' makes the navbar fixed at the top
// <Container> </Container> is from the semantic-ui-container
// <Button is imported from semantic-ui-container and postive makes it green
//style={{marginRight: 10}}  makes space after the image. it can also be written as '10px' inside qoutes
