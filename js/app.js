(function(){
 
  var app = angular.module('fotografia-app', []);

  // toggle between the portfolio view
  app.controller('PanelController', function(){

      this.tab = 1; //set the initial value

      this.selectTab = function(setTab){
        this.tab = setTab; //change the tab value
      };

      this.isSelected = function(checkTab){
        return this.tab === checkTab; //check which tab is selected
      };

    });

})();