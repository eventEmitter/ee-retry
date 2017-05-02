# ee-retry

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/ee-retry.svg)](https://greenkeeper.io/)

Repeat some action in an exponential increased capped interval

## installation

	npm install ee-retry

	
## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-retry.png?branch=master)](https://travis-ci.org/eventEmitter/ee-retry)


## usage

	var Retry = require( "ee-retry" );

	var try = new Retry( {
	   	  min: 100 // 0.1 sec
		, max: 60000 // 1 minute
	} );


	try.on( "try", function( stop ){
		// execute somthing
		var connection = new Connection();
		connection.on( "connect", function(){
			// call the finished function
			stop();
		} );
	} );