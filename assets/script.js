//uses the class of the divs to save the information that the user fills in, and the id of the div as a key
// when checking the local storage, the time blocks will appear in the key section as ex. "hour9"

$(document).ready(function () {
  $('.saveInfo').on('click', function () {
    let event = $(this).siblings('.eventDesc').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, event);
    $.notify("Saved", "success");
  });

// the current time is specified to an hour in a 24 hour clock

  function timeRefresh() {
    let timePresent = moment().hours();

// parses the numbers from the ids in the index.html, takes the integer one space after "hour"

    $('.timeAt').each(function () {
      let divHour = parseInt($(this).attr('id').match(/hour(\d+)/)[1]);

      // switch satement that compares the current time to the time section, past will turn grey, present red, and future green
      
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

//refresh all of the values in the rows every 5000 milliseconds, this can be increased as it is not neccesary to refresh so often, may use additional memory

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

// using moment.js the date is displayed as Day, Month XXth

  $('#timeNow').text(moment().format('dddd, MMMM Do'));
});