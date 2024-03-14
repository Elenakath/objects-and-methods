const currentlyReading = {
  title: "The Fifth Season",
  author: "N.K. Jemisin",
  series: "Broken Earth Trilogy",
  pages: 512,
  publicationDate: "August 4th, 2015",
  currentChapter: 8,
  totalChapters: 23,
  awards: "Hugo Award for Best Novel (2016)",
  updateChapter: function (chapterNum) {
    this.currentChaper = chapterNum;
  }
};

currentlyReading.updateChapter(11);
//console.log(currentlyReading.title);
//console.log(currentlyReading["pages"]);
console.log(currentlyReading);