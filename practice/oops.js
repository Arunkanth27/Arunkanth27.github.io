function Book ( author, title, description, publisher, price) {
    this.author =author;
    this.title=title;
    this.description=description;
    this.publisher=publisher;
    this.price=price;
    this.discount = function(items) {
        return items*(this.price-50);
    };

}

const novel = new Book('Dhoni', 'cricket', 'worldcup 2011','Arun', '1000');
const novel1 = new Book('Kohli', 'cricket', 'worldcup 2023','Arun', '2000');
// novel.Bookdetail = function () {
//     return this.author;
// }

Book.prototype.discount =  function(items) {
    return items *(this.price - 50);
}

function History (edition, author, title, description, publishers, price) {
    Book.call(this, author, title, description, publishers, price);
    Book.call(novel);
    this.edition = edition;
    this.discountPrice = function(items) {
        return items * (this.price - 60);
    };
    this.getAge = function () {

    return (new Date()).getTime()- (new Date(edition)).getTime();
}
}

History.prototype = Object.create(Book.prototype);

    const HistoryBook = new History('01-01-2100', 'pant', 'cricket', 'worldcup 2027', 'Arun', '10000');


// constructor class


    class Book {
        #maxItems;
        constructor(author, title, description, publishers, price) {
            this.author = author;
            this.title = title;
            this.description = description;
            this.publishers = publishers;
            this.price = price;
            this.#maxItems = 10;
            // this.discountPrice = function(items) {
            //     return items * (this.price - 20);
            // };
        }
        discountPrice (items) {
            return items * (this.price - 20);
        }
    }
    const novel = new Book('Dhoni', 'cricket', 'worldcup 2011','Arun', '1000');
    const novel1 = new Book('Kohli', 'cricket', 'worldcup 2023','Arun', '2000');

    class History extends Book {
        constructor (edition, author, title, description, publishers, price) {
            super(author, title, description, publishers, price);
        
        this.edition = edition;
        }
     discountPrice (items) {
            return items * (this.price - 60);
        }
        getAge () {
    
        return (new Date()).getTime()- (new Date(edition)).getTime();
    }
    }
    
        const HistoryBook = new History('01-01-2100', 'pant', 'cricket', 'worldcup 2027', 'Arun', '10000');
  


