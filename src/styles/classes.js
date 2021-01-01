import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  center: {
    textAlign: "center",
  },
  padding: {
    padding: theme.spacing(3),
  },
  formControl: {
    flexGrow: 1,
  },
  flex: {
    display: "flex",
  },
  button: {
    margin: theme.spacing(1),
  },
  autoCompleat: {
    margin: theme.spacing(1),
  },
  green: {
    backgroundColor: "green",
    color: "white",
  },
  table: {
    backgroundColor: "lightBlue",
  },
  img: {
    paddingTop: theme.spacing(8),
  },
}))
