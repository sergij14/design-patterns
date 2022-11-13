class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }

  //   toHTML() {
  //     return `
  //         <div>
  //             <h1>${this.title}</h1>
  //             <p>${this.text}</p>
  //         </div>
  //     `;
  //   }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  html() {
    return `
        <div>
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>
    `;
  }

  json() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
      },
      null,
      2
    );
  }
}

const news = new News("title", "some text");
const newsPrinter = new NewsPrinter(news);

console.log(newsPrinter.html());
console.log(newsPrinter.json());
