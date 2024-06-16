import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import MenuItem from './MenuItem';

// Example data structure for an Indian cuisine menu
const menuData = [
  {
    title: "Starters",
    items: [
      { id: 1, name: "Samosa", description: "Crispy pastries filled with spiced potatoes and peas.", price: 5.00, imageUrl: "/images/samosa.jpg" },
      { id: 2, name: "Paneer Tikka", description: "Grilled chunks of paneer marinated in spices and yogurt.", price: 7.00, imageUrl: "/images/paneer-tikka.jpg" }
    ]
  },
  {
    title: "Mains",
    items: [
      { id: 3, name: "Butter Chicken", description: "Creamy tomato curry with tender pieces of chicken.", price: 12.00, imageUrl: "/images/butter-chicken.jpg" },
      { id: 4, name: "Palak Paneer", description: "Paneer cubes in a thick spinach sauce with mild spices.", price: 10.00, imageUrl: "/images/palak-paneer.jpg" }
    ]
  },
  {
    title: "Desserts",
    items: [
      { id: 5, name: "Gulab Jamun", description: "Soft milk balls soaked in rose-scented syrup.", price: 5.00, imageUrl: "/images/gulab-jamun.jpg" },
      { id: 6, name: "Kheer", description: "Rice pudding flavored with cardamom and garnished with nuts.", price: 4.50, imageUrl: "/images/kheer.jpg" }
    ]
  }
];

const MenuSection = () => {
  return (
    <div>
      {menuData.map((section, index) => (
        <Paper style={{ padding: '20px', margin: '20px 0' }} key={index}>
          <Typography variant="h4" style={{ marginBottom: '20px' }}>{section.title}</Typography>
          <Grid container spacing={3}>
            {section.items.map(item => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <MenuItem {...item} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default MenuSection;
