Name: David Hoxie
Email: dahoxie@gmail.com
Assignment: Assignment 6

Files:

    server.js - Express server that allows you to guess a coin flip and see your results.
                The results are stored using redis database.


Description:

        When the command,

        curl --silent --request POST \
	    --header 'Content-Type: application/json' \
        --data '{ "call": "heads" }' \
        'http://localhost:3000/flip' | python -m json.tool

        is run using the command line while the server is up the server will
        compare the generated value with heads and store the result in a redis
        database and return it in a response. When http://localhost:3000/stats
        is accessed the cumulative results will be retrieved from the redis
        database and displayed in the web browser. An http DELETE request to
        http://localhost:3000/stats with remove the wins/losses in the database.
