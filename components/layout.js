import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

import useStyles from './../utils/styles';

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>E-Commerce Platform</title>
      </Head>
      <AppBar position="static" className={classes.naveBar}>
        <Toolbar>
          <Typography>SCommerce</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>
          SCommerce All Rights Reserved &copy;Copyright 2021
        </Typography>
      </footer>
    </div>
  );
}

export default Layout;
