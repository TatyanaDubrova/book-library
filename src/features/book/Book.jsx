import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles/index';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import {getBook} from '../../store/common/actions';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder'
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center'
    },
    book: {
        height: '90%',
        padding: 20,
        overflow: 'auto'
    },
    bookName: {
        color: theme.palette.primary.main,
        padding: 15
    },
    itemBlock: {
        padding: '5px 30px'
    },
    itemLabel: {
        color: theme.palette.primary.light,
    },
    itemName: {
        display: 'inline-block',
        paddingLeft: 20,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
            textDecoration: 'underline'
        },
    },
    descriptionName: {
        display: 'inline-block',
        color: theme.palette.primary.contrastText,
        paddingTop: 10
    },
    starBlock: {
        paddingTop: 20,
        paddingRight: 20,
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
        }
    }
}));

export default function Book({match}) {
    const classes = useStyles();
    const book = useSelector(state => state.book.book);
    const [favorite, setFavorite] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getBook({id: match.params.id}));
    }, []);

    const handleClick = (name, id) => {
        history.push(`/${name}/${id}`)
    };

    const handleStarClick = () => {
        setFavorite(prev => !prev);
    };

    return (
        <div className={classes.root}>
            <div className={classes.book}>
                <Grid container>
                    <Grid item md={10}>
                        <Typography className={classes.bookName}
                            variant="h4"> {book.name}</Typography>
                        <div className={classes.itemBlock}>
                            <span className={classes.itemLabel}>Author: </span>
                            <Typography onClick={() => handleClick('author', book.authorId)}
                                        className={classes.itemName}
                                        variant="subtitle1"> {book.author}</Typography>
                        </div>
                        <div className={classes.itemBlock}>
                            <span className={classes.itemLabel}>Genre: </span>
                            <Typography onClick={() => handleClick('genre', book.genreId)}
                                className={classes.itemName}
                                variant="subtitle1"> {book.genre}</Typography>
                        </div>
                        <div className={classes.itemBlock}>
                            <span className={classes.itemLabel}>Description: </span>
                            <Typography className={classes.descriptionName}
                                        variant="subtitle1"> {book.description}</Typography>
                        </div>
                    </Grid>
                    <Grid item md={2} className={classes.starBlock}>
                        {book.favorite && favorite ?
                            <Tooltip title="Delete from favorites?" placement="top">
                                <StarIcon  onClick={handleStarClick} color="secondary"/></Tooltip>
                            : <Tooltip title="Add to favorites?" placement="top">
                                <StarBorderIcon  onClick={handleStarClick} color="secondary"/>
                        </Tooltip>}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
