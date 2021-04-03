import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3,
  },
}));

function Nav() {
    const classes = useStyles();
    const [location, setLocation] = React.useState('all');
    const [sort, setSort] = React.useState('us');

    const handleChangeSort = (event) => {
        setSort(event.target.value);
      };
    
    const handleChangeLocation = (event) => {
    setLocation(event.target.value);
    };

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h3" className={classes.title}>
                Employee Directory
                </Typography>
                
                <FormControl component="fieldset">
                    <RadioGroup aria-label="sort" name="sort" value={sort} onChange={handleChangeSort}>
                        <FormControlLabel value="us" control={<Radio />} label="Alphabetical" />
                        <FormControlLabel value="int" control={<Radio />} label="Alphabetical, Reverse" />
                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <RadioGroup aria-label="location" name="location" value={location} onChange={handleChangeLocation}>
                        <FormControlLabel value="all" control={<Radio />} label="All" />
                        <FormControlLabel value="us" control={<Radio />} label="United States" />
                        <FormControlLabel value="int" control={<Radio />} label="International" />
                    </RadioGroup>
                </FormControl>

            </Toolbar>
        </AppBar>
        </>
    )
}

export default Nav
