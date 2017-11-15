

		
//Define	Function to setup data for feedback url-form-element-option blocks
	function setFeedbackFormContent(f){

					
		window.feedback.form[f]								=	{};
		window.feedback.form[f].modalStage					=	0;
		window.feedback.form[f].email						=	[];
		window.feedback.form[f].email[0]					=	{};
		window.feedback.form[f].email[0].optPost			=	'emailTelegramFeedback';
		window.feedback.form[f].email[0].toEmail			=	'';
		window.feedback.form[f].email[0].fromEmail			=	'From: UserTo.com <info@userto.com>\r\n';
		window.feedback.form[f].email[0].BCC				=	't3531350@yahoo.com';
		window.feedback.form[f].email[0].topic				=	'Thank you for your request';
		window.feedback.form[f].email[0].message			=	''	+														
		'Hi,' 				+	'<br />' + '<br />'	+
			'Thank you for your request.'			+ '<br />' +
			'We will came back with new information for you in near future.' + '<br />' + '<br />' +
			'Sincerely yours,' 						+ '<br />' +
			'Team Service UserTo.com' 				+ '<br />' +
			'+1 650 7410014' 						+ '<br />' +
			'Skype: rootstem'						+ '<br />' +
			'http://info.userto.com'					+ '<br />' +
												'<br />' +				
												'<br />' +		
												'<br />' +
								'<p style="color: grey;">'	+	
								'If you send this request with the media: ' + 'r1@userto.com' + ' '+
								'by mistake, please, send reply letter with subject "Cancel the request".'	+
								'</p>';

		
		//[0][0] Data for кнопка 'Отправить', form element, button, type: submit
		window.feedback.form[f].elem						=	[];
		window.feedback.form[f].elem[0]						=	{};			
		window.feedback.form[f].elem[0].tagName				=	'button';
		window.feedback.form[f].elem[0].tagType				=	'modal';
		window.feedback.form[f].elem[0].tagInnerHTML		=	'Sign in';
		window.feedback.form[f].elem[0].tagClass			=	'btn btn-success btn-lg w-18-em';
		window.feedback.form[f].elem[0].tagStyle			=	'';
		window.feedback.form[f].elem[0].modalNum			=	'0';

		//[0][1] Data for кнопка 'Type of the user:',  form element, select, type: multiple
		window.feedback.form[f].elem[1]						=	{};				
		window.feedback.form[f].elem[1].labelInnerHTML		=	'Type of the user:';
		window.feedback.form[f].elem[1].labelClass			=	'control-label';			
		window.feedback.form[f].elem[1].tagName				=	'select';
		window.feedback.form[f].elem[1].tagType				=	'';			
		window.feedback.form[f].elem[1].tagClass			=	'form-control';
		window.feedback.form[f].elem[1].tagSelectMultiple	=	'multiple';
		window.feedback.form[f].elem[1].tagRequired			=	'required';			
		window.feedback.form[f].elem[1].tagOption			=	[
				{'optInnerHTML': 'Service provider'},
				{'optInnerHTML': 'Brand builder'},
				{'optInnerHTML': 'Both right now'},
			];			
		
		//[0][2] Data for кнопка 'Region of business or trafic:', form element, select, type: multiple
		window.feedback.form[f].elem[2]						=	{};				
		window.feedback.form[f].elem[2].labelInnerHTML		=	'Region of business or trafic:';
		window.feedback.form[f].elem[2].labelClass			=	'control-label';			
		window.feedback.form[f].elem[2].tagName				=	'select';
		window.feedback.form[f].elem[2].tagType				=	'';			
		window.feedback.form[f].elem[2].tagClass			=	'form-control';
		window.feedback.form[f].elem[2].tagSelectMultiple	=	'multiple';
		window.feedback.form[f].elem[2].tagRequired			=	'required';
		window.feedback.form[f].elem[2].tagOption			=	[
				{optInnerHTML: 'Africa'},
				{optInnerHTML: 'North America'},
				{optInnerHTML: 'Central America and Caribbean'},
				{optInnerHTML: 'South America'},
				{optInnerHTML: 'Asia'},
				{optInnerHTML: 'Europe'},
				{optInnerHTML: 'NIS and Russia'},
				{optInnerHTML: 'Oceania'},
			];
			
		//[0][1] Data for кнопка 'Type of the user:',  form element, select, type: multiple
		window.feedback.form[f].elem[3]						=	{};				
		window.feedback.form[f].elem[3].labelInnerHTML		=	'Telecom type';
		window.feedback.form[f].elem[3].labelClass			=	'control-label';			
		window.feedback.form[f].elem[3].tagName				=	'select';
		window.feedback.form[f].elem[3].tagType				=	'';			
		window.feedback.form[f].elem[3].tagClass			=	'form-control';
		window.feedback.form[f].elem[3].tagRequired			=	'required';			
		window.feedback.form[f].elem[3].tagOption			=	[
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
		window.feedback.form[f].elem[4]						=	{};				
		window.feedback.form[f].elem[4].labelInnerHTML		=	'Number (login)';
		window.feedback.form[f].elem[4].labelClass			=	'control-label';			
		window.feedback.form[f].elem[4].tagName				=	'input';
		window.feedback.form[f].elem[4].tagRequired			=	'required';
		window.feedback.form[f].elem[4].tagType				=	'text'; //'number';			
		window.feedback.form[f].elem[4].tagClass			=	'form-control';
		window.feedback.form[f].elem[4].tagPlaceholder		=	'your contacts';		
		
		/* */
		//[0][4] Data for кнопка 'Send', form element, button, type: submit-modal
		window.feedback.form[f].elem[5]						=	{};			
		window.feedback.form[f].elem[5].tagName				=	'button';
		window.feedback.form[f].elem[5].tagType				=	'submit-modal';
		window.feedback.form[f].elem[5].tagInnerHTML		=	'Send';
		window.feedback.form[f].elem[5].tagClass			=	'btn btn-success w-18-em';
		window.feedback.form[f].elem[5].tagStyle			=	'';
		window.feedback.form[f].elem[5].modalNum			=	'1';

		//[f][5] Data for кнопка 'Очистить', [5] form element, button, type: reset
		window.feedback.form[f].elem[6]						=	{};			
		window.feedback.form[f].elem[6].tagName				=	'button';
		window.feedback.form[f].elem[6].tagType				=	'reset';
		window.feedback.form[f].elem[6].tagInnerHTML		=	'Reset';
		window.feedback.form[f].elem[6].tagClass			=	'btn btn-light';
		
		return;
	}		

					
//Define	Function to setup a modal window for confirmatin
	function setUsertoForm0Modal0(f){	
			
			var nodeInnerHTML	=
				'<!-- The Modal -->\
				<div class="modal fade" id="userto-form-' + f + '-modal-0">\
					<div class="modal-dialog">\
						<div class="modal-content">\
						<!-- Modal Header -->\
						<div class="modal-header">\
						<div class="modal-title h4 d-i-b">Necessary information to process your request</div>\
						<button type="button" class="close" data-dismiss="modal">&times;</button>\
						</div>\
						<!-- Modal body -->\
						<div class="modal-body">\
							<div class="container-fluid">\
								<div  class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
										\
										<!-- Type of the user: -->\
										<div id="" class="form-group userto-form-' + f + '-elem-1"></div>\
									</div>\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
										\
										<!-- Region of business or trafic: -->\
										<div id="" class="form-group userto-form-' + f + '-elem-2"></div>\
									</div>\
								</div>\
								<div  class="row">\
									<div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">\
										\
										<!-- You like -->\
										<div id="" class="form-group userto-form-' + f + '-elem-3"></div>\
									</div>\
									<div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">\
										\
										<!-- Number (login) -->\
										<div id="" class="form-group userto-form-' + f + '-elem-4"></div>\
									</div>\
								</div>\
							\
						</div>\
						<!-- Modal footer -->\
						<div class="modal-footer">\
							<div class="container-fluid">\
								<div class="row">\
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
										\
										<!-- Send: -->\
										<div id="" class="form-group userto-form-' + f + '-elem-5 d-i-b "></div>\
										\
										<!-- Send: -->\
										<div id="" class="form-group userto-form-' + f + '-elem-6 d-i-b p-l-1-em"></div>\
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
				node.setAttribute('id','UsertoForm0Modal0');
				node.className	=	'';
				node.style		=	'';
				node.role		=	'';
				node.innerHTML	=	nodeInnerHTML;
				
				insertAppendNode(parentNode, node, 'append');	
		
		return;

	}


//Define	Function to setup a modal window for confirmatin
	function setUsertoForm0Modal1(f){		
				
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
							<p>We will reply as soon as possible</p>\
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
				node.setAttribute('id','UsertoForm0Modal1');
				node.className	=	'';
				node.style		=	'';
				node.role		=	'';
				node.innerHTML	=	nodeInnerHTML;
				
				insertAppendNode(parentNode, node, 'append');	
		
		return;

	}


	//Run function to fill feedback form
	setTimeout(function(){
		
		//Contact block adding
		//contactAddingToPages();
		
		setFeedbackFormContent(0); 
		setUsertoForm0Modal0(0);
		setUsertoForm0Modal1(0);
		
		setFeedbackFormContent(1); 
		setUsertoForm0Modal0(1);
		setUsertoForm0Modal1(1);
		
		window.feedback.setFeedbackForm();
		//console.info(' window.feedback:',window.feedback);
		
	}, 100);