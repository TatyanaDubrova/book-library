import React from 'react'
import {useHistory} from "react-router";
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        height: 88,
        backgroundColor: theme.palette.primary.main,
    },
    content: {
        flex: 1,
        padding: '0 24px',
        color: theme.palette.secondary.main,
    },
    link: {
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.secondary.dark,
            backgroundColor: 'transparent',
            textDecoration: 'underline'
        },
    }
}));

export default function Header() {
    const classes = useStyles();
    const history = useHistory();

    const handleRedirect = (name) => {
        if (history.location.pathname !== `/${name}`) {
            history.push(`/${name}`)
        }
    };

    return (
        <Grid container className={classes.root} justify="center" alignItems="center">
            <Grid item container className={classes.content} justify="center">
                <Grid item md={4}>
                    <ListItem onClick={()=> handleRedirect('books')} className={classes.link} button>
                        <ListItemText primary={<Typography
                            align="center" variant="subtitle1"> Books </Typography>}/>
                    </ListItem>
                </Grid>
                <Grid item md={4}>
                    <ListItem onClick={()=> handleRedirect('authors')} className={classes.link} button>
                        <ListItemText primary={<Typography
                            align="center" variant="subtitle1"> Authors </Typography>}/>
                    </ListItem>
                </Grid>
                <Grid item md={4}>
                    <ListItem onClick={()=> handleRedirect('favorites')} className={classes.link} button>
                        <ListItemText primary={<Typography
                            align="center" variant="subtitle1"> Favorites </Typography>}/>
                    </ListItem>
                </Grid>
            </Grid>
        </Grid>
    )
}
