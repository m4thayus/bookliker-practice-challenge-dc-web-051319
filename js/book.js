class Book {
    constructor(id, title, description, img_url, users) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.img_url = img_url;
        this.users = users;
        Book.all.push(this);
    }

    static make(books) {
        books.forEach(book => {
            book = new Book (
                book.id,
                book.title,
                book.description,
                book.img_url,
                book.users
            );
        });
    }

    static findByElementId(elementId) {
        let bookId = elementId.split('-')[1];
        return Book.all.find( book => book.id == bookId);
    }

    like() {
        console.log(this);
        if (!this.users.includes(CURRENT_USER)) {
            console.log(this.users)
            this.users.push(CURRENT_USER);
            console.log(this.users)
            //Adapter.update(BOOKS_URL, this.id, this.users);
        } else {
            window.alert("You already like this book!");
        }
    }

}

Book.all = [];