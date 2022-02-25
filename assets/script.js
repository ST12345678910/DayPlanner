$(document).ready(function () {
  $('.saveInfo').on('click', function () {
    let event = $(this).siblings('.eventDesc').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, event);
    $.notify("Saved", "success");
  });

  function timeRefresh() {
    let timePresent = moment().hours();

// parses the numbers from the ids in the index.html, takes the integer one space after "hour"

    $('.timeAt').each(function () {
      let divHour = parseInt($(this).attr('id').match(/hour(\d+)/)[1]);

      
      switch(timePresent != true) {
        case (divHour < timePresent):
        $(this).addClass('before')
        break;
        case (divHour == timePresent):
        $(this).removeClass('before')
        $(this).addClass('now')
        break;
        case (divHour > timePresent):
        $(this).removeClass('now')
        $(this).addClass('future')
        break;
      }
    });
  }

  timeRefresh();

  let refreshInterval = setInterval(timeRefresh, 5000);
  $('#hour9 .eventDesc').val(localStorage.getItem('hour9'));
  $('#hour10 .eventDesc').val(localStorage.getItem('hour10'));
  $('#hour11 .eventDesc').val(localStorage.getItem('hour11'));
  $('#hour12 .eventDesc').val(localStorage.getItem('hour12'));
  $('#hour13 .eventDesc').val(localStorage.getItem('hour13'));
  $('#hour14 .eventDesc').val(localStorage.getItem('hour14'));
  $('#hour15 .eventDesc').val(localStorage.getItem('hour15'));
  $('#hour16 .eventDesc').val(localStorage.getItem('hour16'));
  $('#hour17 .eventDesc').val(localStorage.getItem('hour17'));

  $('#timeNow').text(moment().format('dddd, MMMM Do'));
});