import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

function Employee({title, nameF, nameL, image, city, country, email, phone}) {
    const classes = useStyles();
    const url = "https://www.google.com/search?q=" + nameF + " " + nameL + " " + country
    return (
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
          <Grid item>
            <ButtonBase className={classes.image} href={url}>
              <img className={classes.img} alt="complex" src={image} />
            </ButtonBase>
          </Grid>
          
          <Grid item xs={12} sm container>

          <Grid item xs container direction="column" spacing={2}>
            
          <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {title} {nameF} {nameL}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Email: {email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Phone: {phone}
                </Typography>
              </Grid>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">{city}, {country}</Typography>
            </Grid>
          </Grid>
          </Paper>


        </Grid>
    )
}

export default Employee
