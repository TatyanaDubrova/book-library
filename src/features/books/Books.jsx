import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router"
import {makeStyles} from '@material-ui/core/styles/index';
import List from '@material-ui/core/List/index';
import ListItem from '@material-ui/core/ListItem/index';
import ListItemText from '@material-ui/core/ListItemText/index';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Divider} from "@material-ui/core/index";
import {useDispatch, useSelector} from "react-redux";
import Tooltip from '@material-ui/core/Tooltip';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center'
    },
    booksHeader: {
        margin: 10,
        padding: 20
    },
    list: {
        height: '90%',
        padding: 20,
        overflow: 'auto'
    },
    bookName: {
        color: theme.palette.primary.light,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
            textDecoration: 'underline'
        },
    },
    authorName: {
        color: theme.palette.primary.dark,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
            textDecoration: 'underline'
        },
    }
}));

export default function Books() {
    const classes = useStyles();
    const books = useSelector(state => state.books.books);
    const [localFavorites, setLocalFavorites] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({type: 'REQUEST_BOOKS'});
    }, []);

    const handleClick = (name, id) => {
        history.push(`/${name}/${id}`)
    };

    const addToFavorites = id => {
        !isInFavorites(id) &&
        setLocalFavorites([
            ...localFavorites,
            id
        ])
    };

    const isInFavorites = id => {
        return localFavorites.length ? localFavorites.includes(id) : false;
    };

    return (
        <div className={classes.root}>
            <div className={classes.booksHeader}>
                <Typography variant="h3" color="primary" align="center">Best Books Ever Written</Typography>
            </div>
            <div className={classes.list}>
                {
                    books.length && books.map((book, index) => {
                        const bookId = `book-list-book-${book.id}`;
                        const authorId = `book-list-author-${book.id}`;
                        return (
                            <>
                                <List>
                                    <Grid container justify="space-between">
                                        <Grid item>
                                            <ListItem className={classes.bookName} key={bookId} button
                                                      onClick={() => handleClick('book', book.id)}>
                                                <ListItemText id={bookId} primary={<Typography
                                                    variant="h6"> {book.name}</Typography>}/>
                                            </ListItem>
                                            <ListItem className={classes.authorName} key={authorId} button
                                                      onClick={() => handleClick('author', book.authorId)}>
                                                <ListItemText id={authorId} primary={<Typography
                                                    variant="subtitle1"> {book.author}</Typography>}/>
                                            </ListItem>
                                        </Grid>
                                        <Grid item>
                                            {book.favorite || isInFavorites(book.id) ?
                                                <StarIcon color="secondary"/>
                                                : <Tooltip title="Add to favorites?"
                                                           placement="top"><StarBorderIcon
                                                    onClick={() => addToFavorites(book.id)}
                                                    color="secondary"/></Tooltip>}
                                        </Grid>
                                    </Grid>
                                </List>

                                {index !== books.length - 1 ?
                                    <Divider style={{margin: 0}} variant="middle"/> : null}
                            </>
                        );
                    })}
            </div>
        </div>
    );
}
