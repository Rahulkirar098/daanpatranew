import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link,useHistory } from "react-router-dom";
import "./signup.css";
import Fade from "react-reveal/Fade";
import swal from "sweetalert";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  
  const[first_name,setFristName] = useState('');
  const[last_name,setLastName] = useState('');
  const[contact,setContact] = useState('');
  
  const history = useHistory()

  const signUp = () =>{

        
        let data = {first_name,last_name,contact};

        fetch("http://35.154.26.180/user-register/",{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        }).then((result)=>{
          console.log("result",result);
        })
        console.log(data)
        swal("Good job!", "You Register!", "success");
        history.push('/login')

      }


 
  return (
    <Fade bottom>
      <Container component="main" maxWidth="xs" className="signup">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={first_name}
                onChange={(e)=>{setFristName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={last_name}
                onChange={(e)=>{setLastName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNo"
                label="Contact number"
                name="phoneNo"
                autoComplete="phoneNo"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Grid>
            
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
        <Box mt={5}></Box>
      </Container>
    </Fade>
  );
}
