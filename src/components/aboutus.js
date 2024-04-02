import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              At Stock Management Solutions, our mission is to provide efficient and effective tools
              for businesses to manage their stock and inventory seamlessly. We aim to simplify
              stock management processes, helping businesses save time and resources.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Our Team
            </Typography>
            <Typography paragraph>
              We are a passionate team of developers, designers, and business professionals dedicated
              to creating innovative solutions for stock management. Our diverse skills and
              backgrounds come together to build a platform that meets the unique needs of businesses
              across various industries.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography paragraph>
              Feel free to reach out to us if you have any questions or feedback. We value your input
              and are always looking for ways to improve our services.
            </Typography>
            <Typography>
              Email: info@stockmanagementsolutions.com
              <br />
              Phone: +1 (123) 456-7890
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
