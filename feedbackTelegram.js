



//**********************************************************
// For Version 3.0: FEEDBACK FIELD SERVICE FOR LANDING PAGES
//**********************************************************

		/*	Documentation	
			
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
	
	
		*/





//Checking if var is empty, see http://javascript.ru/php/empty
	function empty		( mixed_var ) {	// Determine whether a variable is empty
		// 
		// +   original by: Philippe Baumann

		if( typeof	mixed_var === 'undefined'	||
					mixed_var === undefined		||
					mixed_var === ''			||
					mixed_var === null			||
					mixed_var === false			||
		   (typeof mixed_var === 'array' && mixed_var.length === 0 ) ){
			return true;
		}
		else{
			return false;
		}
	}

	
//Checkign if object empty	
	function emptyObj	(obj){
		for(var prop in obj) {
			if(obj.hasOwnProperty(prop))
				return false;
		}
		return JSON.stringify(obj) === JSON.stringify({});	
	}
	
	
//Define	Function to insert node if possible, if not - append
	function insertAppendNode(parentNode, node, mode){
		//mode 'insert', 'append'
		
		if(mode	== 'insert'){
			if(parentNode && parentNode.childNodes[0] && node){
				parentNode.insertBefore(node, parentNode.childNodes[0]);
			}
			else if(parentNode && node){
				parentNode.appendChild(node, parentNode);	
			}
		}
		else if(mode	== 'append'){
			if(parentNode && node){
				//console.info(' parentNode:',parentNode,' node:',node);
				parentNode.appendChild(node, parentNode);	
			}			
			else if(parentNode && parentNode.childNodes[0] && node){
				parentNode.insertBefore(node, parentNode.childNodes[0]);
			}
		}
		return;
	}	
	
	
//Define global object feedback
	(function(){
		window.feedback							=	{};
		window.feedback.host					=	location.host;
		window.feedback.pathname				=	location.pathname;
		window.feedback.form					=	[];
		
		//letsTest('Define global object feedback', /* testId */ '', /* expect */ [window.feedback.form], /* toEqual */ [] );
	})();


//Define	Function to clean feedback blocks	
	window.feedback.cleanFeedbackForm				=	function(f){
		
			//Loop through tag elements in the form
			for(var e = 0; e < window.feedback.form[f].elem.length; e++){			
						
				if(	window.feedback.form[f].elem[e].tagName === 'select' ||
					window.feedback.form[f].elem[e].tagName === 'input' ||
					window.feedback.form[f].elem[e].tagName === 'textarea'){
										
					var querySelector		=	'.userto-form-' + f + '-elem-' +  e  + '> select';		
					var selectArr			=	document.querySelectorAll(querySelector);
					
					var selectedStr			=	'';
					
					var querySelector		=	'.userto-form-' + f + '-elem-' +  e  + '> input';
					var inputArr				=	document.querySelectorAll(querySelector);
					
					var querySelector		=	'.userto-form-' + f + '-elem-' +  e  + '> textarea';
					var textareaArr			=	document.querySelectorAll(querySelector);

					
					//Block for select
					if	(!empty(selectArr) && !empty(selectArr[0]) ){
						for (var i = 0; i < selectArr[0].length; i++) {
							selectArr[0].options[i].selected	=	false;
						}
					}				
					//Block for input
					if	(!empty(inputArr) && !empty(inputArr[0])){		
						inputArr[0].value	=	'';
					}
					//Block for textarea
					if	(!empty(textareaArr) && !empty(textareaArr[0])){
						textareaArr[0].value	=	'';		
					}
				}
			}
			
		return;
	}

	
//Define	Function to fill feedback block with html content
	window.feedback.setFeedbackForm					=	function(){	
				
		//Unused. Call the function to set ini content for feedback forms
			if(	!empty(window.feedback.setFeedbackFormContent)	&&
				typeof	 window.feedback.setFeedbackFormContent.onChange 	=== "function"){
				//window.feedback.setFeedbackFormContent(); 
				//console.info(' window.feedback 1:',window.feedback);
			}
			else{
				//console.info(' window.feedback 2:',window.feedback);
				//return;
			}

		//console.info(' window.feedback 3:',window.feedback);

		//Unused. Check if the url is right
		if( location.host		!=	window.feedback.host || 
			location.pathname	!=	window.feedback.pathname	){ return;}
				
		//console.info(' host:',location.host,' pathname:',location.pathname);
				
		//Loop through forms in the page
		for(var f = 0; f < window.feedback.form.length; f++){
			
			if(empty(window.feedback.form[f]) || empty(window.feedback.form[f].elem)){continue;}
		
			//console.info(' window:', window);
			//var letsTest = module.exports.letsTest();
			//letsTest('setFeedbackForm', /* testId */ '', /* expect */ window.feedback.form[f], /* toEqual */ [] );
		
			//Loop through tag elements in the form
			for(var e = 0; e < window.feedback.form[f].elem.length; e++){			

				var form = document.querySelector(".userto-form-" + f + "-elem-" + e); //document.getElementById("form-" + f);			
					//See more: http://www.javascriptkit.com/dhtmltutors/css_selectors_api.shtml
					//console.info('form-',f,'-elem-',e,':',form);
				var string	=	'';				
			
				//Defence from absent elements in HTML or init object
				if(	empty(form) || empty(window.feedback.form[f].elem[e])){ continue; }

				//Add label tag with content, if it is
				if(	window.feedback.form[f].elem[e].tagName != 'button' &&
					window.feedback.form[f].elem[e].tagName != 'a'){	
					string	+=	'<label ';
						//Label tag css class and style
						if(!empty(window.feedback.form[f].elem[e].labelClass)){
							string	+=	'class="' + window.feedback.form[f].elem[e].labelClass + '" ';
						}
						if(!empty(window.feedback.form[f].elem[e].labelStyle)){
							string	+=	'style="' + window.feedback.form[f].elem[e].labelStyle + '" ';
						}
					string	+=	'>';
					string	+=	(!empty(window.feedback.form[f].elem[e].labelInnerHTML) ? 
										window.feedback.form[f].elem[e].labelInnerHTML : '');							
					string	+=	'</label>';
					//console.info(' string 1:',string);
				}
				
					//Block for select tag
					if( window.feedback.form[f].elem[e].tagName == 'select') { 
						
						string	+=	'<select ' +
								(!empty(window.feedback.form[f].elem[e].tagSelectMultiple)  ? 'multiple ' :  '' ) +
								(window.feedback.form[f].elem[e].tagRequired === 'required' ? 'required ' :  '' );
							//Select tag css class and style
							if(!empty(window.feedback.form[f].elem[e].tagClass)){
								string	+=	'class="' + window.feedback.form[f].elem[e].tagClass + '" ';
							}
							if(!empty(window.feedback.form[f].elem[e].tagStyle)){
								string	+=	'style="' + window.feedback.form[f].elem[e].tagStyle + '" ';
							}		
						string	+=	'">';
						
							//console.info(' window.feedback.form[',f,'].elem[',e,'].tagOption:',window.feedback.form[f].elem[e].tagOption);
							//Loop through options in the select tag
							for(var o = 0; o < window.feedback.form[f].elem[e].tagOption.length; o++){

								var sel = '';
								
								if(!empty(window.feedback.form[f].elem[e].options)){
									if(	!empty	  (window.feedback.form[f].elem[e].options[o]) &&
										!emptyObj(window.feedback.form[f].elem[e].options[o])){
										if(!empty(window.feedback.form[f].elem[e].options[o].selected)){
											if(window.feedback.form[f].elem[e].options[o].selected === true){
												
												var sel = 'selected';
												
											}	
										}	
									}
								}
								
								string	+=	'<option ';
								string	+=	
									(!empty(window.feedback.form[f].elem[e].tagOption[o].selected ) ||
										sel === 'selected'  ? 
									'selected="selected">' :  '>' );
								string	+=	 window.feedback.form[f].elem[e].tagOption[o].optInnerHTML + 
											'</option>';
								
							}
							//End of the loop for option tag
			
						string	+=	'</select>';
					}
					//Block for textarea tag
					else if( window.feedback.form[f].elem[e].tagName == 'textarea') { 
						
						string	+=	'<textarea ';
						string	+=	(window.feedback.form[f].elem[e].tagRequired === 'required' ? 'required ' :  '' );
						string	+=	(!empty(window.feedback.form[f].elem[e].tagPlaceholder) ? 
										'placeholder="'	+ window.feedback.form[f].elem[e].tagPlaceholder + '" ' : '');
						//Textarea css class and style
						if(!empty(window.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagClass + '" ';
						}
						if(!empty(window.feedback.form[f].elem[e].tagStyle)){
							string	+=	'style="' + window.feedback.form[f].elem[e].tagStyle + '" ';
						}
						string	+=	(!empty(window.feedback.form[f].elem[e].tagValue) ? 
										'value="'	+ window.feedback.form[f].elem[e].tagValue + '" ' : '');						
						string	+=	'>'
						string	+=	'</textarea>';
					}
					//Block for input tag
					else if( window.feedback.form[f].elem[e].tagName === 'input') { 
						
						string	+=	'<input ';
						string	+=	(window.feedback.form[f].elem[e].tagRequired === 'required' ? 'required ' :  '' );
						//Input css class and style
						if(!empty(window.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagClass + '" ';
						}
						if(!empty(window.feedback.form[f].elem[e].tagStyle)){
							string	+=	'style="' + window.feedback.form[f].elem[e].tagStyle + '" ';
						}
						string	+=	'type="'		+ window.feedback.form[f].elem[e].tagType + '" ';
						string	+=	(!empty(window.feedback.form[f].elem[e].tagPlaceholder) ? 
										'placeholder="'	+ window.feedback.form[f].elem[e].tagPlaceholder + '" ' : '');
						string	+=	(!empty(window.feedback.form[f].elem[e].tagValue) ? 
										'value="'	+ window.feedback.form[f].elem[e].tagValue + '" ' : '');
						string	+=	'/>';

					}						
					//Block for button tag
					else if( 	window.feedback.form[f].elem[e].tagName == 'button') { 
						
						string	+=	'<button ';
						
						//Button css class and style
						if(!empty(window.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagClass + '" ';
						}
						if(!empty(window.feedback.form[f].elem[e].tagStyle)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagStyle + '" ';
						}						
						
						//Button to reset forms
						if(		window.feedback.form[f].elem[e].tagType === 'reset'){
							string	+=	'onClick="window.feedback.cleanFeedbackForm('  +  f  + '); return false;">';
						}
						//Button to submit results only						
						else if(window.feedback.form[f].elem[e].tagType === 'submit'){
							if(!empty(window.feedback.form[f].elem[e].modalNum)){
								string	+=	'onClick="window.feedback.feedbackSend' +  '(' + 
											f + ',' + 
											window.feedback.form[f].elem[e].modalNum+ ",'" 	+ 
											window.feedback.form[f].elem[e].tagType +
											"'); " + 'return false;" ';
								string	+=	'data-dismiss="modal" ';
							}
						}
						//Button to call modal window only
						else if(window.feedback.form[f].elem[e].tagType === 'modal'){
							if(!empty(window.feedback.form[f].elem[e].modalNum)){
								
								string	+=	'data-toggle="modal" data-target="#userto-form-' + f + '-modal-' + 
											window.feedback.form[f].elem[e].modalNum + '" ';
								string	+=	'data-dismiss="modal" ';
							}											
								string	+=	'>';
						}
						//Button to submit results and call modal window
						else if(window.feedback.form[f].elem[e].tagType === 'submit-modal'){
							//string	+=	'onClick="alert(\'abc\')" ';						
							if(!empty(window.feedback.form[f].elem[e].modalNum)){
								string	+=	'data-toggle="modal" data-target="#userto-form-' + f + '-modal-' + 
											window.feedback.form[f].elem[e].modalNum + '" ';								
								string	+=	'onClick="window.feedback.feedbackSend'	+  '('	+ 
											f + ',' + 
											window.feedback.form[f].elem[e].modalNum+ ",'" 	+ 
											window.feedback.form[f].elem[e].tagType +
											"'); " + 'return false;" ';
								string	+=	'data-dismiss="modal" ';			
							}							
								string	+=	'>';
						}
						else{
							string	+=	'>';
						}
						
						string	+=	window.feedback.form[f].elem[e].tagInnerHTML;
						string	+=	'</button>';
					}					
					//Block for a tag
					else if( 	window.feedback.form[f].elem[e].tagName == 'a') { 
						
						string	+=	'<a href="#"';
						
						//a css class and style
						if(!empty(window.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagClass + '" ';
						}
						if(!empty(window.feedback.form[f].elem[e].tagStyle)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagStyle + '" ';
						}						
						
						//a to reset forms
						if(		window.feedback.form[f].elem[e].tagType === 'reset'){
							string	+=	'onClick="window.feedback.cleanFeedbackForm('  +  f  + '); return false;">';
						}
						//a to submit results only						
						else if(window.feedback.form[f].elem[e].tagType === 'submit'){
							if(!empty(window.feedback.form[f].elem[e].modalNum)){
								string	+=	'onClick="window.feedback.feedbackSend' +  '(' + 
											f + ',' + 
											window.feedback.form[f].elem[e].modalNum+ ",'" 	+ 
											window.feedback.form[f].elem[e].tagType +
											"'); " + 'return false;" ';
								string	+=	'data-dismiss="modal" ';
							}
						}
						//a to call modal window only
						else if(window.feedback.form[f].elem[e].tagType === 'modal'){
							if(!empty(window.feedback.form[f].elem[e].modalNum)){
								
								string	+=	'data-toggle="modal" data-target="#userto-form-' + f + '-modal-' + 
											window.feedback.form[f].elem[e].modalNum + '" ';
								string	+=	'data-dismiss="modal" ';
							}											
								string	+=	'>';
						}
						//a to submit results and call modal window
						else if(window.feedback.form[f].elem[e].tagType === 'submit-modal'){
							//string	+=	'onClick="alert(\'abc\')" ';						
							if(!empty(window.feedback.form[f].elem[e].modalNum)){
								string	+=	'data-toggle="modal" data-target="#userto-form-' + f + '-modal-' + 
											window.feedback.form[f].elem[e].modalNum + '" ';								
								string	+=	'onClick="window.feedback.feedbackSend'	+  '('	+ 
											f + ',' + 
											window.feedback.form[f].elem[e].modalNum+ ",'" 	+ 
											window.feedback.form[f].elem[e].tagType +
											"'); " + 'return false;" ';
								string	+=	'data-dismiss="modal" ';			
							}							
								string	+=	'>';
						}
						else{
							string	+=	'>';
						}
						
						string	+=	window.feedback.form[f].elem[e].tagInnerHTML;
						string	+=	'</a>';
					}					
					
					//Add footerInnerHTML div if it exist
					string	+=	(!empty(window.feedback.form[f].elem[e].footerInnerHTML) ? 
						'<footer' +
							(!empty(window.feedback.form[f].elem[e].footerClass) ?
							 ' class="' + window.feedback.form[f].elem[e].footerClass + '">' : '>') + 
							 window.feedback.form[f].elem[e].footerInnerHTML + 
						'</footer>' :  '' ); 

				//console.info(' string 2:',string);
					form.innerHTML	=	string;		
				
			}
			//End of loop over elements
							
		}
		//End of loop over forms
	
		return;
	}
	
		
//Define	Function to capture data from form-elements	
	window.feedback.feedbackCaptureArray			= 	function(f){
		//console.info(' host:',host,' path:', path,' form:',form);
		
		var status					=	[];
		var querySelector			=	'div[class*="' + 'userto-form-' + f + '-"]';					
			//console.info(' querySelector:',querySelector);
				
		var formGroup				=	document.querySelectorAll(querySelector);
			//letsTest('1-st feedbackCaptureArray', /* testId */ '', /* expect */ [f, formGroup, window.feedback.form[f]], /* toEqual */ [] );
		
		for(var e = 0; e < formGroup.length; e++){
		
			//Check if the element exists
			if(empty(formGroup[e])){continue;}
					
			var querySelector		=	'.userto-form-' + f + '-elem-' +  e  + '> select';		
			var selectArr			=	document.querySelectorAll(querySelector);
			
			var selectedStr			=	'';
			
			var querySelector		=	'.userto-form-' + f + '-elem-' +  e  + '> input';
			var inputArr				=	document.querySelectorAll(querySelector);
			
			var querySelector		=	'.userto-form-' + f + '-elem-' +  e  + '> textarea';
			var textareaArr			=	document.querySelectorAll(querySelector);

			var querySelector		=	'.userto-form-' + f + '-elem-' +  e  + '> label';
			var labelArr				=	document.querySelectorAll(querySelector);
			
				
			//Return label for input field
			if(		!empty(labelArr[0]) && !empty(labelArr[0].innerHTML)){
				var label	=	labelArr[0].innerHTML;
			}
			else if(!empty(inputArr[0]) && !empty(inputArr[0].placeholder)){
				var label	=	inputArr[0].placeholder;
			}
			else{	
				var label	=	'';
			}
		
			//Block for select
			if( !empty(selectArr) && !empty(selectArr[0]) && window.feedback.form[f].elem[e].tagName === 'select'){

				if(			selectArr[0].selectedIndex	=== -1	&&
							window.feedback.form[f].elem[e].tagRequired ===  'required'){
					var alertString	=
						'Please, check ' +  window.feedback.form[f].elem[e].labelInnerHTML + 
						'\n\nОтметьте проверьте пожалуйста ' +  window.feedback.form[f].elem[e].labelInnerHTML ;
					alert(alertString);
					status[ e]	= 	0;
				}
				else if(		selectArr[0].selectedIndex	=== -1	&&
							window.feedback.form[f].elem[e].tagRequired !=  'required'){
					window.feedback.form[f].elem[e].label		=	label;
					window.feedback.form[f].elem[e].tagValue	=	'No data';
					window.feedback.form[f].elem[e].string		=	window.feedback.form[f].elem[e].label + ' ' + 'No data';
					status[ e]	= 	1;
				}
				else{
				
					window.feedback.form[f].elem[e].options		=	[];
					//letsTest('feedbackCaptureArray 2', /* testId */ '', /* expect */ [selectArr[0].options], /* toEqual */ [] );
							
					//See more http://stackoverflow.com/questions/11583728/getting-the-selected-values-in-a-multiselect-tag-in-javascript/11583999#11583999
					for (var i = 0; i < selectArr[0].length; i++) {
						if (selectArr[0].options[i].selected === true) {
							
							window.feedback.form[f].elem[e].options[i] = {selected: true, value: selectArr[0].options[i].value};
							
							if(selectedStr == ''){
								selectedStr	+= selectArr[0].options[i].value;
							}
							else{
								selectedStr	+=', ' + selectArr[0].options[i].value;
							}						
							
						}
					}
					//console.info(' selectedArr:',selectedArr);
					//console.info(' selectedStr:',selectedStr);
					//Old but working for not multiple choice variant: var selectOpt 	=	selectArr[0].options[selectArr[0].selectedIndex].value;
															
					window.feedback.form[f].elem[e].label		=	label;
					window.feedback.form[f].elem[e].tagValue	=	selectedStr;			
					window.feedback.form[f].elem[e].string		=	window.feedback.form[f].elem[e].label + ' ' + 
																	window.feedback.form[f].elem[e].tagValue;
				
					status[ e]	= 	1;
				}										
														
			}

			//Block for input
			if(	!empty(inputArr) && !empty(inputArr[0]) && window.feedback.form[f].elem[e].tagName === 'input'){
				//console.info(' input:',labelArr[0].innerHTML,' ',inputValue);
				
				//console.info(' value.match(/^([\d\s\+\-]{6,})$/gi):',inputArr[0].value.match(/^([\d\s\+\-]{6,})$/gi));
				//console.info(' inputArr[',0,'].checkValidity():',inputArr[0].checkValidity());

				//Error Wrong email
				if(			inputArr[0].type == 'email'			&&
							inputArr[0].value.match(/^([\S]{1,})@([\S]{1,}).([^.]{2,})$/gi) == null	){
					var alertString	=
						'Please, check Email\n\nПроверьте пожалуйста написание Email';
					alert(alertString);
					status[ e]	= 	0;
				}
				//Error Wrong tel
				else if(	inputArr[0].type == 'tel'	&&
							inputArr[0].value.match(/^([\d\s\+\-]{6,})$/gi)	==	null){						
					var alertString	=
						'Please, check telephone number\n\nПроверьте пожалуйста написание телефона\n' +
						inputArr[0].value;
					alert(alertString);
					status[ e]	= 	0;
				
				}
				//Error empty field empty(inputArr[0].value) && window.feedback.form[f].elem[e].tagRequired ===
				else if(	empty(inputArr[0].value) && !empty(window.feedback.form[f].elem[e]) && 
							window.feedback.form[f].elem[e].tagRequired === 'tagRequired'){
					var alertString	=
						'You miss the field'  + '\n' + label +
						'\n\n\n\n' +
						'Вы пропустили пункт' + '\n' + label;
					alert(alertString);
					status[ e]	= 	0;	
				}	
				
				//Validation
				//See more about checkValidity() http://www.w3schools.com/js/js_validation_api.asp
				else if(	inputArr[0].checkValidity() === false){
					var alertString	=
						inputArr[0].validationMessage  + '\n' + label +
						'\n\n\n\n' +
						'Вы пропустили пункт' + '\n' + label;
					alert(alertString);
					status[ e]	= 	0;
					
				}
				//Case usual input field
				else if(	!empty(inputArr[0])){				
				
					//Case take email
					if(inputArr[0].type == 'email'){
						if( empty(window.feedback.form[f])){
							window.feedback.form[f] 		=	{};
							window.feedback.form[f].email	=	[];
							window.feedback.form[f].email[0]=	{};
						}
						window.feedback.form[f].email[0].toEmail		=	inputArr[0].value;
					}
				
					window.feedback.form[f].elem[e].label		=	label;
					window.feedback.form[f].elem[e].tagValue	=	inputArr[0].value;
					window.feedback.form[f].elem[e].string 		=	window.feedback.form[f].elem[e].label + ' ' + window.feedback.form[f].elem[e].tagValue;
					
					//letsTest('Input feedbackCaptureArray', /* testId */ '', /* expect */ [f, e, inputArr[0].value, window.feedback.form], /* toEqual */ [] );
				
					status[e]	= 	1;
				}
					
			}
			
			//Block for textarea
			if(	!empty(textareaArr) && !empty(textareaArr[0]) && window.feedback.form[f].elem[e].tagName === 'textarea'){
				//console.info(' input:',labelArr[0].innerHTML,' ',textareaValue);
									
				//Error empty field
				//See more about checkValidity() http://www.w3schools.com/js/js_validation_api.asp				
				if(		empty(textareaArr[0])	||
						textareaArr[0].checkValidity() == false ){
							
					var alertString	=
						textareaArr[0].validationMessage  + '\n' + label +
						'\n\n\n\n' +
						'Вы пропустили пункт' + '\n' + label;
						
					alert(alertString);
					status[ e]	= 	0;	
				}
				else if(!empty(textareaArr[0])	&&
						!empty(textareaArr[0].value)){
						
					if(	textareaArr[0].value.match(/^([\s]{1,})$/gi) != null){
						textareaArr[0].value				=	'нет данных';
					}
					
					window.feedback.form[f].elem[e].label		=	label;
					window.feedback.form[f].elem[e].tagValue	=	textareaArr[0].value;
					window.feedback.form[f].elem[e].string 		=	window.feedback.form[f].elem[e].label + ' ' + window.feedback.form[f].elem[e].tagValue;
					
					status[ e]	= 	1;
				}
				
			}

						
		}
		
		
		//Calculating statusFinal		
		var statusFinal =	1;
		for(var i = 0; i < status.length; i++){
			
			if(status[i] === 0){							
				statusFinal = 0;
				break;
			}
		}
		
		//letsTest('status[i]', /* testId */ '', /* expect */ status, /* toEqual */ [] );
		
		return  statusFinal; 
	}


//Define	Function to process feedback capture array into string  
	window.feedback.feedbackCaptureString			=	function(f){
		
		//letsTest('feedbackCaptureString', /* testId */ '', /* expect */ [window.feedback.form[f]], /* toEqual */ [] );
		
		
		window.feedback.captureStr	=	'';
		
		if(	!empty(window.feedback.form[f].email[0].userEmail)){
			window.feedback.captureStr	+=	'Email: ' + window.feedback.form[f].email[0].userEmail + '<br />';
		}

		window.feedback.captureStrTlgrm	=	'';

		
		for(var e = 0; e < window.feedback.form[f].elem.length; ++e){
			
			if(	!empty(window.feedback.form[f].elem[e]) && 
				window.feedback.form[f].elem[e].tagName != 'button' &&
				window.feedback.form[f].elem[e].tagName != 'a'){
				
				//console.info(window.feedback.form[f].email[0].toEmail.match(/^([\S]{1,})@([\S]{1,}).([^.]{2,})$/gi) );
								
				window.feedback.captureStr	+= ' ' + window.feedback.form[f].elem[e].string + '<br />';
				
				window.feedback.captureStrTlgrm	+= '<i>' + window.feedback.form[f].elem[e].label + '</i> '  +
					' ' + window.feedback.form[f].elem[e].tagValue + '\n';				
			}
		}
		
		//letsTest('feedbackCaptureString', /* testId */ '', /* expect */ window.feedback.form[f].elem, /* toEqual */ [] );
		//console.info(' window.feedback.captureStr:',window.feedback.captureStr);
		return;
	}


//Define	Function to send feedback
	window.feedback.feedbackSend					= 	function(f, m, t){
		/* input:	f	-	form number-index
					m	-	modul window number
					t	-	type of modal window
			output: return;
		*/
		//event.preventDefault();
		
		//letsTest('3-step feedbackSend window.feedback.form', /* testId */ '', /* expect */ [f, m, t,window.feedback.form], /* toEqual */ [] );
		
		
		if( typeof window.feedback === 'object' && typeof window.feedback.setFeedbackFormContent === 'function'){
			window.feedback.setFeedbackFormContent();
		}
		
		var feedbackCaptureArray	=	window.feedback.feedbackCaptureArray(f);
		
		//letsTest('3-step feedbackSend feedbackCaptureArray', /* testId */ '', /* expect */ feedbackCaptureArray, /* toEqual */ [] );
		
		if(feedbackCaptureArray	==	0){
			
			var parentModalWindow	=	document.querySelector('#modalContainer' );
			var modalWindow 			= 	document.querySelector('#userto-form-' + f + '-modal-' + m );

			//NEW window.feedback.cleanFeedbackForm();
			
			//console.info('1-step #userto-form-' + f + '-modal-' + m,' modalWindow:',modalWindow);
			
			//Remove modalWindow in order not to display in the case of input error
			if (!empty(modalWindow) && !empty(modalWindow.parentNode)) { modalWindow.parentNode.removeChild(modalWindow);} //?
			//console.info('2-step #userto-form-' + f + '-modal-' + m,' modalWindow:',modalWindow);

			
			//Restore modalWindow for the next step of input
			setTimeout(function(){
				
				if (!empty(parentModalWindow)) {
					
					insertAppendNode(parentModalWindow, modalWindow, 'insert'); //?
					window.feedback.setFeedbackForm();
					
					//letsTest('4-step window.feedback.feedbackSend f,m', /* testId */ '', /* expect */ {'name': '#userto-form-' + f + '-modalWindow-' + m, 'parentModalWindow': parentModalWindow}, /* toEqual */ [] );
					if(	m > 0){
						var mM1	=	(window.feedback.form[f].modalStage).toString();
						//letsTest('window.feedback.feedbackSend mM1', /* testId */ '', /* expect */ mM1, /* toEqual */ [] );
						jQuery('#userto-form-' + f + '-modal-' + mM1).modal("toggle");
					}
				}
			},100);
			
			//Terminate sending date from the form in the case of input error
			return;
		}
		
		
		if(t === 'modal' && feedbackCaptureArray	!=	0){
			
			window.feedback.form[f].modalStage = m + 1;
			
		}
		
		
		window.feedback.feedbackCaptureString(f);
		//Stop sending email, if user does not fill all fields

		//console.info(' window.feedback.form[',f,']:',window.feedback.form[f]);
		//location.host
		//location.pathname.replace(/\//gim, '')


		/* ******************************************
		 * Part for message sending via Telegram
 		 ****************************************** */
		
		if(	empty(window.feedback.form[f].email[0].messageTlgrm)){ 
			window.feedback.form[f].email[0].messageTlgrm =	'';}
		
		//console.info(' window.feedback.form[',f,'].email[0].messageTlgrm Before:',window.feedback.form[f].email[0].messageTlgrm);
			window.feedback.form[f].email[0].messageTlgrm	+=							
				
					window.feedback.captureStrTlgrm	+ '\n' +
	
					'Page:\n'					+
					window.feedback.host		+	
					window.feedback.pathname;					
									
				//'<a href="http://r1.userto.com/demoResizeFeedbackField.php" target="_blank">'+'Source site</a>';							
				

		//console.info(' window.feedback.form[',f,'].email[0]: After',window.feedback.form[f].email[0]);

		
		/* ******************************************
		 * Part for email AND Telegram sending
 		 ****************************************** */
		
		if(	empty(window.feedback.form[f].email[0].message)){ 
			window.feedback.form[f].email[0].message =	'';}
		
		//console.info(' window.feedback.form[',f,'].email[0].message Before:',window.feedback.form[f].email[0].message);
			window.feedback.form[f].email[0].message	+=							
				'<br />' 	+
				'<br />' 	+
				'<p>' 		+
					window.feedback.captureStr	+
				'</p>'		+
				'<p style="">' 	+
					'Page: '					+
					window.feedback.host		+	
					window.feedback.pathname	+
				'</p>';					
									
		var txt	=		window.feedback.form[f].email[0].topic 		+ '\n' +				
						window.feedback.form[f].email[0].messageTlgrm;
		//console.info(' f',f,' window.feedback.form[f].email[0]:',window.feedback.form[f].email[0]);
		//window.feedback.form[f].email[0].toEmail = 't3531350@yahoo.com';

		//letsTest('feedbackSend 4-step ', /* testId */ '', /* expect */ [f, m, t,window.feedback.form], /* toEqual */ [] );
		jQuery.ajax({
			type: 			'POST',
			url: 			'http://userto.com/php/phpGetPost.php',
			data: {
				optPost:	window.feedback.form[f].email[0].optPost,
				emailTo:	window.feedback.form[f].email[0].toEmail,
				emailFrom:	window.feedback.form[f].email[0].fromEmail,
				emailBCC:	window.feedback.form[f].email[0].BCC,
				topic:		window.feedback.form[f].email[0].topic,				
				message:	window.feedback.form[f].email[0].message,
				txt:		txt,
				parse_mode: 'HTML'
			},
			dataType: 'text',
			success: function(echo){
					
					//Form reset
					window.feedback.setFeedbackForm();					

					//alert(echo);
					//console.info('email echo: ',echo);
				}
		});			
				
		return;
	}	
	
