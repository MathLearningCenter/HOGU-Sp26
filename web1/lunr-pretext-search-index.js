var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "session1wks",
  "level": "1",
  "url": "#session1wks",
  "type": "Article",
  "number": "",
  "title": "MATH xxx Hands-On, Grades Up Session #x (Sections x-x)",
  "body": " MATH xxx Hands-On, Grades Up Session #x (Sections x-x)    Getting Warmed Up and In the Right Mindset    A bag contains the same size marbles in three different colors: red, blue, and white. The bag has 14 identical red marbles, 12 identical blue marbles, and 20 identical white marbles (all the same size). One marble is drawn from the bag and the color of the marble is noted. Let be the event the marble drawn is blue, the event the marble drawn is red, and W the event the marble drawn is white.      Let's Get Our Hands On   This is an image      Explain the meaning of .      Now Grades Go Up    The mathematical notation means    we need to find the value of the function at .    we need to investigate the -values of as gets very near from both the left and right sides of , but not necessarily at .    we need to find the horizontal asymptotes.    we need to find the instantaneous rate of change.    we need to investigate the -values as we approach only on the right side.        "
},
{
  "id": "session1wks-2-2",
  "level": "2",
  "url": "#session1wks-2-2",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "  A bag contains the same size marbles in three different colors: red, blue, and white. The bag has 14 identical red marbles, 12 identical blue marbles, and 20 identical white marbles (all the same size). One marble is drawn from the bag and the color of the marble is noted. Let be the event the marble drawn is blue, the event the marble drawn is red, and W the event the marble drawn is white.   "
},
{
  "id": "session1wks-3-3",
  "level": "2",
  "url": "#session1wks-3-3",
  "type": "Worksheet Exercise",
  "number": "2.1",
  "title": "",
  "body": "  Explain the meaning of .   "
},
{
  "id": "session1wks-4-2",
  "level": "2",
  "url": "#session1wks-4-2",
  "type": "Worksheet Exercise",
  "number": "3.1",
  "title": "",
  "body": "  The mathematical notation means    we need to find the value of the function at .    we need to investigate the -values of as gets very near from both the left and right sides of , but not necessarily at .    we need to find the horizontal asymptotes.    we need to find the instantaneous rate of change.    we need to investigate the -values as we approach only on the right side.      "
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
