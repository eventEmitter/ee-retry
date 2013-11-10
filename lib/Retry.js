

	var   Class 		= require( "ee-class" )
		, type 			= require( "ee-types" )
		, Events 		= require( "ee-event-emitter" )
		, log 			= require( "ee-log" );



	module.exports = new Class( {
		inherits: Events

		, max: 60000 // 1m
		, min: 1000 // 1s
		, interval: 1000 // 1s

		, init: function( options ){
			if ( type.number( options.max ) ) this.max = options.max;
			if ( type.number( options.min ) ) this.min = options.min;
			this.interval = this.min;

			this.timeout = setTimeout( this._execute.bind( this ), this.interval );
		}


		, _execute: function(){
			if ( this.interval < this.max ) this.interval = ( this.interval * 2 ) < this.max ? this.interval * 2 : this.max;
			this.timeout = setTimeout( this._execute.bind( this ), this.interval );

			this.emit( "retry", this.abort.bind( this ) );
		}



		, abort: function(){
			clearTimeout( this.timeout );
		}
	} );