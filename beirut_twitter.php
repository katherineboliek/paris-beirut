<html>
  <head>
    <link href="css/bootstrap.min.css" rel="stylesheet"> <!--bootstrap css-->
    <link rel="stylesheet" href="css/style.css"/>
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="js/tweetLinkIt.js"></script>
    <script>
      function pageComplete(){
          console.log("pagecomplete")
          $('.tweet').tweetLinkify();
      }
    </script>
  </head>
  <body>
    <?php
      ini_set('display_errors', 1);
      require_once('TwitterAPIExchange.php'); //include - pulling in the "plugins"

      /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
      $settings = array(
          'oauth_access_token' => "1152317610-haUqwEs3GHN17frm3Fjexs7Dxlw0o8UirLRMEuW",
          'oauth_access_token_secret' => "bwgaa4GRcaibUXdtLETkdxsXCYtO2g96AP0mDTlhnboi6",
          'consumer_key' => "MYBR2T5SXglgvwmHM5vwFc6uu",
          'consumer_secret' => "mDskSXRoE4Hj61QqY3MPuQh6nG37IqviFQ2eJNqGAVKgyq3uve"
      );

      /** Perform a GET request and echo the response **/
      /** Note: Set the GET field BEFORE calling buildOauth(); **/
      $url = 'https://api.twitter.com/1.1/search/tweets.json'; // get request only need oe of post and get request
      $getfield = '?q=beirutbombings';
      $requestMethod = 'GET';
      $twitter = new TwitterAPIExchange($settings);

      $tweetData = json_decode($twitter->setGetfield($getfield)
                    ->buildOauth($url, $requestMethod)
                    ->performRequest(),$assoc = TRUE);

      foreach($tweetData['statuses'] as $items)
        {
          echo "<div class='row twit'><div class='col-xs-2'><img class='profile-image' src='" . $items['user']['profile_image_url'] . "'/></div>";
          echo "<div class='tweet col-xs-10'>" . $items['user']['name'] . " ";
          echo "@" . $items['user']['screen_name'] . " </br>";
          echo $items['text'] . "</div></div><hr class='break-twit'>";
        };

      echo "<script>pageComplete();</script>";
    ?>
  </body>
</html>
