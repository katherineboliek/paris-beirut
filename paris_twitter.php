<html>
  <head>
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

      /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
       $url = 'https://api.twitter.com/1.1/search/tweets.json'; // what part we want to request from/
       $requestMethod = 'POST';

       /** POST fields required by the URL above. See relevant docs as above **/
      // $postfields = array(
      //     'screen_name' => 'usernameToBlock',
      //     'skip_status' => '1'
      // );
      //
      // /** Perform a POST request and echo the response **/
      // $twitter = new TwitterAPIExchange($settings);
      // echo $twitter->buildOauth($url, $requestMethod)
      //              ->setPostfields($postfields)
      //              ->performRequest();

      /** Perform a GET request and echo the response **/
      /** Note: Set the GET field BEFORE calling buildOauth(); **/
      $url = 'https://api.twitter.com/1.1/search/tweets.json'; // get request only need oe of post and get request
      $getfield = '?q=parisattacks';
      $requestMethod = 'GET';
      $twitter = new TwitterAPIExchange($settings);
      // echo $twitter->setGetfield($getfield)
      //              ->buildOauth($url, $requestMethod)
      //              ->performRequest();


      $tweetData = json_decode($twitter->setGetfield($getfield)
                    ->buildOauth($url, $requestMethod)
                    ->performRequest(),$assoc = TRUE);

      echo $tweetData;

      foreach($tweetData['statuses'] as $items)
        {
          echo "<div class='twitter-tweet'>Tweet: " . $items['text'] . "'</div>'";
          echo "When: " . $items['created_at'] . "</br>";
          echo "Where: " . $items['location'] . "</br>";
        }
    ?>
  </body>
</html>
