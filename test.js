


	var   Class 		= require( "ee-class" )
		, log 			= require( "ee-log" )
		, assert 		= require( "assert" );



	var   Retry = require( "./" )
		, start = Date.now()
		, expected = [ 0, 0, 1, 2, 3, 4 ]
		, results = [];


	var r = new Retry( {
		  min: 200
		, max: 4000
		, on: { 
			retry: function( stop ){
				var now = Date.now(), diff = Math.round( ( now - start ) / 1000 );
				start = now;

				results.push( diff );
				
				if ( diff === 4 ) {
					stop();
					assert.deepEqual( results, expected, "output does not match!" );
				}
			}
		}
	} );


