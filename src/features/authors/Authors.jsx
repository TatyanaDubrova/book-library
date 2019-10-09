import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {makeStyles} from '@material-ui/core/styles/index';
import List from '@material-ui/core/List/index';
import ListItem from '@material-ui/core/ListItem/index';
import ListItemText from '@material-ui/core/ListItemText/index';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Divider} from "@material-ui/core/index";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center'
    },
    authorsHeader: {
        margin: 10,
        padding: 20
    },
    authorName: {
        color: theme.palette.primary.dark,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
            textDecoration: 'underline'
        },
    },
    bookName: {
        color: theme.palette.primary.light,
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
            textDecoration: 'underline'
        },
    },
    list: {
        height: '90%',
        padding: 20,
        overflow: 'auto'
    }
}));

export default function Authors() {
    const classes = useStyles();
    const authors = useSelector(state => state.authors.authors);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuAuthor, setMenuAuthor] = React.useState(null);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({type: 'REQUEST_AUTHORS'});
    }, []);

    const handleMenuOpen = (event, id) => {
        const author = authors.find(el => el.authorId === id);
        setMenuAuthor(author);
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (name, id) => {
        setAnchorEl(null);
        setMenuAuthor(null);
        history.push(`/${name}/${id}`)
    };

    const handleClickAway = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <div className={classes.authorsHeader}>
                <Typography variant="h3" color="primary" align="center">Authors</Typography>
            </div>
            <List className={classes.list}>
                {
                    authors.length && authors.map((author, index) => {
                        const authorId = `author-list-label-${author.authorId}`;
                        return (
                            <>
                                <List>

                                    <ListItem key={authorId} button className={classes.authorName}
                                              onClick={(e) => handleMenuOpen(e, author.authorId)}>
                                        <ListItemText id={authorId} primary={<Typography
                                            variant="subtitle1"> {author.authorName}</Typography>}/>
                                    </ListItem>

                                    {menuAuthor ?
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClickAway}
                                        >
                                            <MenuItem className={classes.authorName}
                                                      onClick={() => handleMenuClose('author', menuAuthor.authorId)}><Typography
                                                variant="subtitle1"> {menuAuthor.authorName}</Typography></MenuItem>
                                            <Divider style={{margin: 0}} variant="middle"/>
                                            {menuAuthor.books.length && menuAuthor.books.map(book => (
                                                <MenuItem className={classes.bookName}
                                                          onClick={() => handleMenuClose('book', book.bookId)}><Typography
                                                    variant="subtitle2">{book.bookName}</Typography></MenuItem>
                                            ))}

                                        </Menu> : null}
                                </List>

                                {index !== authors.length - 1 ? <Divider style={{margin: 0}} variant="middle"/> : null}
                            </>

                        );
                    })}
            </List>
        </div>
    );
}
