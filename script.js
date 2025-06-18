const paragraph = "the quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "dog";

const index = paragraph.indexOf(searchTerm);

if (index !== -1) {
  const foundWord = paragraph.substring(index, index + searchTerm.length);
  console.log(foundWord);
} else {
  console.log("Слово не найдено.");
}
