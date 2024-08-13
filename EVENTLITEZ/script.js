document.getElementById('create-event-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventLocation = document.getElementById('event-location').value;

    // Create event element
    const eventItem = document.createElement('li');
    eventItem.textContent = `${eventName} - ${eventDate} at ${eventTime} in ${eventLocation}`;

    // Add event to list
    document.getElementById('events').appendChild(eventItem);

    // Clear form
    document.getElementById('create-event-form').reset();
});
