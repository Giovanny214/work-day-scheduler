$(function () {
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    var currentHour = dayjs().hour();
    $("#currentDay").text(currentDate);
    for (let i = 9; i < 18; i++) {

        // time
        console.log(i);
        var currentTimeBlock = i + " AM"
        if (i > 12) {
            currentTimeBlock = i - 12 + " PM";
        } else if (i === 12) {
            currentTimeBlock = i + " PM"
        }

        var timeBlock = $("<div>");
        timeBlock.attr("class", "row time-block")
        if (i > currentHour) {
            timeBlock.addClass("future");
        } else if (i < currentHour) {
            timeBlock.addClass("past");
        } else {
            timeBlock.addClass("present");
        }

        console.log(timeBlock);

        var hourOfDay = $("<p>");
        hourOfDay.attr("class", "col-2 col-md-1 hour text-center py-3");
        hourOfDay.text(currentTimeBlock);

        var textArea = $("<textarea>");
        textArea.attr("class", "col-8 col-md-10 description")
        var btn = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>')


        timeBlock.append(hourOfDay, textArea, btn);
        $("#main-container").append(timeBlock);
    }

    //WHEN I click into a timeblock
    // THEN I can enter an event
    var events = $('textarea').val();
    var storage = $.localstorage
    
    

    btn.on('click', function () {
        textArea.text(events)
        storage.set('events', events);

        storage.get('events');
        
        
    })

    console.log(storage);
    
});