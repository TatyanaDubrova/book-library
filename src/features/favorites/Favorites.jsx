import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router"
import {makeStyles} from '@material-ui/core/styles/index';
import List from '@material-ui/core/List/index';
import ListItem from '@material-ui/core/ListItem/index';
import ListItemText from '@material-ui/core/ListItemText/index';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Divider} from "@material-ui/core/index";
import StarIcon from '@material-ui/icons/Star';
import {getBooks} from './../../api';



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
    const [favorites, setFavorites] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getBooks().then(res => {
            const favoriteBooks = res.filter(book => book.favorite === true);
            setFavorites([
                ...favorites,
                ...favoriteBooks
            ]);

        });
    }, []);

    const handleClick = (name, id) => {
        history.push(`/${name}/${id}`)
    };

    return (
        <div className={classes.root}>
            <div className={classes.booksHeader}>
                <Typography variant="h3" color="primary" align="center">Favorites</Typography>
            </div>
            <div className={classes.list}>
                {
                    favorites.length > 0 && favorites.map((book, index) => {
                        console.log('favorites:', favorites);
                        const bookId = `favorite-list-book-${book.id}`;
                        const authorId = `favorite-list-author-${book.authorId}`;
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
                                            <StarIcon color="secondary"/>
                                        </Grid>
                                    </Grid>
                                </List>

                                {index !== favorites.length - 1 ?
                                    <Divider style={{margin: 0}} variant="middle"/> : null}
                            </>
                        );
                    })}
            </div>
        </div>
    );
}
