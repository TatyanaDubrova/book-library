import React from 'react'
import {makeStyles} from '@material-ui/core/styles/index'
import {Container} from '@material-ui/core/index'
import Header from "../../features/header";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',

    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));
export default function Dashboard({children}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Header/>
                <Container maxWidth="sm" className={classes.container}>
                    {children}
                </Container>
            </main>
        </div>
    )
}
