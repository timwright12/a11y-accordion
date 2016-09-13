/*
	Name: Accessible Accordion Menu
	Author: Tim Wright (tim@csskarma.com)
	License: MIT
*/

;(function ( w, doc ) {

  // Enable strict mode
  "use strict";

  // Local object for method references
  var Accordion = {};

  // Info
  Accordion.ns = "Accessible Accordion";
  Accordion.author = "Tim Wright";

  // Create the Accordion isntance
  Accordion.create = function() {

	  // Caching and initializing some variables
	  var instances = doc.querySelectorAll('[data-action="accordion"]');
	  var instance_count = instances.length;
	  var subsections_count;
	  var trigger_content;
	  var aria_controls;
	  var subsections;
	  var aria_label;
	  var data_state;
	  var controls;
	  var trigger;
	  var sub_obj;
	  var obj;
	  var id;
	  var i;
	  var j;

	  // See if we have and accordions on this page
	  if( instance_count ) {

		  // Loop through all the accordions
		  for ( i = 0; i < instance_count; i = i + 1 ) {

			  obj = instances[i];
			  subsections = obj.querySelectorAll(".accordion__content");
			  data_state = obj.getAttribute("data-state");
			  subsections_count = subsections.length;

			  // Do the accordions have sub sections?
			  if ( subsections_count ) {

				  // Loop through the subsections
				  for ( j = 0; j < subsections_count; j = j + 1 ) {

					  sub_obj = subsections[j];
					  aria_label = sub_obj.getAttribute("aria-label");
					  if( !aria_label ) { aria_label = j + 1; }

					  id = sub_obj.getAttribute("id");
					  if( !id ) {
						  id = "accordion-" + Math.floor(Math.random() * 99999) + 1 ;
						  sub_obj.setAttribute("id", id);
					  }

					  aria_controls = sub_obj.getAttribute("aria-controls");
					  if( !aria_controls ) {
						  aria_controls = id;
					  }

					  trigger = doc.createElement("a");
					  trigger.setAttribute("class", "accordion__trigger");
					  trigger.setAttribute("href", "#" + id);
					  trigger.setAttribute("aria_controls", id);
					  trigger.setAttribute("aria-expanded", false);
					  trigger_content = doc.createTextNode(aria_label);
					  trigger.appendChild(trigger_content);

					  controls = doc.createElement("div");
					  controls.setAttribute("class", "accordion__header");
					  controls.appendChild(trigger);

					  // insert controls into the DOM
					  obj.insertBefore( controls, sub_obj );

					  // Hide all subsections by default
					  sub_obj.setAttribute("aria-hidden", true);

					  trigger.addEventListener("click", Accordion.bind_events);

				  } // for()

				  // If the state is set to open, open the first content area
				  if( data_state === "open" ) {
					  doc.querySelector(".accordion__content").setAttribute("aria-hidden", false);
					  doc.querySelector(".accordion__trigger").setAttribute("aria-expanded", true);
				  }

			  } // if

		  } // for()
	  } // if

  }; // Accordion.create();

  Accordion.bind_events = function(e) {

    // Stop the URL hash from appearing
    e.preventDefault();

    var target_hash = this.getAttribute('href').split("#")[1];
    var target_el = doc.getElementById( target_hash );
    var parent_container = this.parentNode.parentNode;
    var open_content = parent_container.querySelectorAll('.accordion__content[aria-hidden="false"]');
    var open_content_count = open_content.length;
    var k;

    if( target_el.getAttribute("aria-hidden") === "true" ) {

     this.setAttribute("aria-expanded", true);
     target_el.setAttribute("aria-hidden", false);
     target_el.setAttribute("tabindex", -1);
     target_el.focus();

    } else {

      this.setAttribute("aria-expanded", false);
      target_el.setAttribute("aria-hidden", "true");
      target_el.removeAttribute("tabindex");

    } // if

    for ( k = 0; k < open_content_count; k = k + 1 ) {
      open_content[k].setAttribute("aria-hidden", true);
    }

  }; // bind_events

    // Start defining methods here
  Accordion.init = function() {
    this.create();
  };

  // Start the application
  Accordion.init();

} )( this, this.document );
