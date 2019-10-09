import authors from './mocks/authors'

export const getAuthors = async () => {
    try {
        return authors;
    } catch (error) {
        throw error;
    }
};

export const getAuthor = async (query) => {
    try {
        const author = authors.find(el => {return el.authorId == query.id});
        return author;
    } catch (error) {
        throw error;
    }
};
