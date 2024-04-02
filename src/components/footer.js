
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} >
          <Grid item xs={12} sm={4} style={{textAlign:"center",fontSize:"16px"}}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              QuickLinK
            </Typography>
            <div><Link href="/productPage" color="text.secondary">
              Products
            </Link></div>
            <div><Link
              href="/ordernow"
              color="text.secondary"
              sx={{ pl: 1, pr: 1 }}
            >
              Orders
            </Link></div>
            <div><Link href="/DealerList" color="text.secondary">
              Dealers
            </Link></div>
            <div><Link href="/orderstatus" color="text.secondary">
              Order Status
            </Link></div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" color="text.secondary">
            <div style={{ display: "flex", flexDirection: "column", marginLeft: '20px', textAlign:"center" }}>
               <Typography variant="h6" color="text.primary" gutterBottom>
              Contact our Team
            </Typography>
                    <div>
                        Contact Admin: <CallIcon style={{ fontSize: "10px", marginRight: '5px' }} /><Link href="tel:+911234567890">1234567890</Link>
                    </div>
                    <div>
                        Contact Supply chain manager: <CallIcon style={{ fontSize: "10px", marginRight: '5px' }} /><Link href="tel:+911234567890">1234567890</Link>
                    </div>
                    <div>
                        Contact Workers Manager: <CallIcon style={{ fontSize: "10px", marginRight: '5px' }} /><Link href="tel:+911234567890">1234567890</Link>
                    </div>
            </div>
            </Typography>
        </Grid>
          <Grid item xs={12} sm={4} sx={{textAlign:"center"}}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Address
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Main Street, 
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Anytown,
            </Typography>
            <Typography variant="body2" color="text.secondary">
            USA,100223.
            </Typography>
          </Grid>
          </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {". | "}
            <Link color="inherit" href="/aboutus">
              About Us
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}