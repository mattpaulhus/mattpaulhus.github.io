var getOutboundLink = function(url) {
  gtag('event', 'click', {
    'event_category': 'outbound to LinkedIn',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': function(){document.location = url;}
  });
}
