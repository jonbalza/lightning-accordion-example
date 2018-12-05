/**
 * Created by jonbalza on 12/3/18.
 */
({
    getHeight: function (element) {
        element.style.display = 'block'; // Make it visible
        var height = element.scrollHeight + 'px'; // Get it's height
        element.style.display = ''; //  Hide it again
        return height;
    },

    // Shows an element
    slideDown: function (component, event, helper) {
        var accordion = component.find("accordionContent");
        var accordionElement = accordion.getElement();
        var isOpenState = component.get("v.isOpenState");

        // Get the natural height of the element
        if(accordionElement && isOpenState === 'closed') {
            var height = helper.getHeight(accordionElement); // Get the natural height
            accordionElement.style.height = height; // Update the height
            component.set("v.isOpenState", 'opening');

            // Once the transition is complete, remove the inline height so the content can scale responsively
            setTimeout($A.getCallback(function () {
                accordionElement.style.height = '';
                component.set("v.isOpenState", 'open');
            }), 500);
        }
    },

    // Hide an element
    slideUp: function(component, event, helper) {
        var accordion = component.find("accordionContent");
        var accordionElement = accordion.getElement();
        var isOpenState = component.get("v.isOpenState");

        if(accordionElement && isOpenState === 'open') {
            // Give the element a height to change from
            accordionElement.style.height = accordionElement.scrollHeight + 'px';

            // Set the height back to 0
            setTimeout($A.getCallback(function () {
                component.set("v.isOpenState", 'closing');
                accordionElement.style.height = '0';
            }), 1);

            // When the transition is complete, hide it
            setTimeout($A.getCallback(function () {
                component.set("v.isOpenState", 'closed');
                accordionElement.style.height = '';
            }), 500);
        }
    }
})