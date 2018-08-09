<?php 
$xml = new SimpleXMLElement(urlencode(strip_tags('https://twitter.com/users/google.xml')), null, true);
echo "Follower count: ".$xml->followers_count;
?>