import { Grid, Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import React from 'react'
import "./login.css"
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { margin } from '@mui/system';
function Login({handleChange}) {
    const paperStyle = { padding: "20px", height: "60vh", width: "350px", margin:"20px auto" }
    const avatarstyle={backgroundColor:"blue"}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarstyle}><LockPersonIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label="Username" placeholder='Enter username' variant="standard" fullWidth required style={{ marginBottom: "20px" }} />
                <TextField label="Password" placeholder='Enter Password' type="password" variant="standard" fullWidth required style={{ marginBottom: "20px" }} />
                <FormControlLabel
                    label="Remember me"
                    control={
                        <Checkbox
                            name="checkedB"
                            color='primary'

                        />
                    }

                />
                <Button type="submit" variant="contained" color="primary" fullWidth className='btnstyle'>Sign In</Button>
                <Typography>
                    <Link href="#">
                    Forgot password?
                    </Link>
                </Typography>
                <Typography>
                    Do you hava an account?
                    <Link href="#" onClick={()=>handleChange("event", 1)} >
                   Sign Up
                    </Link>
                </Typography>
            </Paper>

        </Grid>
    )
}

export default Login