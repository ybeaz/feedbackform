



//**********************************************************
// For Version 3.0: FEEDBACK FIELD SERVICE FOR LANDING PAGES
//**********************************************************

//Checking if var is empty, see http://javascript.ru/php/empty
function empty		( mixed_var ) {	// Determine whether a variable is empty
	// 
	// +   original by: Philippe Baumann

	if( typeof	mixed_var === 'undefined'	||
				mixed_var === undefined		||
				mixed_var === ''			|| 
				mixed_var === 0				|| 
				mixed_var === '0'			||
				mixed_var === null			||
				mixed_var === false			||
	   (typeof mixed_var === 'array' && mixed_var.length === 0 ) ){
		return true;
	}
	else{
		return false;
	}
}
function notEmpty	( mixed_var ) {	// Determine whether a variable is empty
	// 
	// +   original by: Philippe Baumann

	if( typeof	mixed_var === 'undefined'	||
				mixed_var === undefined		||
				mixed_var === ''			|| 
				mixed_var === 0				|| 
				mixed_var === '0'			||
				mixed_var === null			||
				mixed_var === false			||
		 (typeof mixed_var === 'array' && mixed_var.length === 0 ) ){
		return false;
	}
	else{
		return true;
	}
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
	if(	empty(window.feedback)){
		window.feedback							=	{};}


//Define	Function to setup confirmation block
	window.feedback.setFeedbackForm				=	function(){	
		
		/*	Documentation
			window.feedback.form[f]			-	index of form. You may have several form on one page u
			window.feedback.form[f].elem[e]			-	index of element container
			window.feedback.form[f].elem[e].tagName					-	tag name such as select, input, textarea, button	
			window.feedback.form[f].elem[e].tagId						-	tag id
			window.feedback.form[f].elem[e].tagType						-	tag type for button, may be applicable for input: 'number', 'tel', 'email'
			window.feedback.form[f].elem[e].tagClass					-	tag class for main tag such as select, input, textarea, button
			window.feedback.form[f].elem[e].tagInnerHTML				-	[option] main tag innerHtml
			window.feedback.form[f].elem[e].tagPlaceholder				-	[option] main tag placeholder
			window.feedback.form[f].elem[e].tagSelectMultiple			-	[option] main tag multiple
			window.feedback.form[f].elem[e].labelInnerHTML				-	[option] label-title of the component
			window.feedback.form[f].elem[e].labelClass					-	[option] css class for label				
			window.feedback.form[f].elem[e].footerInnerHTML				-	[option] footnotes text
			window.feedback.form[f].elem[e].footerClass					-	[option] footnotes class			
			window.feedback.form[f].elem[e].tagOption					-	array for options, set of values to select
			window.feedback.form[f].elem[e].tagOption[o]				-	index of option, 
			window.feedback.form[f].elem[e].tagOption[o].optInnerHTML	-	option innerHTML
			window.feedback.form[f].elem[e].tagOption[o].selected		-	selected, if so
		*/
		
		//Unused. Call the function to set ini content for feedback forms
			if(	notEmpty(window.feedback.setFeedbackFormContent)	&&
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
			
			//Loop through tag elements in the form
			for(var e = 0; e < window.feedback.form[f].elem.length; e++){			

				var urlForm = document.querySelector(".userto-form-" + f + "-elem-" + e); //document.getElementById("form-" + f);			
					//See more: http://www.javascriptkit.com/dhtmltutors/css_selectors_api.shtml
					//console.info('form-',f,'-elem-',e,':',urlForm);
				var string	=	'';				
			
				//Defence from absent elements in HTML or init object
				if(	empty(urlForm) || empty(window.feedback.form[f].elem[e])){ continue; }

					//Add label tag with content, if it is
					string	+=	(!empty(window.feedback.form[f].elem[e].labelInnerHTML)) ? 
								'<label ' +
								(!empty(window.feedback.form[f].elem[e].labelClass) ? 
								'class="' + window.feedback.form[f].elem[e].labelClass + '">' : '>') +
								window.feedback.form[f].elem[e].labelInnerHTML + '</label>' : '';
					//console.info(' string 1:',string);
						
					//Block for select tag
					if( window.feedback.form[f].elem[e].tagName == 'select') { 
						
						string	+=	'<select ' +
								(!empty(window.feedback.form[f].elem[e].tagSelectMultiple) ? 
								'multiple ' :  '' )  +
								'class="' + window.feedback.form[f].elem[e].tagClass +'">';
						
							//console.info(' window.feedback.form[',f,'].elem[',e,'].tagOption:',window.feedback.form[f].elem[e].tagOption);
							//Loop through options in the select tag
							for(var o = 0; o < window.feedback.form[f].elem[e].tagOption.length; o++){
								
								string	+=	'<option ' +
									(!empty(window.feedback.form[f].elem[e].tagOption[o].selected) ? 
									'selected="selected">' :  '>' )  + 
									 window.feedback.form[f].elem[e].tagOption[o].optInnerHTML + 
											'</option>';
								
							}
							//End of the loop for option tag
			
						string	+=	'</select>';
					}
					//Block for textarea tag
					else if( window.feedback.form[f].elem[e].tagName == 'textarea') { 
						
						string	+=	'<textarea ';				
						string	+=	' class="' + window.feedback.form[f].elem[e].tagClass + '">';
						string	+=	'</textarea>';
					}						
					//Block for input tag
					else if( window.feedback.form[f].elem[e].tagName === 'input') { 
						
						string	+=	'<input ';				
						string	+=	'class="' 		+ window.feedback.form[f].elem[e].tagClass + '" ';
						string	+=	'type="'		+ window.feedback.form[f].elem[e].tagType + '" ';
						string	+=	'placeholder="'	+ window.feedback.form[f].elem[e].tagPlaceholder + '" ';
						string	+=	'>';

					}						
					//Block for button tag
					else if( window.feedback.form[f].elem[e].tagName == 'button') { 
						
						string	+=	'<button ';				
						string	+=	'class="' + window.feedback.form[f].elem[e].tagClass + '" ';
						string	+=	'onClick="window.feedback.feedbackSend' + '(' + f + '); return false;">';
						string	+=	window.feedback.form[f].elem[e].tagInnerHTML;
						string	+=	'</button>';
					}
					
					//Add footerInnerHTML div if it exist
					string	+=	(!empty(window.feedback.form[f].elem[e].footerInnerHTML) ? 
						'<footer' +
							(!empty(window.feedback.form[f].elem[e].footerClass) ?
							 ' class="' + window.feedback.form[f].elem[e].footerClass + '">' : '>') + 
							 window.feedback.form[f].elem[e].footerInnerHTML + 
						'</footer>' :  '' ); 
									
		
				//console.info(' string 2:',string);
					urlForm.innerHTML	=	string;		
		
			}
			//End of loop over elements
							
		}
		//End of loop over forms
	
	}
	
	
//Define	Function to setup a modal window for confirmatin
	window.feedback.setModalConf				=	function(){	
	
	
		for(var f = 100; f >= 0; f--){
			
			//Defence from 
			if(	window.feedback.form					==	undefined	||	
				window.feedback.form[f] 				==	undefined	||
				window.feedback.form[f].modalHeaderConf	==	false		||
				window.feedback.form[f].modalHeaderConf	==	'N'			||
				window.feedback.form[f].modalHeaderConf	==	''){continue;}
			
			var parentNode	=	document.body || document.getElementsByTagName('body')[0];	
				
			var nodeInnerHTML	=
				'<div class="modal-dialog">' +
					'<!-- Modal content-->' +
					'<div class="modal-content">' +
						'<div class="modal-header">' +
							'<button type="button" class="close" data-dismiss="modal">&times;</button>' +
							(window.feedback.form[f].modalHeaderConf 	!= undefined ? window.feedback.form[f].modalHeaderConf : '') +
						'</div>' +
						'<div class="modal-body text-info">' +
							(window.feedback.form[f].modalTextConf 		!= undefined ? window.feedback.form[f].modalTextConf : '') +
						'</div>' +
						'<div class="modal-footer">' +
							'<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
						'</div>' +
					'</div>' +
				'</div>';
			
			var node = document.createElement('div');
				node.setAttribute('id','feedbackSuccess-'+ f);
				node.className	=	"container-fluid modal fade";
				node.style		=	'padding: 3em 0 0 0;';
				node.role		=	"dialog";
				node.innerHTML	=	nodeInnerHTML;
				
				insertAppendNode(parentNode, node, 'append');	
		}
		
		return;

	}
	
	
//Define	Function to capture data from form-elements	
	window.feedback.feedbackCaptureArray		= function(f){
		//console.info(' host:',host,' path:', path,' form:',form);
		
			window.feedback.data	=	[];
			var querySelector		=	'div[class*="' + 'userto-form-' + f + '-"]';					
				//console.info(' querySelector:',querySelector);
				
		var formGroup	=	document.querySelectorAll(querySelector);
			//console.info(' formGroup:',formGroup);
		
		for(var e = 0; e < formGroup.length; e++){
		
			//Check if the element exists
			if(empty(formGroup[e])){continue;}
				
			var selectArr			=	formGroup[e].querySelectorAll('select');
			var selectedStr			=	'';
			var inputArr			=	formGroup[e].querySelectorAll('input');
			var textareaArr			=	formGroup[e].querySelectorAll('textarea');			
			var labelArr			=	formGroup[e].querySelectorAll('label');				
			
			//Return label for input field
			if(		labelArr[0] != undefined && labelArr[0].innerHTML	!= undefined){
				var label	=	labelArr[0].innerHTML;
			}
			else if(labelArr[0] != undefined && inputArr[0].placeholder	!=	undefined){
				var label	=	inputArr[0].placeholder;
			}
			else{	
				var label	=	'';
			}
			
		
			//Block for select
			if(	selectArr != undefined && selectArr[0] != undefined &&
				selectArr[0].options[selectArr[0].selectedIndex] != undefined){
				
				window.feedback.data[e]				=	{};
				window.feedback.data[e].selectedArr	=	[];
				
				//See more http://stackoverflow.com/questions/11583728/getting-the-selected-values-in-a-multiselect-tag-in-javascript/11583999#11583999
				for (var i = 0; i < selectArr[0].length; i++) {
					if (selectArr[0].options[i].selected) {
						window.feedback.data[e].selectedArr.push(selectArr[0].options[i].value);
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
				
				window.feedback.data[e].tagName		=	'select';
				window.feedback.data[e].label		=	label;
				window.feedback.data[e].tagValue	=	selectedStr;
				window.feedback.data[e].string		=	window.feedback.data[e].label + ' ' + 
														window.feedback.data[e].tagValue;
			}
			else if(selectArr != undefined && selectArr[0] != undefined){
				window.feedback.data[e]				=	{};
				window.feedback.data[e].tagName		=	'select';
				window.feedback.data[e].label		=	label;
				window.feedback.data[e].tagValue	=	'No data';
				window.feedback.data[e].string		=	window.feedback.data[e].label + ' ' + 'No data';	
			}

		
		
		
			//Block for input
			if(	inputArr != undefined && inputArr[0] != undefined){
				//console.info(' input:',labelArr[0].innerHTML,' ',inputValue);
				//console.info(' inputArr[0]:',inputArr[0]);				
				
				//console.info(' value.match(/^([\d\s\+\-]{6,})$/gi):',inputArr[0].value.match(/^([\d\s\+\-]{6,})$/gi));
				//console.info(' inputArr[',0,'].checkValidity():',inputArr[0].checkValidity());

				//Error Wrong email
				if(			inputArr[0].type == 'email'			&&
							inputArr[0].value.match(/^([\S]{1,})@([\S]{1,}).([^.]{2,})$/gi) == null	){
					var alertString	=
						'Please, check Email\n\nПроверьте пожалуйста написание Email';
					alert(alertString);
					return 0;
				}
				//Error Wrong tel
				else if(	inputArr[0].type == 'tel'	&&
							inputArr[0].value.match(/^([\d\s\+\-]{6,})$/gi)	==	null){						
					var alertString	=
						'Please, check telephone number\n\nПроверьте пожалуйста написание телефона\n' +
						inputArr[0].value;
					alert(alertString);
					return 0;
				
				}
				//Error empty field
				//See more about checkValidity() http://www.w3schools.com/js/js_validation_api.asp
				else if(	inputArr[0].checkValidity() == false){
					var alertString	=
						inputArr[0].validationMessage  + '\n' + label +
						'\n\n\n\n' +
						'Вы пропустили пункт' + '\n' + label;
					alert(alertString);
					return 0;
					
				}
				//Case take email
				else if(inputArr[0].type == 'email'){
					if( window.feedback.form[f] 		== undefined){
						window.feedback.form[f] 		=	{};
						window.feedback.form[f].email	=	[];
						window.feedback.form[f].email[0]=	{};
					}
					if(	window.feedback.form[f].email[0].toEmail		!=	undefined	&&
						window.feedback.form[f].email[0].toEmail.length	<	3){
						window.feedback.form[f].email[0].toEmail		=	inputArr[0].value;						
					}
						window.feedback.form[f].email[0].userEmail		=	inputArr[0].value;
				}
				//Case usual input field
				else if(	inputArr[0]		!=	undefined	&&
							inputArr[0]		!=	''			){
										
					window.feedback.data[e]				=	{};
					window.feedback.data[e].tagName		=	'input';
					window.feedback.data[e].label		=	label;						
					window.feedback.data[e].tagValue	=	inputArr[0].value;
					window.feedback.data[e].string 		=	window.feedback.data[e].label + ' ' + window.feedback.data[e].tagValue;					
				}
					
			}
			
			//Block for textarea
			if(	textareaArr != undefined && textareaArr[0] != undefined){
				//console.info(' input:',labelArr[0].innerHTML,' ',textareaValue);
									
				//Error empty field
				//See more about checkValidity() http://www.w3schools.com/js/js_validation_api.asp				
				if(		textareaArr[0]			==	undefined	||
						textareaArr[0].checkValidity() == false ){
							
					var alertString	=
						textareaArr[0].validationMessage  + '\n' + label +
						'\n\n\n\n' +
						'Вы пропустили пункт' + '\n' + label;
						
					alert(alertString);
					return 0;	
				}
				else if(textareaArr[0] 			!= 	undefined	&&
						textareaArr[0].value	!=	undefined 	&&
						textareaArr[0].value	!=	''			){
						
					if(	textareaArr[0].value.match(/^([\s]{1,})$/gi) != null){
						textareaArr[0].value				=	'нет данных';
					}
						window.feedback.data[e]				=	{};
						window.feedback.data[e].tagName		=	'textarea';
						window.feedback.data[e].label		=	label;
						window.feedback.data[e].tagValue	=	textareaArr[0].value;				
						window.feedback.data[e].string 		=	window.feedback.data[e].label + ' ' + window.feedback.data[e].tagValue;
					
					
				}
				
			}

						
		}
		
			//console.info(' window.feedback.data:',window.feedback.data);
		
		return 1; 
	}


//Define	Function to process feedback capture array into string  
	window.feedback.feedbackCaptureString		=	function(f){
		
		window.feedback.captureStr	=	'';
		
		if(	window.feedback.form[f].email[0].userEmail	!= undefined){
			window.feedback.captureStr	+=	'Email: ' + window.feedback.form[f].email[0].userEmail + '<br />';
		}
		//console.info(' window.feedback.data:',window.feedback.data);
		
		for(var e = 0; e < window.feedback.data.length; ++e){
			
			if(window.feedback.data[e] != undefined){
				
				//console.info(window.feedback.form[f].email[0].toEmail.match(/^([\S]{1,})@([\S]{1,}).([^.]{2,})$/gi) );
								
				window.feedback.captureStr	+= window.feedback.data[e].string + '<br />';
			}
		}
		
		//console.info(' window.feedback.captureStr:',window.feedback.captureStr);
		return;
	}

	
//Define	Function to process feedback capture array into string for messanger Telegram  
	window.feedback.feedbackCaptureStringTelegram	=	function(f){
		
		window.feedback.captureStrTlgrm	=	'';
		//console.info(' window.feedback.data:',window.feedback.data);
		
		for(var e = 0; e < window.feedback.data.length; ++e){
			
			if(window.feedback.data[e] != undefined){
				
				//console.info(window.feedback.form[f].email[0].toEmail.match(/^([\S]{1,})@([\S]{1,}).([^.]{2,})$/gi) );
								
				window.feedback.captureStrTlgrm	+= '<i>' + window.feedback.data[e].label + '</i> '  +
					window.feedback.data[e].tagValue + '\n';
			}
		}
		
		//console.info(' window.feedback.captureStr:',window.feedback.captureStr);
		return;
	}


//Define	Function to send feedback
	window.feedback.feedbackSend				= function(f){
		//event.preventDefault();
		
		if( typeof window.feedback === 'object' && typeof window.feedback.setFeedbackFormContent === 'function'){
			window.feedback.setFeedbackFormContent();
		}
		
		var feedbackCaptureArray	=	window.feedback.feedbackCaptureArray(f);
		//console.info(' window.feedback.data:',window.feedback.data);
		//console.info(' feedbackCaptureArray:',feedbackCaptureArray);
		if(feedbackCaptureArray	==	0){ return;}
		
		window.feedback.feedbackCaptureString(f);
		window.feedback.feedbackCaptureStringTelegram(f);
		//Stop sending email, if user does not fill all fields

		//console.info(' window.feedback.form[',f,']:',window.feedback.form[f]);
		//location.host
		//location.pathname.replace(/\//gim, '')


		/* ******************************************
		 * Part for message sending via Telegram
 		 ****************************************** */
		
		if(	window.feedback.form[f].email[0].messageTlgrm == undefined){ 
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
		
		if(	window.feedback.form[f].email[0].message == undefined){ 
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

		
	    $.ajax({
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
					$('#feedbackSuccess-' + f).modal()
					//alert(echo);
					//console.info('email echo: ',echo);
                }
	    });			
		
		return;
	}
	

//Define	Function to add contacts to a page
	function contactAddingToPages(){
		
		//console.info('You are here');
		
		var contact	=	document.getElementById("contact");
		
		if(	contact){
								
			contact.innerHTML	=	
			
				'<div class="container-fluid">\
					<div class="row p-t-1">\
						<div class="col-lg-2 col-md-2 col-sm-0 col-xs-0"></div>\
						<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">\
							<div class="container-fluid">\
								<div class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">\
										<h3 class="section-heading">Contacts:</h3>\
									</div>\
								</div>\
								<div class="row p-t-2">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">\
										<p class="m-t-0-em m-b-0-em p-t-0p5-em p-b-0p5-em verticalAlignParent">\
											<i class="fa fa-phone fa-2x sr-contact" data-toggle="tooltip" title="Phone" data-placement="top"></i>&nbsp;\
											<i class="fa fa-phone-square fa-2x sr-contact" data-toggle="tooltip" title="Viber" data-placement="top"></i>&nbsp;\
											<i class="fa fa-telegram fa-2x sr-contact" data-toggle="tooltip" title="Telegram" data-placement="top"></i>&nbsp;\
											&nbsp;&nbsp;&nbsp;<span class="verticalAlignChild">\
											+1 650 7410014<br />\
											</span></p>\
										<p class="m-t-0-em m-b-0-em p-t-0p5-em p-b-0p5-em verticalAlignParent">\
											<i class="fa fa-skype fa-2x sr-contact" data-toggle="tooltip" title="Skype" data-placement="top"></i>\
											&nbsp;&nbsp;&nbsp;<span class="verticalAlignChild">rootstem</span></p>\
										<p class="m-t-0-em m-b-0-em p-t-0p5-em p-b-0p5-em verticalAlignParent">\
											<i class="fa fa-envelope-o fa-2x sr-contact" data-toggle="tooltip" title="Email" data-placement="top"></i>\
											&nbsp;&nbsp;&nbsp;<span class="verticalAlignChild">r1@userto.com</span>\
											<!-- <img class="h-m-1p5" src="http://arbir.ru/images/icons/at_sign_14102501.jpg"\
											> --></p>\
										<div class="m-t-0-em m-b-0-em p-t-0p5-em p-b-0p5-em verticalAlignParent">\
											<i class="fa fa-whatsapp fa-2x sr-contact" data-toggle="tooltip" title="WhatsApp" data-placement="top"></i>&nbsp;\
											&nbsp;&nbsp;&nbsp;<span class="verticalAlignChild">+7 9126619279\
											<!-- <s>+7 912 6619279</s> --></span>\
											</div>\
									</div>\
								</div>\
								<div class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">\
										<img src="http://r1.userto.com/img/_VVS3415-crop.png" \
										class="img-responsive img-thumbnail h-m-15" ' + ' >\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">\
							<div class="container-fluid">\
								<div class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">\
										<h4 class="section-heading">You have a question?</h4>\
									</div>\
								</div>\
								<div class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">\
									</div>\
								</div>\
								<div class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">\
										<h3>do not hesitate to send a message:</h3>\
									</div>\
								</div>\
								<div class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">\
										<div class="container-fluid">\
											<div class="row">\
												<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
													<!-- feedback url 0 form 0 elem 0 -->\
													<div id="" class="form-group userto-form-0-elem-0">\
														<label class="control-label" for="name">Name</label>\
														<input type="text" class="form-control" id="name" placeholder="John Smith">\
													</div>\
												</div>\
											</div>\
											<div class="row">\
												<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
													<!-- feedback url 0 form 0 elem 1 -->\
													<div id="" class="form-group userto-form-0-elem-1">\
														<label class="control-label" for="tel">Skype, WhatsApp, Telegram, WeChat, Viber, Email or Phone*</label>\
														<input type="text" class="form-control" id="" placeholder="+19... mail@..." required>\
													</div>\
												</div>\
											</div>\
											<div class="row">\
												<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
													<!-- feedback url 0 form 0 elem 3 -->\
													<div id="" class="form-group userto-form-0-elem-3">\
														<label class="control-label" for="text">Question - commentary*</label>\
														<textarea class="textAreaInput h-10" id="text" \
															placeholder="message*"></textarea>\
													</div>\
												</div>\
											</div>\
											<div class="row">\
												<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
													<div class="col-md-offset-1">\
														<!-- feedback url 0 form 0 elem 4 -->\
														<div class="form-group userto-form-0-elem-4">\
															<button type="submit" class="btn btn-success" onClick="window.feedback.feedbackSend(' + "'0'" + '); return false;">Submit</button>\
														</div>\
													</div>\
												</div>\
												<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
													<div class="col-md-offset-1">\
														* required\
													</div>\
												</div>\
											</div>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center"></div>\
					</div>\
				</div>';				
				//console.info(' contact.innerHTML:',contact.innerHTML);
		}

		
		return;
	}


	
	
	//Run function to fill feedback form
	setTimeout(function(){	

		//Define global object feedback
		if(	window.feedback							==	undefined){
			window.feedback							=	{};}
			
			
		//Run 	Function to setup data for feedback url-form-element-option blocks
			//console.info(window.feedback.setFeedbackFormContent === 'function');
		if( typeof window.feedback === 'object' && typeof window.feedback.setFeedbackFormContent === 'function'){
			window.feedback.setFeedbackFormContent();
		}
		
		//Contact block adding
		contactAddingToPages();
	
		window.feedback.setFeedbackForm();
		window.feedback.setModalConf();
		
	}, 200);	
	
	

	
	
	
	
//**********************************************************
// Old, unsupported and unused. For Version 1.0: FEEDBACK FIELD SERVICE FOR LANDING PAGES
//**********************************************************	
	
//Define	Function to setup data for email confimation block
		window.feedback.setEmailConfData	=	function (){
			window.feedback.cnt				=	[];
			
			window.feedback.cnt[0]				=	{};
			window.feedback.cnt[0].emailFrom	=	"From: Company Inc. <yourCompanyMail@mail.com>\r\n";
			window.feedback.cnt[0].emailBCC		=	't3531350@yahoo.com'
			window.feedback.cnt[0].optgroup		=	'Subject of interest';
			window.feedback.cnt[0].topic		=	[]
			window.feedback.cnt[0].topic[0]		=	'topic00';
			window.feedback.cnt[0].topic[1]		=	'topic01';
			window.feedback.cnt[0].topic[2]		=	'topic02';
			window.feedback.cnt[0].placeholder	=	'Email Address';
			window.feedback.cnt[0].submit00		=	'Submit';
			window.feedback.cnt[0].message		=	'Dear Madam, Sir' + '<br />' + '<br />'	+
											'Thank you for sending request to get additional informantion.'		+ '<br />' +
											'We will get in touch with you as soon as possible.' 	+ '<br />'	+
											'<Best regards,>' + '<br />'							+
											'First name, Second name' + '<br />'					+
											'contact details' +  '<br />'							+
											'<a href="http://r1.userto.com/demoResizeFeedbackField.php" target="_blank">'+
											'Source site</a>';
											
			window.feedback.cnt[1]				=	{};
			window.feedback.cnt[1].emailFrom	=	"From: Company Inc. <yourCompanyMail@mail.com>\r\n";
			window.feedback.cnt[1].emailBCC		=	't3531350@yahoo.com'
			window.feedback.cnt[1].optgroup		=	'Option to choose';
			window.feedback.cnt[1].topic		=	[]
			window.feedback.cnt[1].topic[0]		=	'We need a programmer';
			window.feedback.cnt[1].topic[1]		=	'We looking for a freelancer';
			window.feedback.cnt[1].topic[2]		=	'Just call me back';
			window.feedback.cnt[1].placeholder	=	'telephone';			
			window.feedback.cnt[1].submit00		=	'Submit';
			window.feedback.cnt[1].message		=	'Dear Madam, Sir' + '<br />' + '<br />'	+
											'Thank you for sending request to get additional informantion.'		+ '<br />' +
											'We will get in touch with you as soon as possible.' 	+ '<br />'	+
											'<Best regards,>' + '<br />'							+
											'First name, Second name' + '<br />'					+
											'contact details' +  '<br />'							+
											'<a href="http://r1.userto.com/demoResizeFeedbackField.php" target="_blank">'+
											'Source site</a>';												
			return;
		}

	
//Define	Function to setup confirmation block
	function setEmailConf(){
		//console.info(' window.feedback.cnt:',window.feedback.cnt);
		
		if(window.feedback	== undefined){return;}
		
		for(i = 0; i < window.feedback.cnt.length; i++){
		
			//console.info(' window.feedback.cnt[',i,']:',window.feedback.cnt[i]);
			
			var selectOpt		=	document.getElementById('selectOpt-' + i +'-00');
			var optgroup 		=	document.getElementById('optgroup-'+ i +'-00');
				
			if(selectOpt != undefined && optgroup != undefined){
				
				optgroup.label	=	window.feedback.cnt[i].optgroup;
				
				for(k = 0; k < window.feedback.cnt[i].topic.length; k++){
					var opt 			=	document.createElement("option");
						opt.id			=	'topic-' + i + '-' + k;
						opt.innerHTML	=	window.feedback.cnt[i].topic[k];
						//console.info('optgroup: ',optgroup,' opt:',opt);
						
						insertAppendNode(optgroup, opt, 'append');
				}	
			}
			
			if(	document.getElementById('media-' + i +'-00')){
				document.getElementById('media-' + i +'-00').placeholder=	window.feedback.cnt[i].placeholder;
			}
			if(	document.getElementById('submit-' + i +'-00')){
				document.getElementById('submit-' + i +'-00').innerHTML	=	window.feedback.cnt[i].submit00;
			}
		
		}		

	}
	

//Define	Function to send email confirmation
	function emailConf(i){
		
		if(window.feedback	== undefined){return;}
		
		//console.info(' i',i);
		var n						=	parseInt(i);
		
		var emailConf				=	{};
			emailConf.optPost		=	'emailFeedback';
			emailConf.media			=	document.getElementById('media-'+ i +'-00').value;
			emailConf.emailFrom		=	window.feedback.cnt[n].emailFrom;
			emailConf.emailBCC		=	window.feedback.cnt[n].emailBCC;
		
		var selectOpt 				=	document.getElementById('selectOpt-'+ i +'-00');
			//console.info(' selectOpt: ',selectOpt);
			emailConf.topic			=	selectOpt.options[selectOpt.selectedIndex].value;

			emailConf.message		=	window.feedback.cnt[n].message;

			emailConf.message		=	emailConf.message 			+
										'<br /><br /><br />'		+
										'<p style="color: grey;">'	+	
										'If you send this request with the media: ' + emailConf.media + ' ' +
										'by mistake, please, send reply letter with subject "Cancel the request". ' +
										'</p>';

		//alert(topic);
		//console.info(' emailConf: ',emailConf);
		
	    $.ajax({
	        type: 			'POST',
	        url: 			'http://userto.com/php/phpGetPost.php',
	        data: {
				optPost:	emailConf.optPost,
				emailTo:	emailConf.emailTo,
				emailFrom:	emailConf.emailFrom,
				emailBCC:	emailConf.emailBCC,
	            topic:		emailConf.topic,				
				message:	emailConf.message
	        },
	        dataType: 'text',
	        success: function(echo){
					$('#feedbackSuccess-' + f).modal()
					//alert(echo);
					//console.info('echo: ',echo);
                }
	    });		
		
		
		
		
		
		return;
	}
	

