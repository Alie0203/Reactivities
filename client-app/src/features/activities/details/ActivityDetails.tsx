import React, { useContext, useEffect } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps, Link } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({match, history}) => {
  const activityStore = useContext(ActivityStore);
  const {
    activity,
    loadActivity,
    loadingInitial
  } = activityStore;
  //fluid in the card tag makes the card to expand and fill
  //all the space of the column
  //Button group enables to have multiple buttons evenly spaced
  //<Button.Group widths={2}> widths is the number of buttons in the group
  //this makes the button to have all the space and divide equally between the buttons

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingInitial || !activity) return <LoadingComponent content="Loading activity" />;
  //!activty added to avoid error when activity is not found. As there is a possibilty 
  //that activity may not found there is an option that activity could be undefined in the 
  //activityStore file. By adding !activity, the loading component will be displayed when
  //activity is not found

  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity!.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity!.title}</Card.Header>
        <Card.Meta>
          <span>{activity!.date}</span>
        </Card.Meta>
        <Card.Description>{activity!.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
          as={Link} to={`/manage/${activity.id}`}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => history.push('/activities')}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetails);

//Activity! " ! " is added to remove an error message showing the element might be undefined
//as it can be null

//onClick={() => history.goBack()}, this can be done. But if a link is copied and searched for, 
//it will go back to the previous page on the search engine rather than the application itself
//therefor, history.push(/activites/) is used to go to the activities page if an activity is opned using 
//a link.  