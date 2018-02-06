Math.seed;
Math.random = function(seed) {
   
	if (seed) {
		Math.seed = seed;
	}
	else {

		Math.seed = (Math.seed * 131071 + 524287) % 8191;
		return Math.seed / 8191;    

	}
};

