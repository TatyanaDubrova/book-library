import books from './mocks/books'

export const getBooks = async () => {
    try {
        return books;
    } catch (error) {
        throw error;
    }
};

export const getBook = async (query) => {
    try {
        const book = books.find(el => {return el.id == query.id});
        return book;
    } catch (error) {
        throw error;
    }
};
