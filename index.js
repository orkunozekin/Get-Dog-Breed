//Allow users to enter their breed and print the results into #results


function getDog(dogbreed) {
    let url = `https://dog.ceo/api/breed/${dogbreed}/images`;
    fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong with your dog breed')
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => console.log(err))
}


function displayResults(responseJson) {
   
        responseJson.message.forEach(element => {
            $('.results').append(`<img class="img" src="${element}" alt="breed">`)
        });

    
  
}


function main() {
    $('form').submit(event => {
        event.preventDefault();
        let dogbreed = $('#breed').val();
        getDog(dogbreed);
    })
}

$(main)