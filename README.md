# feedbackform
Constructor for feedback forms

//**********************************************************
// For Version 3.7: FEEDBACK FIELD SERVICE FOR LANDING PAGES
//**********************************************************


Structure of the window feedback object
window.feedback.form[f]			-	index of form. You may have several form on one page u
window.feedback.form[f].elem[e]			-	index of element container
window.feedback.form[f].elem[e].tagName					-	tag name such as select, input, textarea, button	
window.feedback.form[f].elem[e].tagId						-	tag id
window.feedback.form[f].elem[e].tagType						-	tag type for button, may be applicable for input: 'number', 'tel', 'email'
window.feedback.form[f].elem[e].tagClass					-	tag class for main tag such as select, input, textarea, button, a
window.feedback.form[f].elem[e].tagStyle					-	tag style for main tag such as select, input, textarea, button, a			
window.feedback.form[f].elem[e].tagRequired					-	[option -> input, textarea and select] the tagRequired key. See https://www.w3schools.com/tags/att_required.asp
window.feedback.form[f].elem[e].tagInnerHTML				-	[option -> input, textarea, select, button] main tag innerHtml
window.feedback.form[f].elem[e].tagPlaceholder				-	[option -> input, textarea] main tag placeholder
window.feedback.form[f].elem[e].labelInnerHTML				-	[option -> label] label-title of the component
window.feedback.form[f].elem[e].labelClass					-	[option -> label] css class
window.feedback.form[f].elem[e].labelStyle					-	[option -> label] css style
window.feedback.form[f].elem[e].footerInnerHTML				-	[option -> footnotes] footnotes text
window.feedback.form[f].elem[e].footerClass					-	[option -> footnotes] footnotes class			
window.feedback.form[f].elem[e].tagOption					-	[option -> select] array for options, set of values to select
window.feedback.form[f].elem[e].tagOption[o]				-	[option -> select] index of option, 
window.feedback.form[f].elem[e].tagOption[o].optInnerHTML	-	[option -> select] option innerHTML
window.feedback.form[f].elem[e].tagSelectMultiple			-	[option -> select] main tag multiple
window.feedback.form[f].elem[e].tagOption[o].selected		-	[option -> select] selected, if so
window.feedback.form[f].elem[e].modalNum					-	[option -> button] number of applicable modal window

Button, a .tagType = 'reset'			is to reset forms
Button, a .tagType = 'submit'		is to submit results only						
Button, a .tagType = 'modal'			is to call modal window only
			.modalNum = '0'; that is form call for a modal id="userto-form-[f]-modal-0"
			.modalNum = '1'; that is form call for a modal id="userto-form-[f]-modal-1"
			...
Button, a .tagType = 'submit-modal'	is to submit results and call modal window
			.modalNum = '0'; that is form call for a modal id="userto-form-[f]-modal-0"
			.modalNum = '1'; that is form call for a modal id="userto-form-[f]-modal-1"
			...			


Rules:
1.	Dependecies Bootstrap and therefore jQuery
2.	FeedbackTelegram does not have any deal with modal windows itself, because they can change over time.
	You can specify fields and buttons within modal windows to make feedback
	Each form can have only one modal window with id="userto-form-0-modal-0" or id="userto-form-1-modal-0" like:
	<!-- The Modal -->
	<div class="modal fade" id="userto-form-0-modal-0">
	...
3. Modal windows is set into container
	<div id="modalContainer">
		<style>
			.modal-backdrop	{display:none; visibility:hidden; position:relative;}
			.modal{background-image: url("http://userto.com/img/BlackTransparentBackground.png");z-index:1100;}
		</style>
		<!-- The Modal -->
		<div class="modal fade" id="userto-form-0-modal-0">
		...
	</div>
4. In different js file you set window.
5. In the latter file you run function	window.feedback.setFeedbackForm();
