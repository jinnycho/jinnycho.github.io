// Ideas
import dreamingHouse001Text from '../writings/ideas/architecture/dreamHouse001.md';
import joshuaTreeText from '../writings/ideas/travel/joshuaTree.md';

// Books
import courageToBeDislikedText from '../writings/books/psychology/courageToBeDisliked.md';
import companyOfOneText from '../writings/books/entrepreneur/companyOfOne.md';

// Hobbies
import myFirstTableText from '../writings/hobbies/woodworking/myFirstTable.md';
import powertools101Text from '../writings/hobbies/woodworking/powertools101.md';

// Tech
import myBlogHistoryText from '../writings/tech/create/myBlogHistory.md';

// Fun Fact
import platypusText from '../writings/funfact/animals/platypus.md';
import honeyBadgerText from '../writings/funfact/animals/honeybadger.md';


const categoryIDToValue = {
    'ideas': 'Ideas',
    'books': 'Books',
    'hobbies': 'Hobbies',
    'tech': 'Tech',
    'funfacts': 'Fun Facts',
};

const categoryIDTosubCategoriesIDs = {
    'ideas': ['architecture', 'travel'],
    'books': ['psychology', 'entrepreneur'],
    'hobbies': ['woodworking'],
    'tech': ['create'],
    'funfacts': ['animals'],
};

const subCategoryIDToValue = {
    'architecture': 'Architecture',
    'travel': 'Travel',
    'psychology': 'Psychology',
    'woodworking': 'Woodworking',
    'create': 'Create',
    'entrepreneur': 'Entrepreneur',
    'animals': 'Animals',
}

const subCategoryIDToTitleIDs = {
    'architecture': ['houseIdeas001'],
    'travel': ['joshuaTree'],
    'psychology': ['courageToBeDisliked'],
    'woodworking': ['myFirstTable', 'powertools101'],
    'create': ['myBlogHistory'],
    'entrepreneur': ['companyOfOne'],
    'animals': ['platypus', 'honeybadger'],
}

const contentsTitleIDToValue = {
    // Ideas
    'houseIdeas001': 'I Want To Build My Own House (0.0.1)',
    'joshuaTree': 'Joshua.. Tree?',

    // Books
    'courageToBeDisliked': 'Courage To Be Disliked',
    'companyOfOne': 'Company Of One',

    // Hobbies
    'myFirstTable': 'The First Table I Made',
    'powertools101': 'Power Tools 101',

    // Tech
    'myBlogHistory': 'The Evolution of My Blogging Journey',

    // Fun Facts
    'platypus': 'An Animal Without A Stomach?!',
    'honeybadger': 'The Most Fearless Animal On Earth'
}

const contentsTitleIDToContentsContentValue = {
    // Ideas
    'houseIdeas001': dreamingHouse001Text,
    'joshuaTree': joshuaTreeText,

    // Books
    'courageToBeDisliked': courageToBeDislikedText,
    'companyOfOne': companyOfOneText,

    // Hobbies
    'myFirstTable': myFirstTableText,
    'powertools101': powertools101Text,

    // Tech
    'myBlogHistory': myBlogHistoryText,
    'platypus': platypusText,
    'honeybadger': honeyBadgerText,
}

export {
    categoryIDToValue,
    categoryIDTosubCategoriesIDs,
    subCategoryIDToValue,
    subCategoryIDToTitleIDs,
    contentsTitleIDToValue,
    contentsTitleIDToContentsContentValue,
}