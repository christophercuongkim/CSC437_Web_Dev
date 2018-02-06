var findMatches = function(model, guess) {
   var result = {exact: 0, inexact: 0};
   var mMatches = [], gMatches = [];
   
   for (var i = 0; i < model.length; i++)
      if (model[i] === guess[i]) {
         mMatches[i] = gMatches[i] = true;
         result.exact++;
      }
   
   for (var i = 0; i < model.length; i++)
      for (var j = 0; j < guess.length; j++)
         if (!mMatches[i] && !gMatches[j] && model[i] === guess[j]) {
            mMatches[i] = gMatches[j] = true;
            result.inexact++;
         }
            
   return result;
};
