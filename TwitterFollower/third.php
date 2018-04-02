<?php 
require_once('TwitterAPIExchange.php'); //get it from https://github.com/J7mbo/twitter-api-php

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
'oauth_access_token' => "924365879252578307-pSJXTMoAGtvGeZYPBYynjB0H0bo8rs8",
'oauth_access_token_secret' => "OD5KO1INixAMB5wJmWjXxx4UZR8NoXbtmY8awjaeWgp82",
'consumer_key' => "URtWucJam1FIjiBQOrRPaP4pQ",
'consumer_secret' => "LsvfIR54weS3TPmg4aP0II6FEuXSKzLuftxjBGzYpY00zZLNZF"
);

$ta_url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?id=25073877';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$follow_count=$twitter->setGetfield($getfield)
->buildOauth($ta_url, $requestMethod)
->performRequest();
$data = json_decode($follow_count, true);
$image_link=$data[0]['user']['profile_image_url'];
$my_file = 'file.txt';
$handle=fopen($my_file,'w');
fwrite($handle, $image_link);
fclose($handle);
?>