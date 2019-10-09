import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import {
    BOOKS,
    BOOK,
    AUTHORS,
    AUTHOR,
    GENRE,
    FAVORITES
} from '../constants/routes'
import Dashboard from '../features/dashboard'
import Books from '../features/books'
import Book from '../features/book'
import Authors from '../features/authors'
import Author from '../features/author'
import Genre from '../features/genre'
import Favorites from '../features/favorites'

const Routes = () => (
  <Dashboard>
    <Switch>
        <Route exact path={BOOKS} component={Books}/>
        <Route exact path={BOOK} component={Book}/>
        <Route exact path={AUTHORS} component={Authors}/>
        <Route exact path={AUTHOR} component={Author}/>
        <Route exact path={FAVORITES} component={Favorites}/>
        <Route exact path={GENRE} component={Genre}/>
        <Redirect from="/" to={BOOKS} />
    </Switch>
  </Dashboard>
)

export default Routes
