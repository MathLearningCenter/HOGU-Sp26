var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase",
  "level": "1",
  "url": "#shorttitlelowercase",
  "type": "Article",
  "number": "",
  "title": "MATH xxx Hands-On, Grades Up Session #x (Sections x-x)",
  "body": " MATH xxx Hands-On, Grades Up Session #x (Sections x-x)    Getting Warmed Up and In the Rigth Mindset    A bag contains the same size marbles in three different colors: red, blue, and white. The bag has 14 identical red marbles, 12 identical blue marbles, and 20 identical white marbles (all the same size). One marble is drawn from the bag and the color of the marble is noted. Let be the event the marble drawn is blue, the event the marble drawn is red, and W the event the marble drawn is white.      Let's Get Our Hands On    Now Grades Go Up   "
},
{
  "id": "shorttitlelowercase-2-2",
  "level": "2",
  "url": "#shorttitlelowercase-2-2",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "  A bag contains the same size marbles in three different colors: red, blue, and white. The bag has 14 identical red marbles, 12 identical blue marbles, and 20 identical white marbles (all the same size). One marble is drawn from the bag and the color of the marble is noted. Let be the event the marble drawn is blue, the event the marble drawn is red, and W the event the marble drawn is white.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
