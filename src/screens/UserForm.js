import React, { useState } from "react"
import {
  Grid,
  TextField,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core"

import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import history from "../components/history"

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

//Data
const initialValues = {
  firstName: "",
  lastName: "",
  occupation: "",
  city: "",
  country: "",
  email: "",
  password: "",
  showPassword: false,
}

const options = [
  { label: "Computer Programmer", value: "Computer_programmer" },
  { label: "Web Developer", value: "web_developer" },
  { label: "User Experience Designer", value: "user_experience_designer" },
  { label: "Systems Analyst", value: "systems_analyst" },
  { label: "Quality Assurance Tester", value: "quality_assurance_tester" },
]

const UserForm = () => {
  const [values, setValues] = useState(initialValues)

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const classes = useStyle()

  //   Handle Field Change
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    history.push("/Submit")
  }

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item md={6}>
        <Card className={classes.padding}>
          <CardHeader title="REGISTER FORM"></CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Grid item container spacing={1} justify="center">
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    name="firstName"
                    required
                    helperText="First name is required."
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    name="lastName"
                    required
                    helperText="Last name is required."
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Occupation
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Occupation"
                      value={values.occupation}
                      onChange={handleChange}
                      name="occupation">
                      <MenuItem>None</MenuItem>
                      {options.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="Country"
                    variant="outlined"
                    fullWidth
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      name="password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                type="Submit"
                className={classes.button}
                onClick={handleSubmit}>
                REGISTER
              </Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserForm
