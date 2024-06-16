import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';

// Styles defined using Material-UI's makeStyles
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px auto'
  },
  media: {
    height: 140
  }
});

// Sample data for the chef's bio, ideally fetched from a backend
const chefInfo = {
  name: "Chef John Doe",
  image: "path-to-chef-image.jpg", // Place a real image path here
  bio: "Chef John Doe has been delighting patrons at Downtown Denton Restaurant since 2010. With a passion for local ingredients and innovative techniques, he has crafted a menu that blends traditional flavors with modern culinary art. Chef John has received multiple awards for his creative dishes and continues to push the boundaries of culinary excellence."
};

const ChefInfo = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={chefInfo.image}
          title={`Portrait of ${chefInfo.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {chefInfo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {chefInfo.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChefInfo;
