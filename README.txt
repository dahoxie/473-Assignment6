Name: David Hoxie
Email: dahoxie@gmail.com
Assignment: Assignment 5

Files:

    server.js - Server in javascript using node.js and some of its modules
                that allows you to guess a coin flip and see your results.

Description:

        When the command,

        curl --silent --request POST \
	    --header 'Content-Type: application/json' \
        --data '{ "call": "heads" }' \
        'http://localhost:3000/flip' | python -m json.tool

        is run using the command line while the server is up the server will
        compare the generated value with heads and store the result and
        return it in a response. When http://localhost:3000/flip is accessed
        the cumulative results will be displayed in the web browser.
