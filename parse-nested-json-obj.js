var req = { mandrill_events: '[{"event":"inbound","ts":1426249238}]' };
var mandrill_events = JSON.parse(req.mandrill_events);
var result = mandrill_events[0];

console.log('result: ', result);