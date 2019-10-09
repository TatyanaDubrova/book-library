import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles/index';
import {useHistory} from "react-router"
import Typography from '@material-ui/core/Typography'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Divider} from "@material-ui/core";
import {getBooks} from './../../api';
import Grid from "@material-ui/core/Grid";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder'
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center'
    },
    author: {
        padding: 20
    },
    authorName: {
        color: theme.palette.primary.main,
        padding: 15
    },
    bookName: {
        color: theme.palette.primary.light,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
            textDecoration: 'underline'
        },
    },
    biographyBlock: {
        padding: '5px 30px'
    },
    biographyLabel: {
        color: theme.palette.primary.light,
    },
    biography: {
        display: 'inline-block',
        color: theme.palette.primary.contrastText,
        paddingTop: 10
    }
}));

export default function Genre({match}) {
    const classes = useStyles();
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [localFavorites, setLocalFavorites] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getBooks().then(res => {
            const filtered = res.filter(el => el.genreId == match.params.id);
            setFilteredBooks([
                ...filteredBooks,
                ...filtered
            ]);

        });
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
            {
                filteredBooks.length > 0 ? <div className={classes.author}>
                 <Typography className={classes.authorName}
                            variant="h4"> {filteredBooks[0].genre}</Typography>

                <div className={classes.biographyBlock}>
                    <span className={classes.biographyLabel}>Books: </span>
                    <div className={classes.list}>
                        {
                            filteredBooks.map((book, index) => {
                                const bookId = `book-list-label-${book.bookId}`;
                                return (
                                    <>
                                        <List>
                                            <Grid container justify="space-between">
                                                <Grid item>
                                            <ListItem className={classes.bookName} key={book.id} button
                                                      onClick={() => handleClick('book', book.id)}>
                                                <ListItemText id={bookId} primary={<Typography
                                                    variant="h6"> {book.name}</Typography>}/>
                                            </ListItem>
                                            <ListItem className={classes.authorName} button
                                                      onClick={() => handleClick('author', book.authorId)}>
                                                <ListItemText id={bookId} primary={<Typography
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

                                        {index !== filteredBooks.length - 1 ?
                                            <Divider style={{margin: 0}} variant="middle"/> : null}
                                    </>
                                );
                            })}
                    </div>
                </div>
            </div> : null}
        </div>
    );
}
