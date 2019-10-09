import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles/index';
import {useHistory} from "react-router"
import Typography from '@material-ui/core/Typography'
import {useDispatch, useSelector} from "react-redux";
import {getAuthor} from '../../store/common/actions';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Divider} from "@material-ui/core";

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

export default function Author({match}) {
    const classes = useStyles();
    const author = useSelector(state => state.author.author);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getAuthor({id: match.params.id}));
    }, []);

    const handleClick = (name, id) => {
        history.push(`/${name}/${id}`)
    };

    return (
        <div className={classes.root}>
            <div className={classes.author}>
                <Typography className={classes.authorName}
                            variant="h4"> {author.authorName}</Typography>
                <div className={classes.biographyBlock}>
                    <span className={classes.biographyLabel}>Biography: </span>
                    <Typography className={classes.biography}
                                variant="subtitle1"> {author.biography}</Typography>
                </div>
                <div className={classes.biographyBlock}>
                    <span className={classes.biographyLabel}>Books: </span>
                    <div className={classes.list}>
                        {
                            Object.keys(author).length && author.books.length && author.books.map((book, index) => {
                                const bookId = `author-${book.bookId}`;
                                return (
                                    <>
                                        <List>
                                            <ListItem className={classes.bookName} key={bookId} button
                                                      onClick={() => handleClick('book', book.bookId)}>
                                                <ListItemText id={bookId} primary={<Typography
                                                    variant="h6"> {book.bookName}</Typography>}/>
                                            </ListItem>
                                        </List>

                                        {index !== author.books.length - 1 ?
                                            <Divider style={{margin: 0}} variant="middle"/> : null}
                                    </>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}
