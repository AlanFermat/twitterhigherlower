<!DOCTYPE html>
<html>
<head>
  <title>How to count Twitter Followers  without authentication</title>
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script type="text/javascript" 
  src="jquery.js"></script>
</head>
<body>


 <div class="container">
  <input type="test" id = "twitter_username" name="">
  <button id= "submit">Search</button>
   <h3>Total Follower : <strong></strong></h3>
 </div>


 <script type="text/javascript">
$(document).ready(function(){
  $("#submit").click(function(){
    $('#twitter_username') = $('#twitter_username').val();
  });

});

  var twitter_username = 'itsolutionstuff';


  $.ajax({
    url: "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names="+twitter_username,
    dataType : 'javascript',
    crossDomain : true
  }).done(function(data) {
    $("h3 strong").text(data[0]['followers_count']);
  });


 </script>


</body>
</html>