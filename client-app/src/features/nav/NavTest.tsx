import React, { useContext } from "react";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../app/stores/activityStore";

// TODO: Update <Search> usage after its will be implemented
//TESTING FILE 
const NavTest = () => {
  const activityStore = useContext(ActivityStore);
  return(
  <Menu fixed="top" inverted>
    <Dropdown item icon="wrench" simple>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Icon name="dropdown" />
          <span className="text">New</span>

          <Dropdown.Menu>
            <Dropdown.Item>Document</Dropdown.Item>
            <Dropdown.Item>Image</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Item>
        <Dropdown.Item>Open</Dropdown.Item>
        <Dropdown.Item>Save...</Dropdown.Item>
        <Dropdown.Item>Edit Permissions</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Export</Dropdown.Header>
        <Dropdown.Item>Share</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Menu.Menu position="right">
      <div className="ui right aligned category search item">
        <div className="ui transparent icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search animals..."
          />
          <i className="search link icon" />
        </div>
        <div className="results" />
      </div>
    </Menu.Menu>
  </Menu>
  )
};

export default observer(NavTest);
