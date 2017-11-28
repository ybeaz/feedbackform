
	
		
//Define	Function to setup data for feedback url-form-element-option blocks
	function setFeedbackFormContentF0(f){
			
			window.feedback.host								=	location.host;
			window.feedback.pathname							=	location.pathname;
			
			window.feedback.form[f]								=	{};
			window.feedback.form[f].email						=	[];
			window.feedback.form[f].email[0]					=	{};
			window.feedback.form[f].email[0].optPost			=	'emailTelegramFeedback';
			window.feedback.form[f].email[0].chatId				=	'463530275';
			window.feedback.form[f].email[0].toEmail			=	'';
			window.feedback.form[f].email[0].fromEmail			=	'From: Ags Tax Group <r1@userto.com>\r\n';
			window.feedback.form[f].email[0].BCC				=	't3531350@yahoo.com';
			window.feedback.form[f].email[0].topic				=	'Thank you for the message';
			window.feedback.form[f].email[0].message			=	''	+														
			'Hi,' 				+	'<br />' + '<br />'	+
				'Thank you for your message.'			+ '<br />' +
				'We will answer you as soon as possible.' + '<br />' + '<br />' +
				'Sincerely yours,' 						+ '<br />' +
				'Ags Tax Group Team' 					+ '<br />' +
				'+1 650 7410014' 						+ '<br />' +
				'Skype: rootstem'						+ '<br />' +
													'<br />' +				
													'<br />' +		
													'<br />' +
									'<p style="color: grey;">'	+	
									'If you send this request with the media: ' + 'r1@userto.com' + ' '+
									'by mistake, please, send reply letter with subject "Cancel the request".'	+
									'</p>';


			//Data for 'Name:', [0] form element, input
			window.feedback.form[f].elem						=	[];							
			window.feedback.form[f].elem[0]						=	{};				
			window.feedback.form[f].elem[0].labelInnerHTML		=	'Name';
			window.feedback.form[f].elem[0].labelClass			=	'control-label';			
			window.feedback.form[f].elem[0].tagName				=	'input';
			window.feedback.form[f].elem[0].tagType				=	'text'; //'number';
			window.feedback.form[f].elem[0].tagPlaceholder		=	'John Smith';						
			window.feedback.form[f].elem[0].tagClass			=	'form-control';
			window.feedback.form[f].elem[0].tagTitleTooltip		=	'How can we apply to you?';				
			
			//[0][1] Data for кнопка 'Type of the user:',  form element, select, type: multiple
			window.feedback.form[f].elem[1]						=	{};				
			window.feedback.form[f].elem[1].labelInnerHTML		=	'Telecom type';
			window.feedback.form[f].elem[1].labelClass			=	'control-label';			
			window.feedback.form[f].elem[1].tagName				=	'select';
			window.feedback.form[f].elem[1].tagType				=	'';			
			window.feedback.form[f].elem[1].tagClass			=	'form-control';
			window.feedback.form[f].elem[1].tagRequired			=	'required';			
			window.feedback.form[f].elem[1].tagOption			=	[
					{'optInnerHTML': 'You like'},
					{'optInnerHTML': 'Skype'},
					{'optInnerHTML': 'WhatsApp'},
					{'optInnerHTML': 'Telegram'},
					{'optInnerHTML': 'WeChat'},
					{'optInnerHTML': 'Viber'},
					{'optInnerHTML': 'Email'},
					{'optInnerHTML': 'Phone'}					
				];

			//Data for 'Skype, WhatsApp, Telegram, WeChat, Viber, Email or Phone', [1] form element, input									
			window.feedback.form[f].elem[2]						=	{};				
			window.feedback.form[f].elem[2].labelInnerHTML		=	'Number (login)';
			window.feedback.form[f].elem[2].labelClass			=	'control-label';			
			window.feedback.form[f].elem[2].tagName				=	'input';
			window.feedback.form[f].elem[2].tagRequired			=	'required';
			window.feedback.form[f].elem[2].tagType				=	'text'; //'number';			
			window.feedback.form[f].elem[2].tagClass			=	'form-control';			
			window.feedback.form[f].elem[2].tagPlaceholder		=	'your contacts';

			//Data for 'Сведения и факты, не указанные ранее:', [2] form element, textarea									
			window.feedback.form[f].elem[3]						=	{};				
			window.feedback.form[f].elem[3].labelInnerHTML		=	'Question - commentary';
			window.feedback.form[f].elem[3].labelClass			=	'control-label';			
			window.feedback.form[f].elem[3].tagName				=	'textarea';
			window.feedback.form[f].elem[3].tagClass			=	'w-100 b-r-0p4-em p-a-0p5-em h-10-em';			
			window.feedback.form[f].elem[3].tagRequired			=	'required';
			window.feedback.form[f].elem[3].tagPlaceholder		=	'your message';
			
			//Data for кнопка 'Отправить', [3] form element, button, type: submit-modal
			window.feedback.form[f].elem[4]						=	{};			
			window.feedback.form[f].elem[4].tagName				=	'button';
			window.feedback.form[f].elem[4].tagType				=	'submit-modal';
			window.feedback.form[f].elem[4].tagInnerHTML		=	'Send';
			window.feedback.form[f].elem[4].tagClass			=	'btn btn-success w-8-em';
			window.feedback.form[f].elem[4].modalNum			=	'0';

			//Data for кнопка 'Очистить', [4] form element, button, type: reset
			window.feedback.form[f].elem[5]						=	{};			
			window.feedback.form[f].elem[5].tagName				=	'button';
			window.feedback.form[f].elem[5].tagType				=	'reset';
			window.feedback.form[f].elem[5].tagInnerHTML		=	'Reset';
			window.feedback.form[f].elem[5].tagClass			=	'btn btn-light';
		return;
	}


//Define	Function to setup data for feedback url-form-element-option blocks
	function setFeedbackFormContentF1(f){
			
			window.feedback.host								=	location.host;
			window.feedback.pathname							=	location.pathname;
			
			window.feedback.form[f]								=	{};
			window.feedback.form[f].email						=	[];
			window.feedback.form[f].email[0]					=	{};
			window.feedback.form[f].email[0].optPost			=	'emailTelegramFeedback';
			window.feedback.form[f].email[0].chatId				=	'463530275';
			window.feedback.form[f].email[0].toEmail			=	'';
			window.feedback.form[f].email[0].fromEmail			=	'From: Ags Tax Group <r1@userto.com>\r\n';
			window.feedback.form[f].email[0].BCC				=	't3531350@yahoo.com';
			window.feedback.form[f].email[0].topic				=	'Thank you for the message';
			window.feedback.form[f].email[0].message			=	''	+														
			'Hi,' 				+	'<br />' + '<br />'	+
				'Thank you for your message.'			+ '<br />' +
				'We will answer you as soon as possible.' + '<br />' + '<br />' +
				'Sincerely yours,' 						+ '<br />' +
				'Ags Tax Group Team' 					+ '<br />' +
				'+1 650 7410014' 						+ '<br />' +
				'Skype: rootstem'						+ '<br />' +
													'<br />' +				
													'<br />' +		
													'<br />' +
									'<p style="color: grey;">'	+	
									'If you send this request with the media: ' + 'r1@userto.com' + ' '+
									'by mistake, please, send reply letter with subject "Cancel the request".'	+
									'</p>';

			window.feedback.form[f].elem						=	[];						
									
			//[0][1] Data for кнопка 'Type of the user:',  form element, select, type: multiple
			window.feedback.form[f].elem[0]						=	{};				
			window.feedback.form[f].elem[0].labelInnerHTML		=	'Предмет интереса';
			window.feedback.form[f].elem[0].labelClass			=	'control-label';			
			window.feedback.form[f].elem[0].tagName				=	'select';
			window.feedback.form[f].elem[0].tagType				=	'';			
			window.feedback.form[f].elem[0].tagClass			=	'form-control w-100';
			window.feedback.form[f].elem[0].tagRequired			=	'required';			
			window.feedback.form[f].elem[0].tagOption			=	[
					{'optInnerHTML': 'Организация бизнеса'},
					{'optInnerHTML': 'Патентование в США'},
					{'optInnerHTML': 'Покупка жилья в США'}				
				];			
			
			//[0][1] Data for кнопка 'Type of the user:',  form element, select, type: multiple
			window.feedback.form[f].elem[1]						=	{};				
			window.feedback.form[f].elem[1].labelInnerHTML		=	'Вид связи';
			window.feedback.form[f].elem[1].labelClass			=	'control-label';			
			window.feedback.form[f].elem[1].tagName				=	'select';
			window.feedback.form[f].elem[1].tagType				=	'';			
			window.feedback.form[f].elem[1].tagClass			=	'form-control w-100';
			window.feedback.form[f].elem[1].tagRequired			=	'required';			
			window.feedback.form[f].elem[1].tagOption			=	[
					{'optInnerHTML': 'Я предпочитаю'},
					{'optInnerHTML': 'Skype'},
					{'optInnerHTML': 'WhatsApp'},
					{'optInnerHTML': 'Telegram'},
					{'optInnerHTML': 'WeChat'},
					{'optInnerHTML': 'Viber'},
					{'optInnerHTML': 'Email'},
					{'optInnerHTML': 'Phone'}					
				];

			//Data for 'Skype, WhatsApp, Telegram, WeChat, Viber, Email or Phone', [1] form element, input									
			window.feedback.form[f].elem[2]						=	{};				
			window.feedback.form[f].elem[2].labelInnerHTML		=	'Номер (login)';
			window.feedback.form[f].elem[2].labelClass			=	'control-label';			
			window.feedback.form[f].elem[2].tagName				=	'input';
			window.feedback.form[f].elem[2].tagRequired			=	'required';
			window.feedback.form[f].elem[2].tagType				=	'text'; //'number';			
			window.feedback.form[f].elem[2].tagClass			=	'form-control w-100';
			window.feedback.form[f].elem[2].tagPlaceholder		=	'your contacts';
			
			//Data for кнопка 'Отправить', [3] form element, button, type: submit-modal
			window.feedback.form[f].elem[3]						=	{};			
			window.feedback.form[f].elem[3].tagName				=	'button';
			window.feedback.form[f].elem[3].tagType				=	'submit-modal';
			window.feedback.form[f].elem[3].tagInnerHTML		=	'Send';
			window.feedback.form[f].elem[3].tagClass			=	'btn btn-success w-100';
			window.feedback.form[f].elem[3].modalNum			=	'0';

		return;
	}		

	

//Define	Function to setup data for feedback url-form-element-option blocks
	function setFeedbackFormContentF2(f){
			
			window.feedback.host								=	location.host;
			window.feedback.pathname							=	location.pathname;
			
			window.feedback.form[f]								=	{};
			window.feedback.form[f].email						=	[];
			window.feedback.form[f].email[0]					=	{};
			window.feedback.form[f].email[0].optPost			=	'emailTelegramFeedback';
			window.feedback.form[f].email[0].chatId				=	'463530275';
			window.feedback.form[f].email[0].toEmail			=	'';
			window.feedback.form[f].email[0].fromEmail			=	'From: Ags Tax Group <r1@userto.com>\r\n';
			window.feedback.form[f].email[0].BCC				=	't3531350@yahoo.com';
			window.feedback.form[f].email[0].topic				=	'Thank you for the message';
			window.feedback.form[f].email[0].message			=	''	+														
			'Hi,' 				+	'<br />' + '<br />'	+
				'Thank you for your message.'			+ '<br />' +
				'We will answer you as soon as possible.' + '<br />' + '<br />' +
				'Sincerely yours,' 						+ '<br />' +
				'Ags Tax Group Team' 					+ '<br />' +
				'+1 650 7410014' 						+ '<br />' +
				'Skype: rootstem'						+ '<br />' +
													'<br />' +				
													'<br />' +		
													'<br />' +
									'<p style="color: grey;">'	+	
									'If you send this request with the media: ' + 'r1@userto.com' + ' '+
									'by mistake, please, send reply letter with subject "Cancel the request".'	+
									'</p>';

			window.feedback.form[f].elem						=	[];		
			
			//[0][1] Data for кнопка 'Type of the user:',  form element, select, type: multiple
			window.feedback.form[f].elem[1]						=	{};				
			window.feedback.form[f].elem[1].labelInnerHTML		=	'Вид связи';
			window.feedback.form[f].elem[1].labelClass			=	'control-label';			
			window.feedback.form[f].elem[1].tagName				=	'select';
			window.feedback.form[f].elem[1].tagType				=	'';			
			window.feedback.form[f].elem[1].tagClass			=	'form-control w-100';
			window.feedback.form[f].elem[1].tagRequired			=	'required';			
			window.feedback.form[f].elem[1].tagOption			=	[
					{'optInnerHTML': 'Я предпочитаю'},
					{'optInnerHTML': 'Skype'},
					{'optInnerHTML': 'WhatsApp'},
					{'optInnerHTML': 'Telegram'},
					{'optInnerHTML': 'WeChat'},
					{'optInnerHTML': 'Viber'},
					{'optInnerHTML': 'Email'},
					{'optInnerHTML': 'Phone'}					
				];

			//Data for 'Skype, WhatsApp, Telegram, WeChat, Viber, Email or Phone', [1] form element, input									
			window.feedback.form[f].elem[2]						=	{};				
			window.feedback.form[f].elem[2].labelInnerHTML		=	'Номер (login)';
			window.feedback.form[f].elem[2].labelClass			=	'control-label';			
			window.feedback.form[f].elem[2].tagName				=	'input';
			window.feedback.form[f].elem[2].tagRequired			=	'required';
			window.feedback.form[f].elem[2].tagType				=	'text'; //'number';			
			window.feedback.form[f].elem[2].tagClass			=	'form-control w-100';
			window.feedback.form[f].elem[2].tagPlaceholder		=	'your contacts';
			
			//Data for кнопка 'Отправить', [3] form element, button, type: submit-modal
			window.feedback.form[f].elem[3]						=	{};			
			window.feedback.form[f].elem[3].tagName				=	'button';
			window.feedback.form[f].elem[3].tagType				=	'submit-modal';
			window.feedback.form[f].elem[3].tagInnerHTML		=	'Send';
			window.feedback.form[f].elem[3].tagClass			=	'btn btn-success w-100';
			window.feedback.form[f].elem[3].modalNum			=	'0';

		return;
	}		


//Define	Function to add contacts to a page
	function addFeedbackFormContentF0(elem){
		
		//console.info('You are here');
		
		var elem	=	document.getElementById(elem);
		
		if(	elem){
								
			elem.innerHTML	=	'\
				<div class="container-fluid">\
					<div class="row">\
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">\
							<h4 class="section-heading">You have a question?</h4>\
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
										\
										<!-- feedback url 0 form 0 elem 0 -->\
										<!-- input for name -->\
										<div id="" class="form-group userto-form-0-elem-0"></div>\
									</div>\
								</div>\
								<div class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
										\
										<!-- feedback url 0 form 0 elem 1 -->\
										<!-- Via -->\
										<div id="" class="form-group userto-form-0-elem-1 d-i-b w-30"></div>\
										\
										<!-- feedback url 0 form 0 elem 2 -->\
										<!-- Login-number -->\
										<div id=""	class="form-group userto-form-0-elem-2 d-i-b" \
													style="width: calc(70% - 5px);"></div>\
									</div>\
								</div>\
								<div class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
										\
										<!-- feedback url 0 form 0 elem 3 -->\
										<!-- textarea for message -->\
										<div id="" class="form-group userto-form-0-elem-3"></div>\
									</div>\
								</div>\
								<div class="row">\
									<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">\
										<div class="col-md-offset-1">\
											<!-- feedback url 0 form 0 elem 4 -->\
											<!-- button Send -->\
											<div class="form-group userto-form-0-elem-4 d-i-b"></div>\
											\
											<!-- feedback url 0 form 0 elem 5 -->\
											<!-- button Reset -->\
											<div class="form-group userto-form-0-elem-5 d-i-b p-l-1-em"></div>\
										</div>\
									</div>\
									<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">\
										<div class="col-md-offset-1">\
											* required\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>';				
				//console.info(' contact.innerHTML:',contact.innerHTML);
		}

		
		return;
	}

	
//Define	Function to add contacts to a page
	function addFeedbackFormContentF1(elem){
		
		//console.info('You are here');
		
		var elem	=	document.getElementById(elem);
		
		if(	elem){
								
			elem.innerHTML	=	'\
				<div class="container-fluid">\
					<div class="row">\
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">\
							<div class="container-fluid">\
								<div class="row">\
									<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\
										<!-- Subject of interest -->\
										<div id="" class="form-group userto-form-1-elem-0 d-i-b w-100"></div>\
									</div>\
									<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
										\
										<!-- Via -->\
										<div id="" class="form-group userto-form-1-elem-1 d-i-b w-100"></div>\
									</div>\
									<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">\
										\
										<!-- Login-number -->\
										<div id=""	class="form-group userto-form-1-elem-2 d-i-b w-100"></div>\
									</div>\
									<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 p-t-1p5-em">\
										\
										<!-- button Send -->\
										<div id=""	class="form-group userto-form-1-elem-3 w-100"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>';				
				//console.info(' contact.innerHTML:',contact.innerHTML);
		}

		
		return;
	}	
	

	
//Define	Function to add contacts to a page
	function addFeedbackFormContentF2(elem){
		
		//console.info('You are here');
		
		var elem	=	document.getElementById(elem);
		
		if(	elem){
								
			elem.innerHTML	=	'\
				<div class="container-fluid">\
					<div class="row">\
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">\
							<div class="container-fluid">\
								<div class="row">\
									<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">\
										\
										<!-- Via -->\
										<div id="" class="form-group userto-form-1-elem-1 d-i-b w-100"></div>\
									</div>\
									<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
										\
										<!-- Login-number -->\
										<div id=""	class="form-group userto-form-1-elem-2 d-i-b w-100"></div>\
									</div>\
									<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 p-t-1p5-em">\
										\
										<!-- button Send -->\
										<div id=""	class="form-group userto-form-1-elem-3 w-100"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>';				
				//console.info(' contact.innerHTML:',contact.innerHTML);
		}

		
		return;
	}	
	
	
	
	
//Define	Function to setup a modal window for confirmatin
	function setForm0Modal0(f){	
		
			var parentNode	=	document.body || document.getElementsByTagName('body')[0];	
				
			var nodeInnerHTML	=
				'<!-- The Modal -->\
				<div class="modal fade" id="userto-form-' + f +'-modal-0">\
					<div class="modal-dialog">\
						<div class="modal-content m-t-10-em">\
						<!-- Modal Header -->\
						<div class="modal-header">\
						<div class="h4 d-i-b modal-title">Thank you for the message</div>\
						<button type="button" class="close" data-dismiss="modal">&times;</button>\
						</div>\
						<!-- Modal body -->\
						<div class="modal-body">\
							<p>I will reply as soon as possible</p>\
						</div>\
						<!-- Modal footer -->\
						<div class="modal-footer">\
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\
						</div>\
						</div>\
					</div>\
				</div>';
			
			var node = document.createElement('div');
				node.setAttribute('id','modalContainer-'+f);
				node.className	=	'';
				node.style		=	'';
				node.role		=	'';
				node.innerHTML	=	nodeInnerHTML;
				
				insertAppendNode(parentNode, node, 'append');	
		
		return;

	}

				
//Define	Function to setup a modal window for confirmatin
	function setForm1Modal0(f){	
			
			var nodeInnerHTML	=
				'<!-- The Modal -->\
				<div class="modal fade" id="userto-form-' + f + '-modal-0">\
					<div class="modal-dialog">\
						<div class="modal-content">\
						<!-- Modal Header -->\
						<div class="modal-header">\
						<div class="modal-title h4 d-i-b">To make you a callback, please, specify</div>\
						<button type="button" class="close" data-dismiss="modal">&times;</button>\
						</div>\
						<!-- Modal body -->\
						<div class="modal-body">\
							<div class="container-fluid">\
								<div  class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
										\
										<!-- Name: -->\
										<div id="" class="form-group userto-form-' + f + '-elem-1"></div>\
									</div>\
								</div>\
								<div  class="row">\
									<div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">\
										\
										<!-- You like -->\
										<div id="" class="form-group userto-form-' + f + '-elem-2"></div>\
									</div>\
									<div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">\
										\
										<!-- Number (login) -->\
										<div id="" class="form-group userto-form-' + f + '-elem-3"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
						<!-- Modal footer -->\
						<div class="modal-footer">\
							<div class="container-fluid">\
								<div class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
										\
										<!-- feedback url 0 form f elem 4 -->\
										<!-- Send: -->\
										<div id="" class="form-group userto-form-' + f + '-elem-4 d-i-b "></div>\
										\
										<!-- feedback url 1 form f elem 5 -->\
										<!-- Send: -->\
										<div id="" class="form-group userto-form-' + f + '-elem-5 d-i-b p-l-1-em"></div>\
									</div>\
								</div>\
							</div>\
						</div>\
						</div>\
					</div>\
				</div>';
			
			//var parentNode	=	document.body || document.getElementsByTagName('body')[0];	
			var parentNode	=	document.querySelector('#modalContainer');
			var node = document.createElement('div');
				node.setAttribute('id','UsertoForm1Modal0');
				node.className	=	'';
				node.style		=	'';
				node.role		=	'';
				node.innerHTML	=	nodeInnerHTML;
				
				insertAppendNode(parentNode, node, 'append');	
		
		return;

	}


//Define	Function to setup a modal window for confirmatin
	function setForm1Modal1(f){		
				
			var nodeInnerHTML	=
				'<!-- The Modal -->\
				<div class="modal fade" id="userto-form-' + f + '-modal-1">\
					<div class="modal-dialog">\
						<div class="modal-content">\
						<!-- Modal Header -->\
						<div class="modal-header">\
						<div class="modal-title h4 d-i-b">Thank you for your request</div>\
						<button type="button" class="close" data-dismiss="modal">&times;</button>\
						</div>\
						<!-- Modal body -->\
						<div class="modal-body">\
							<p>I will contact you as soon as possible</p>\
						</div>\
						<!-- Modal footer -->\
						<div class="modal-footer">\
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\
						</div>\
						</div>\
					</div>\
				</div>';
			
			
			var parentNode	=	document.querySelector('#modalContainer');
			//var parentNode	=	document.body || document.getElementsByTagName('body')[0];
			var node = document.createElement('div');
				node.setAttribute('id','UsertoForm1Modal1');
				node.className	=	'';
				node.style		=	'';
				node.role		=	'';
				node.innerHTML	=	nodeInnerHTML;
				
				insertAppendNode(parentNode, node, 'append');	
		
		return;

	}


	
//Run scripts
(function(){	
	
	//Run function to fill feedback form
	setTimeout(function(){
		
		//For footer feedback form
		setFeedbackFormContentF0(0); 
		addFeedbackFormContentF0('contactForm');
		setForm0Modal0(0);
		
		//For callback order feedback form
		setFeedbackFormContentF1(1);
		addFeedbackFormContentF1('makeLead01')
		setForm0Modal0(1);
		
		//For callback order feedback form
		setFeedbackFormContentF2(2);
		addFeedbackFormContentF2('makeLead02')
		setForm0Modal0(2);

		
		window.feedback.setFeedbackForm();

		
		//letsTest('Run scripts step-1', /* testId */ '', /* expect */ [window.feedback.form], /* toEqual */ [] );
		
	}, 250);
})();

		