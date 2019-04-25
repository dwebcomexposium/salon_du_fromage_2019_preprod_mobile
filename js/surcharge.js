(function($) {

  var sfplJS = {

      init : function(){
        this.moveHTMlBlocs();
      },
      
      moveHTMlBlocs : function(){
        $(".article-intro").insertAfter(".article-title .at-content");
        $(".actus .main-title-with-link .link-view-all").insertAfter(".actus .cxp-pagination");
        $(".programme-anim .main-title-with-link .link-view-all").insertAfter(".programme-anim .cxp-pagination");
      },

  }
  sfplJS.init();

})(jQuery);
