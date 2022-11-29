

// $(document).ready(onReady);

// function onReady() {
//   getQuotes();
// }

// function getQuotes() {
//   $.ajax({
//     method: "GET",
//     url: "/quotes",
//   }).then(function (response){
//     console.log('response from server', response)
//     appendToDom(response);
//   })
// }

// function appendToDom(array){
//     console.log('appendToDom', array);
//     for (let item of array)
//     $('#quotes').append(`
//         <li>"${item.text}" said by ${item.author}</li>
//     `)
// }
console.log('Here are all the available people:', people);
 
$(onReady);
 
function onReady(){
   console.log("Ready!");
   $('#body').append(`<h1> Click On ${people[pickOne].name}</h1>`);
   $('#body').on('click', '.pic', onClick);
   allPeople();
}

// let person = people.name;
// let person = people[randomNumber(0,6)].name;

function allPeople(){
    for (let i=0; i<people.length; i++){
        $('#body').append(`<div class="pic" data-name="${people[i].name}"><img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}"></img></div>`);
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

let pickOne = randomNumber(0,people.length)

function onClick(){
    if($(this).data('name') === `${people[pickOne].name}`){
        $(this).css('border', '10px solid green')
        alert("Correct!");
        setTimeout(goAway, 2000)
        // window.location.reload();
        function goAway(){
            window.location.reload()
        }
    
    } else {
        alert('Incorrect guess...try again!');
    }
}
