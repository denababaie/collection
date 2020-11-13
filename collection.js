const collection = [
    {
      image: 'images/getoutaffiche.jpg',
      title: 'Get Out',
      author: 'Jordan Peele',
      category: 'Horror',
      link: 'https://www.youtube.com/watch?v=DzfpyUB60YY&ab_channel=MovieclipsTrailers',
      description:  'Get Out follows Chris, a young African-American man who uncovers a disturbing secret when he meets the family of his white girlfriend, Rose.'
    },
  
    {
        image: 'images/punkis.png',
        title: 'Persepolis ',
        author: 'Marjane Satrapi',
        category: 'Animated',
        link: 'https://www.youtube.com/watch?v=3PXHeKuBzPY&t=47s&ab_channel=SonyPicturesClassics' ,
        description:  'The story follows a young girl as she comes of age against the backdrop of the Iranian Revolution.'
    
      },

      {
        image: 'images/her.jpg',
        title: 'Her ',
        author: 'Spike Jonze',
        category: ['Romantic'],
        link: 'https://www.youtube.com/watch?v=6QRvTv_tpw0&t=55s&ab_channel=MovieclipsComingSoon',
        description:  'In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.'
    
      },

      {
        image: 'images/grandd.jpg',
        title: 'Grand Budapest Hotel ',
        author: 'Wes Anderson',
        category: 'Romantic',
        link: 'https://www.youtube.com/watch?v=1Fg5iWmQjwk&t=36s&ab_channel=SearchlightPictures',
        description:  ' A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotels glorious years under an exceptional concierge.'
    
      },


      {
        image: 'card-image',
        title: 'Lady Bird ',
        author: 'Greta Gerwig',
        category: 'Comedy',
        link: 'https://www.youtube.com/watch?v=cNi_HC839Wo&ab_channel=A24',
        description:  'In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.'
    
      },

      {
        image: 'images/par.png',
        title: 'Parasite',
        author: 'Bong Joon Ho ',
        category: 'Thriller',
        link: 'https://www.youtube.com/watch?v=5xH0HfJHsaY&t=13s&ab_channel=IGN',
        description:  'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan',
    
      },


      {
        image: 'images/Screen Shot 2020-11-10 at 11.18.42.png',
        title: '500 Days of Summer',
        author: 'Marc Webb',
        category: 'Romantic',
        link: 'https://www.youtube.com/watch?v=PsD0NpFSADM&ab_channel=SearchlightPictures',
        description:  ' An offbeat romantic comedy about a woman who doesnt believe true love exists, and the young man who falls for her.'
    
      },

      {
        image: 'images/spirited.jpg',
        title: 'Spirited Away',
        author: 'Hayao Miyazaki ',
        category: ['Animated'],
        link: 'https://www.youtube.com/watch?v=5-cro68n7CE&ab_channel=DigitalCin%C3%A9',
        description: 'During her familys move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.'
    
      },

      {
        image: 'images/Screen Shot 2020-11-10 at 16.25.18.png',
        title: 'Black Swan',
        author: 'Darren Aronofsky',
        category: 'Thriller',
        link: 'https://www.youtube.com/watch?v=5jaI1XOB-bs&ab_channel=SearchlightPictures',
        description:  'A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovskys "Swan Lake".'
    
      },
      
      {
        image: 'images/Screen Shot 2020-11-10 at 13.05.27.png',
        title: 'Gone Girl',
        author: 'David Fincher ',
        category: 'Thriller',
        link: 'https://www.youtube.com/watch?v=2-_-1nJf8Vg&ab_channel=20thCenturyStudios',
        description:  'With his wifes disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when its suspected that he may not be innocent.'
    
      },

];


for(let element of collection) {

  const column = document.createElement('div');
  column.classList.add('column','is-one-quarter') 

  const card = document.createElement('div')
  card.classList.add('card') 

  const card_image = document.createElement('div')
  card_image.classList.add('card-image')

  /*const img = document.createElement('img')
  img.setAttribute('src',element.image)
  img.setAttribute('alt', 'Placeholder image')*/

  /* encore ajouter figure class */

  const card_content = document.createElement ('div')
  card_content.classList.add('card-content')

  const media = document.createElement ('div')
  media.classList.add('media')

  const media_content = document.createElement ('div')
  media_content.classList.add('media-content')

  const has_text_right = document.createElement ('div')
  has_text_right.classList.add('has-text-right')

  const tag = document.createElement('span')
  tag.classList.add('tag','is-black')
  tag.classList.add('tag','is-info')
  tag.classList.add('tag','is-danger')
  tag.classList.add('tag','is-warning')
  tag.classList.add('tag','is-dark')

  const cardtitle = document.createElement('div')
  cardtitle.classList.add('cardtitle')

  const title = document.createElement('p')
  title.classList.add('title','is-4')

  const subtitle = document.createElement('p')
  subtitle.classList.add('title','is-6')
  
  const content = document.createElement('div')
  content.classList.add('content') 

  const cardtext = document.createElement('p')
  cardtext.classList.add('cardtext') 



  const link = document.createElement('p')
  link.classList.add('linkTrailer');
  /*link.href.add()
  link.target.add() */

  /*const youtube_icon = document.createElement */

/*const ba = document.createElement('a')
  ba.classList.add()*/

}  


document.body.appendChild(column);
column.appendChild(card);
card_content.appendChild(card_image);

card.appendChild(card_content);
card_content.appendChild(media);
media.appendChild(media_content);
media_content.appendChild(has_text_right); 

has_text_right.appendChild(tag);
media_content.appendChild(cardtitle);
cardtitle.appendChild(title);
media_content.appendChild(subtitle);
card_content.appendChild(content);
content.appendChild(cardtext);
card_content.appendChild(link);


/* const serieEnDeuxMots =  []
for(let element of collection){
  if(element.title.match(' ')){
    serieEnDeuxMots.push(element)


  }
}
console.log(serieEnDeuxMots) */ 
 