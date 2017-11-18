export default function(){
    return [
        // dummy data, copied from SongKick's website 
        {
            "resultsPage": {
              "results": { "event": [
                {
                  "id":11129128,
                  "type":"Concert",
                  "uri":"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
                  "displayName":"Wild Flag at The Fillmore (April 18, 2012)",
                  "start":{"time":"20:00:00",
                           "date":"2012-04-18",
                           "datetime":"2012-04-18T20:00:00-0800"},
                  "performance":[{"artist":{"uri":"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
                                            "displayName":"Wild Flag","id":29835,"identifier":[]},
                                  "displayName":"Wild Flag",
                                  "billingIndex":1,
                                  "id":21579303,
                                  "billing":"headline"}],
                  "location":{"city":"San Francisco, CA, US","lng":-122.4332937,"lat":37.7842398},
                  "venue":{"id":6239,
                           "displayName":"The Fillmore",
                           "uri":"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
                           "lng":-122.4332937, "lat":37.7842398,
                           "metroArea":{"uri":"http://www.songkick.com/metro_areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
                                        "displayName":"SF Bay Area","country":{"displayName":"US"},"id":26330,"state":{"displayName":"CA"}}},
                  "status":"ok",
                  "popularity":0.012763
                },
              ]},
              "totalEntries":24,
              "perPage":50,
              "page":1,
              "status":"ok"
            }
          }
    ];
}