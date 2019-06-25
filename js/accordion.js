$(document).ready(function () {

    /*  $("#accordion > div").click(function () {

         if ($(this).next().is(':visible') == false) {
             $('#accordion ul').slideUp(300);
         }
         $(this).next().slideToggle(300);
     });

     $('#accordion ul:eq(0)').show();
     $('#accordion ul:eq(1)').show();
     $('#accordion ul:eq(2)').show(); */

    /*  $("#firstItem").click(function () {
         $('.first-row').slideToggle();
         $("i", this).toggleClass("fa fa-arrow-down fa fa-arrow-left");
     })
     $("#secondItem").click(function () {
         $('.second-row').slideToggle();
         $("i", this).toggleClass("fa fa-arrow-down fa fa-arrow-left");
     })

     $("#thirdItem").click(function () {
         $('.third-row').slideToggle();
         $("i", this).toggleClass("fa fa-arrow-down fa fa-arrow-left");
     })
     */
    /*    $("#lastElement").click(function () {
           $('.lastRow').slideToggle();
           $("i", this).toggleClass("fa fa-arrow-left fa fa-arrow-down");
       })
    */
    $('.hiddenItem').hide();
    $('.heading').click(function () {
        $(this).next('.item').slideToggle(600);
        $("i", this).toggleClass("fa fa-arrow-down fa fa-arrow-left");
    })
})