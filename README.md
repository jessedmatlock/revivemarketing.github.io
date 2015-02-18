# Internal EL Web UI repository

Pull this repo to view the current state of the new EL Web User Interface.

## Some things to keep in mind

  * Please DO NOT push changes or make Pull Requests with this repo
  * Please use email or JIRA to make comments, suggestions or file bug reports
  
# GENERAL:

## Messaging:
To fire the jquery msgbox call the function like:

				// this will show an error message with an OK button
				// buttons are configured by default, per message type
				$.msgbox('MESSAGE HERE', {type:"error"}); 
				
				// To define your own buttons or a callback:
				$.msgbox("MESSAGE HERE", {
					type: "confirm", // info, confirm, alert or error
					buttons : [ // array of buttons if any
						{type: "submit", value: "Yes"},
						{type: "submit", value: "No"},
						{type: "cancel", value: "Cancel"}
						]
					},
				function(result) {
					// callback fired here
				});




## Tooltips:
Any element you want to display a tooltip for needs these classes/attributes applied:
* .has-tip to init JS to fire tooltip
* title attr containing content of tooltip
* class to define the position of the tooltip, options: 
  * .tip-top
  * .tip-top-right (top right corner)
  * .tip-top-left (top left corner)
  * .tip-right
  * .tip-left
  * .tip-bottom
  * .tip-bottom-left (bottom left corner
  * .tip-bottom-right (bottom right corner)

:point_right:   [Qtip example code](https://gist.github.com/revivemarketing/0306fe6a22fac61047db)
	
## Drop Downs:
### Containing List items and links (edit/delete, delete, etc.)
The dropdowns are capable or rendering either a list of items (links?) as well as 1 or 2 specifically styled links per item.
Here are the variations and classes that go with them:

#### Dropdown list with a single link per item:
    <li>
	    <a href="javascript:void(0);" class="linked-event">Text Shown In Dropdown List Item</a>
	    <div class="list-links single-link"><!-- notice the .single-link class in addition to .list-links -->
	        <a href="javascript:void(0);" class="has-tip tip-right unlink-event" title="Delete from this item from the list"><i class="fa fa-times-circle"></i></a>											
	    </div><!-- end div.list-links -->
    </li>

#### Dropdown list with 2 links per item (like the saved search dropdown, which displays an edit and delete link for each saved search item)
    <li>
	    <a href="javascript:void(0);" class="linked-event">Text Shown In Dropdown List Item</a>
	    <div class="list-links"><!-- notice there is no .single-link class !!! -->
	        <a href="javascript:void(0);" class="has-tip tip-right unlink-event" title="Delete from this item from the list"><i class="fa fa-times-circle"></i></a>											
	    </div><!-- end div.list-links -->
    </li>
    NOTE: To add the links: create a div.list-links within each <li>. If you only want a single link per item, add the .single-link class to .list-links to correct the styling for a single link. It's preferred that we add the tooltip classes and title content to provide textual content when the user hovers over one of these links (as seen in the examples above)





### Placement:
	To have a drop down display in the correct position you can add one of this data-attribute to the link used to open it:
	data-options="align:left"     value options are: left, right, top or bottom

[Reference](http://foundation.zurb.com/docs/components/dropdown.html)

### Parent/Child Checklist Dropdowns
	Add a data attr with the dropdown lists ID, to the parent checkbox: data-checklist="drop10"
	Add a data attr of data-checklist-options to the ul.f-dropdown list

[Reference](http://jsfiddle.net/revive/oLoo59kL/)
	

# NAVIGATION
## Fixed Header / Main Navigation: 
    For fixed header/navigation section you must apply these rules:
    
* The header element(s) bust he wrapped in a #fixed-header <div>
* The section.main-section element must have the .fix-header class applied
  * This is to allow us to more accurately target the page(s) we want to fix the header on.
    

## Active Navigation:
    Active Item : add .active to the parent <li>
    eg. <li class="active"><a href="">......

[Reference](http://foundation.zurb.com/docs/components/topbar.html)
	
	
	
# INPUTS
## General: 
	Inputs on dark backgrounds need to have .dark-style class added to them

## Select Element:
	add .select class to all select elements
	ALSO add .select-searchable if you want to display the auto-complete search input

## Text Inputs: 

	Error Handling: add .error class to any label, input or select you want to highlight invalid

# MODALS

## Modal Sizes:
In general, we will want to control the size of the modal for specific use cases.
To do this, we'll manage the classes assigned to the .reveal-modal element. Here are the class options:

* tiny: Set the width to 30%
* small: Set the width to 40%
* medium: Set the width to 60%
* large: Set the width to 70%
* xlarge: Set the width to 95%
* full: Set the width to 100%

[Reference](http://foundation.zurb.com/docs/components/reveal.html)

## Modal Styles: 
	By adding the .tabbed-modal class to .reveal-modal we can change the style of the tabs within it:

Tabbed Modal Class applied:

![Modal with .tabbed-modal class](https://dl.dropboxusercontent.com/u/71431629/wgv-tabbed-modal.png)


Standard Modal

![Std. modal](https://dl.dropboxusercontent.com/u/71431629/wgv-std-modal.png)

# TABS

[Reference](http://foundation.zurb.com/docs/components/tabs.html)



# BUTTONS / LINKS
### All Buttons: Buttons, submit element and links styled like buttons must have the .button class
####To style the buttons you can add one of the following classes:
* .primary
* .secondary
* .alert
* .soft-alert
* .success
* .control

#### FOR SIZING (medium us default size):
* .large
* .small
* .tiny
* .expand (full width)

#### FOR DARK BACKGROUNDS		
* .dark-gradient

#### FOR ITEM GEAR / ACTIONS BUTTONS (icons only, no text)
* .actions


# Overlay Mask
#### Notice: Only one overlay mask can be displayed at a time. If you call a subsequent mask to display, while another is visible, the previous mask will be hidden prior to displaying the newly called mask.

#### To create an overlay from a link, use the markup below:
    <a class="mask-it" 
        data-mask-target=".main-section" 
        href="javascript:void(0);">Link Text</a>

##### Notice that the link has these attributes:
* The class of .mask-it (along with any other classes needed to style the button/link)
* The data-mask-target attribute with the .class or #id of the element you want to overlay the mask

#### To generate the overlay programmatically, use the function below:
    $(element).loadingMask({
    	opacity : 1, // you can pass a custom value (1 as shown) or the mask will default to 0.85 (85%)
    	text: 'Loading...', // change displayed text: Loading, Processing, Please Wait, etc.
        func: function(){ 
        	// callback function here
        }
    });  

##### Notice that the above function provides these options:
* text option: Allows you to change the loading text as needed, the default is 'Processing...'
* the overlay provides for a callback function that fires AFTER the overlay is CREATED

#### To hide the mask, call this function on the same element: 
    $(element).hideMask();  // no options are provided

[loadingMask Plugin repo](https://github.com/revivemarketing/loadingMask/blob/master/loadingMask.js)
