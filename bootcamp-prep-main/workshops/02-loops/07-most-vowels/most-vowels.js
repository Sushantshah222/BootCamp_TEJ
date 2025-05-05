// YOUR CODE BELOW
const mostVowels = (str) => {
    const wordsArray = str
    .split(' ')
    .join(' ')
    .split('.')
    .join(' ')
    .split(',')
    .join(' ')
    .split(' ');
    let maxCowelCount = 0;
    let maxWord = '';
    const vowels = 'aeiouAEIOU'


    for (let i= 0; i<wordsArray.length; i++){
        currentWord = wordsArray[i];
        let currentCount = 0;

        for (var j=0; j<currentWord.length; j++){
            let currentLetter = currentWord[j];

            if (vowels.includes(currentLetter)){
                currentCount++;
            }
            
        }

        if (currentCount > maxCowelCount) {
            maxCowelCount = currentCount;
            maxWord = currentWord;
        }
    }

    return maxWord; 
};