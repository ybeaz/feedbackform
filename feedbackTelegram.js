

	
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
	

//Deleting styles preventing modal windows to dissapier
	function deleteModalBackdropStyles(){
		setTimeout(function(){
			var	modal_backdrop		=	document.querySelectorAll('.modal-backdrop');
				if( document.querySelector('.modal-backdrop')){
					document.querySelector('.modal-backdrop').style.display	=	'none !important';
					document.querySelector('.modal-backdrop').visibility	=	'hidden !important';
					document.querySelector('.modal-backdrop').position	=	'relative !important';
				}
				
				console.info('modal_backdrop: ',modal_backdrop);
			
				if(modal_backdrop){
					for(var i = 0; i< modal_backdrop.length; i++){
						console.info('modal_backdrop: ',i,': ',modal_backdrop[i]);
						modal_backdrop[i].style.display				=	'none !important';
						modal_backdrop[i].style.visibility			=	'hidden !important'; 
						modal_backdrop[i].style.position			=	'relative !important';
					}
				}
			var	modal_				=	document.querySelectorAll('.modal');
				if( document.querySelector('.modal')){
					document.querySelector('.modal').backgroundImage	=	'url("http://userto.com/img/BlackTransparentBackground.png")';
					document.querySelector('.modal').zIndex				=	'1100 !important';
				}
				
				if(modal_){
				for(var i = 0; i< modal_.length; i++){
					modal_[i].style.backgroundImage					=	'url("http://userto.com/img/BlackTransparentBackground.png")';
					modal_[i].style.zIndex							=	'1100 !important';
				}
			}
		},100);
		
		return;
	}

	
//Define	Function to clean feedback blocks	
	function cleanFeedbackForm(f){
	
		letsTest('cleanFeedbackForm', /* testId */ '', /* expect */ f, /* toEqual */ [] );
		
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
	function setFeedbackForm (){	
				
		//console.info(' window.feedback 3:',window.feedback);
		
		//console.info(' host:',location.host,' pathname:',location.pathname);
				
		//Loop through obj.forms in the page
		for(var f = 0; f < window.feedback.form.length; f++){

			window.feedback.form[f].modalStage	=	0;
		
			if(empty(window.feedback.form[f]) || empty(window.feedback.form[f].elem)){continue;}
		
			//console.info(' window:', window);
			//var letsTest = module.exports.letsTest();
			//letsTest('setFeedbackwindow.feedback.form', /* testId */ '', /* expect */ window.feedback.form[f], /* toEqual */ [] );
		
			//Loop through tag elements in the window.feedback.form
			for(var e = 0; e < window.feedback.form[f].elem.length; e++){			

				var formGroup = document.querySelector(".userto-form-" + f + "-elem-" + e); //document.getElementById("window.feedback.form-" + f);			
					//See more: http://www.javascriptkit.com/dhtmltutors/css_selectors_api.shtml
					//console.info('window.feedback.form-',f,'-elem-',e,':',window.feedback.form);
				var string	=	'';				
			
				//Defence from absent elements in HTML or init object
				if(	empty(formGroup) || empty(window.feedback.form[f].elem[e])){ continue; }

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
					if( 	 window.feedback.form[f].elem[e].tagName == 'select') { 
						
						string	+=	'<select ';
						string	+=	'id="' + window.feedback.form[f].elem[e].tagName + '-' + f + '-' + e + '" ';
						string	+=	(!empty(window.feedback.form[f].elem[e].tagSelectMultiple)  ? 'multiple ' :  '' ) +
								(window.feedback.form[f].elem[e].tagRequired === 'required' ? 'required ' :  '' );
							//Select tag css class and style
							if(!empty(window.feedback.form[f].elem[e].tagClass)){
								string	+=	'class="' + window.feedback.form[f].elem[e].tagClass + '" ';
							}
							if(!empty(window.feedback.form[f].elem[e].tagStyle)){
								string	+=	'style="' + window.feedback.form[f].elem[e].tagStyle + '" ';
							}
							if(!empty(window.feedback.form[f].elem[e].tagTitleTooltip)){
								string	+=	'data-toggle="tooltip" ';
								string	+=	'title="' + window.feedback.form[f].elem[e].tagTitleTooltip + '" ';
							}
						string	+=	'>';
						
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
					//Block for input tag
					else if( window.feedback.form[f].elem[e].tagName === 'input') { 
						
						string	+=	'<input ';
						string	+=	'id="' + window.feedback.form[f].elem[e].tagName + '-' + f + '-' + e + '" ';
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
						if(!empty(window.feedback.form[f].elem[e].tagTitleTooltip)){
							string	+=	'data-toggle="tooltip" ';
							string	+=	'title="' + window.feedback.form[f].elem[e].tagTitleTooltip + '" ';
						}										
						string	+=	'/>';

					}						
					//Block for textarea tag
					else if( window.feedback.form[f].elem[e].tagName == 'textarea') { 
						
						string	+=	'<textarea ';
						string	+=	'id="' + window.feedback.form[f].elem[e].tagName + '-' + f + '-' + e + '" ';
						string	+=	(window.feedback.form[f].elem[e].tagRequired === 'required' ? 'required ' :  '' );
						string	+=	(!empty(window.feedback.form[f].elem[e].tagPlaceholder) ? 
										'placeholder="'	+ window.feedback.form[f].elem[e].tagPlaceholder + '" ' : '');
						//Textarea css class and style
						if(!empty(window.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagClass + '" ';
						}
						string	+=	'style="resize: both; overflow: hidden; ' + 
							(!empty(window.feedback.form[f].elem[e].tagStyle) ? 
									window.feedback.form[f].elem[e].tagStyle + '" ' : '" ');
						
						string	+=	(!empty(window.feedback.form[f].elem[e].tagValue) ? 
										'value="'	+ window.feedback.form[f].elem[e].tagValue + '" ' : '');
						if(!empty(window.feedback.form[f].elem[e].tagTitleTooltip)){
							string	+=	'data-toggle="tooltip" ';
							string	+=	'title="' + window.feedback.form[f].elem[e].tagTitleTooltip + '" ';
						}										
						string	+=	'>'; 
						string	+=	(window.feedback.form[f].elem[e].tagValue != undefined ? window.feedback.form[f].elem[e].tagValue :  '' );
						string	+=	'</textarea>';
					}
					//Block for button tag
					else if( 	window.feedback.form[f].elem[e].tagName == 'button') { 
						
						string	+=	'<button ';
						string	+=	'id="' + window.feedback.form[f].elem[e].tagName + '-' + f + '-' + e + '" ';
						
						//Button css class and style
						if(!empty(window.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagClass + '" ';
						}
						if(!empty(window.feedback.form[f].elem[e].tagStyle)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagStyle + '" ';
						}						
						if(!empty(window.feedback.form[f].elem[e].tagTitleTooltip)){
							string	+=	'data-toggle="tooltip" ';
							string	+=	'title="' + window.feedback.form[f].elem[e].tagTitleTooltip + '" ';
						}
						
						//Button to submit results only						
						if(window.feedback.form[f].elem[e].tagType === 'submit'){
							if(!empty(window.feedback.form[f].elem[e].modalNum)){
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
						string	+=	'<a ';
						string	+=	'id="' + window.feedback.form[f].elem[e].tagName + '-' + f + '-' + e + '" ';
						string	+=	'href="#" ';
						//a css class and style
						if(!empty(window.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagClass + '" ';
						}
						if(!empty(window.feedback.form[f].elem[e].tagStyle)){
							string	+=	'class="' + window.feedback.form[f].elem[e].tagStyle + '" ';
						}						
						if(!empty(window.feedback.form[f].elem[e].tagTitleTooltip)){
							string	+=	'data-toggle="tooltip" ';
							string	+=	'title="' + window.feedback.form[f].elem[e].tagTitleTooltip + '" ';
						}
						
						//a to submit results only						
						if(window.feedback.form[f].elem[e].tagType === 'submit'){
							if(!empty(window.feedback.form[f].elem[e].modalNum)){
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

						
					//Add string with an element html
					document.querySelector('.userto-form-' + f + '-elem-' + e).innerHTML	= string;		
					
						//console.info('document.querySelector(".userto-form-"',f,'"-elem-"',e,')',
							//document.getElementById (window.feedback.form[f].elem[e].tagName + '-' + f + '-' + e));
					
					//Attach events to buttons and a tags
					if(	!emptyObj(window.feedback.form[f]) && !empty(window.feedback.form[f].elem[e]) &&
						(window.feedback.form[f].elem[e].tagName === 'button' || 
						 window.feedback.form[f].elem[e].tagName === 'a')){
						
						(function (f, e) {
							var fVar 	=	f;
							var mVar	=	(window.feedback.form[f].elem[e].modalNum != undefined ? window.feedback.form[f].elem[e].modalNum : '');
							var tVar	=	window.feedback.form[f].elem[e].tagType;
							//letsTest('feedbackForm 01 fVar, mVar, tVar', /* testId */ '', /* expect */ [fVar, mVar, tVar], /* toEqual */ [] );
							
							if(		window.feedback.form[f].elem[e].tagType === 'reset'){
								letsTest('feedbackForm 01 reset', /* testId */ '', /* expect */ [fVar, mVar, tVar], /* toEqual */ [] );
								document.querySelector('#' + window.feedback.form[f].elem[e].tagName + '-' + f + '-' + e).
								addEventListener ("click", function(){cleanFeedbackForm(fVar);}, false);
							}
							//a to submit results only						
							else if(window.feedback.form[f].elem[e].tagType === 'submit' 		||
									window.feedback.form[f].elem[e].tagType === 'submit-modal'	||
									window.feedback.form[f].elem[e].tagType === 'modal'){
								letsTest('feedbackForm 01 submit-modal', /* testId */ '', /* expect */ [fVar, mVar, tVar], /* toEqual */ [] );		
								document.querySelector('#' + window.feedback.form[f].elem[e].tagName + '-' + f + '-' + e).
								addEventListener ("click", function(){feedbackSend(fVar, mVar, tVar);}, false);
								//console.info('document.getElementById(',window.feedback.form[f].elem[e].tagName,'-',f,'-',e,')',
								//document.getElementById (window.feedback.form[f].elem[e].tagName + '-' + f + '-' + e));
							}
						
						})(f, e);
					}
				
				
			}
			//End of loop over elements
							
		}
		//End of loop over window.feedback.forms
		
		
		return;
	}
	
		
//Define	Function to capture data from form-elements	
	function feedbackCaptureArray (f){
		//console.info(' host:',host,' path:', path,' form:',form);
		
		var status					=	[];
		var querySelector			=	'div[class*="' + 'userto-form-' + f + '-"]';					
			//console.info(' querySelector:',querySelector);
				
		var formGroup				=	document.querySelectorAll(querySelector);
			//letsTest('1-st feedbackCaptureArray', /* testId */ '', /* expect */ [f, formGroup, form[f]], /* toEqual */ [] );
		
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
							form[f].elem[e].tagRequired ===  'required'){
					var alertString	=
						'Please, check ' +  form[f].elem[e].labelInnerHTML + 
						'\n\nОтметьте проверьте пожалуйста ' +  form[f].elem[e].labelInnerHTML ;
					alert(alertString);
					status[ e]	= 	0;
				}
				else if(		selectArr[0].selectedIndex	=== -1	&&
							form[f].elem[e].tagRequired !=  'required'){
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
					
					//letsTest('Input feedbackCaptureArray', /* testId */ '', /* expect */ [f, e, inputArr[0].value, form], /* toEqual */ [] );
				
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
	function feedbackCapture(f){
		
		//letsTest('feedbackCaptureString', /* testId */ '', /* expect */ [window.feedback.form[f]], /* toEqual */ [] );
		
		
		var capture			=	{};
			capture.str		=	'';
			capture.tlgrm	=	'';
			
		if(	!empty(window.feedback.form) && !empty(window.feedback.form[f]) &&
			!empty(window.feedback.form[f].email) && !empty(window.feedback.form[f].email[0]) &&
			!empty(window.feedback.form[f].email[0].userEmail)){
			capture.str		+=	'Email: ' + window.feedback.form[f].email[0].userEmail + '<br />';
		}

		for(var e = 0; e < window.feedback.form[f].elem.length; ++e){
			
			if(	!empty(window.feedback.form[f].elem[e]) && 
				window.feedback.form[f].elem[e].tagName != 'button' &&
				window.feedback.form[f].elem[e].tagName != 'a'){
				
				//console.info(window.feedback.form[f].email[0].toEmail.match(/^([\S]{1,})@([\S]{1,}).([^.]{2,})$/gi) );
								
				capture.str	+= ' ' + window.feedback.form[f].elem[e].string + '<br />';
				
				capture.tlgrm	+= '<i>' + window.feedback.form[f].elem[e].label + '</i> '  +
					' ' + window.feedback.form[f].elem[e].tagValue + '\n';				
			}
		}
		
		//letsTest('feedbackCaptureString', /* testId */ '', /* expect */ window.feedback.form[f].elem, /* toEqual */ [] );
		//console.info(' captureStr:',captureStr);
		
		return capture;
	}


//Define	Function to send feedback
	function feedbackSend (f, m, t){
		/* input:	f	-	form number-index
					m	-	modul window number
					t	-	type of modal window
			output: return;
		*/
		//event.preventDefault();
		
		letsTest('3-step feedbackSend form', /* testId */ '', /* expect */ [f, m, t], /* toEqual */ [] );

		
		if(		t === 'reset'){
			return;
		}
		else if(t === 'modal'){

			var feedbackCaptureArr	=	0;
		}
		else{
			var feedbackCaptureArr	=	feedbackCaptureArray(f);
		}
		
		
		
		//letsTest('3-step feedbackSend feedbackCaptureArr', /* testId */ '', /* expect */ feedbackCaptureArr, /* toEqual */ [] );
		
		if(feedbackCaptureArr		==	0){
			
			var parentModalWindow	=	document.querySelector('#modalContainer' );
			var modalWindow 		= 	document.querySelector('#userto-form-' + f + '-modal-' + m );

			
			//NEW cleanFeedbackForm();
			
			console.info('1-step #userto-form-' + f + '-modal-' + m,' modalWindow:',modalWindow);
			
			//Remove modalWindow in order not to display in the case of input error
			if (!empty(modalWindow) && !empty(modalWindow.parentNode)) { modalWindow.parentNode.removeChild(modalWindow);}
			console.info('2-step #userto-form-' + f + '-modal-' + m,' modalWindow:',modalWindow);

			
			//Restore modalWindow for the next step of input
			setTimeout(function(){
				
				if (!empty(parentModalWindow)) {
					
					insertAppendNode(parentModalWindow, modalWindow, 'insert'); //?
					setFeedbackForm();
						
					//letsTest('4-step feedbackSend f,m', /* testId */ '', /* expect */ {'name': '#userto-form-' + f + '-modalWindow-' + m, 'parentModalWindow': parentModalWindow}, /* toEqual */ [] );
					if(	m > 0){
						var mM1	=	(window.feedback.form[f].modalStage).toString();
						letsTest('feedbackSend mM1', /* testId */ '', /* expect */ mM1, /* toEqual */ [] );
						jQuery('#userto-form-' + f + '-modal-' + mM1).modal("toggle");
					}
				}
			},250);
			
			//Terminate sending date from the form in the case of input error
			return;
		}
		
		
		if(t === 'modal' && feedbackCaptureArr	!=	0){
			
			window.feedback.form[f].modalStage = m + 1;
			return;
		}
		
		
		var capture = feedbackCapture(f);
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
				
					capture.tlgrm	+ '\n' +
	
					'Page:\n'					+
					window.host		+	
					window.pathname;					
									
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
					capture.str	+
				'</p>'		+
				'<p style="">' 	+
					'Page: '					+
					window.host		+	
					window.pathname	+
				'</p>';					
									
		var txt	=		window.feedback.form[f].email[0].topic 		+ '\n' +				
						window.feedback.form[f].email[0].messageTlgrm;
		//console.info(' f',f,' window.feedback.form[f].email[0]:',window.feedback.form[f].email[0]);
		//window.feedback.form[f].email[0].toEmail = 't3531350@yahoo.com';

		//letsTest('feedbackSend 4-step ', /* testId */ '', /* expect */ [f, m, t,form], /* toEqual */ [] );
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
				chat_id:	window.feedback.form[f].email[0].chatId,
				txt:		txt,
				parse_mode: 'HTML'
			},
			dataType: 'text',
			success: function(echo){
					
					//Form reset
					setFeedbackForm();					
					cleanFeedbackForm(f)
					//alert(echo);
					//console.info('email echo: ',echo);
				}
		});			
				
		return;
	}	
	

	
	
	
/* Script in order Bootstrap tooltips work https://codepen.io/imoddesign/pen/laoAE */
	jQuery(function(){
		setTimeout(function(){
			var options = {
				placement: function (context, element) {
					var position = jQuery(element).position();
					//console.log(position.top - jQuery(window).scrollTop());
					if (position.top - jQuery(window).scrollTop() < 10){
						return "bottom";
					}
					return "top";
				}, trigger: "hover"
			};
			var querySel	=	'[data-toggle="tooltip"]';
			jQuery(querySel).tooltip(options);
		}, 1000);
	});


