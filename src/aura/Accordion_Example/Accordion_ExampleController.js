/**
 * Created by jonbalza on 12/2/18.
 */
({
    onRender: function(component, event, helper) {
        var isOpen = component.get("v.isOpen");

        if (isOpen) {
            helper.slideDown(component, event, helper);
        } else {
            helper.slideUp(component, event, helper);
        }
    },

    handleClick: function(component, event, helper) {
        var isOpen = component.get("v.isOpen");
        component.set("v.isOpen", !isOpen);
    }
})