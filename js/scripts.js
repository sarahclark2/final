$(function(){
  console.log('scripts loaded');



  var query = '';
  var html = '';

  //$('button').click(function(){
var myKey = config.MY_KEY;

  // query = $('#query').val();
  // console.log(query);
//making the code for the trends api

//starting to code for the news api
var url= 'https://newsapi.org/v2/everything?q=kylie&from=2018-11-27&pageSize=10&sortBy=publishedAt&apiKey=' + myKey;
  console.log(url);
var newsData = [];
var articles = [];
var i = '';
for (i = 0; i < url.length; i ++){


  $.ajax({
  type: 'GET',
  url: url,
  dataType: 'json',
  async: true,
  data: newsData,
  success:function(newsData){
    console.log(newsData.articles);
    articles = newsData.articles;

    articles.forEach(function(article){
          console.log('it works!');
          html += '<div class="latest-news flex">';
            html += '<img class="thumbnail" src="' + article.urlToImage + '">';
            html += '<div class="text">';
            html += '<a href="' + article.url + '" target="_blank">';
            html += '<h2 class="headline">' + article.title + '</h2>';
            html += '<h4 class="byline">by ' + article.author + ', <em>' + article.source.name +'</em></h4>';
            html += '</a></div>';
            html += '</div>';
        });
          $('#news_results').html(html);

        }//closing success


      });//closing ajax
    }//closing for loop




  });//close main function
  //modal window scripts
  var modal = document.getElementById('myModal');
  var btn = document.getElementById('myBtn');
  var span = document.getElementsByClassName('close')[0];

  btn.onclick = function(){
    console.log('clicked');
    modal.style.display="block";
  }

  span.onclick = function(){
    modal.style.display="none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  //end of source modal scripts

  var span1 = document.getElementById('picture-modal-1');
  var modal1 = document.getElementById('myModal1');
  var close = document.getElementsByClassName('close1')[0];

  span1.onclick = function(){
    console.log('clicked');
    modal1.style.display = "block";
  }

  close.onclick = function(){
    modal1.style.display = "none";
  }

  window.onclick = function(event){
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }

  var span2 = document.getElementById('picture-modal-2');
  var modal2 = document.getElementById('myModal2');
  var close2 = document.getElementsByClassName('close2')[0];

span2.onclick = function(){
  console.log('it was clicked');
  modal2.style.display = "block";
}
close2.onclick = function(event){
  modal2.style.display = "none";
}
window.onclick = function(event){
  if (event.target == modal2) {
    modal1.style.display = "none";
  }
}

//google books API
  google.books.load();

        function initialize() {
          var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
          viewer.load('ISBN:1501128884');
        }

        google.books.setOnLoadCallback(initialize);

//youtube API
  // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: '9kIb4yZHWfg',
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
          event.target.pauseVideo();
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 0);
            done = true;
          }
        }
        function stopVideo() {
          player.stopVideo();
        }
