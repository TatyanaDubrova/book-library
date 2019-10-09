import books from './books'
import book from './book'
import authors from './authors'
import author from './author'

export default function () {
    return [
        ...books(),
        ...book(),
        ...authors(),
        ...author(),
    ]
}
