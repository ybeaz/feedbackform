
	
		
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
			window.feedback.form[f].email[0].fromEmail			=	'From: Roman Cheskidov <r1@userto.com>\r\n';
			window.feedback.form[f].email[0].BCC				=	't3531350@yahoo.com';
			window.feedback.form[f].email[0].topic				=	'Thank you for the message';
			window.feedback.form[f].email[0].message			=	''	+														
			'Hi,' 				+	'<br />' + '<br />'	+
				'Thank you for your message.'			+ '<br />' +
				'I will answer you as soon as possible.' + '<br />' + '<br />' +
				'Sincerely yours,' 						+ '<br />' +
				'Roman Cheskidov' 						+ '<br />' +
				'+1 650 7410014' 						+ '<br />' +
				'Skype: rootstem'						+ '<br />' +
				'http://r1.userto.com'					+ '<br />' +
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
			window.feedback.form[f].elem[3].tagClass			=	'textAreaInput h-10-em';
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
			window.feedback.form[f].email[0].fromEmail			=	'From: Roman Cheskidov <r1@userto.com>\r\n';
			window.feedback.form[f].email[0].BCC				=	't3531350@yahoo.com';
			window.feedback.form[f].email[0].topic				=	'Thank you for the request';
			window.feedback.form[f].email[0].message			=	''	+														
			'Hi,' 				+	'<br />' + '<br />'	+
				'Thank you for your request message.'			+ '<br />' +
				'I will contact you as soon as possible.' + '<br />' + '<br />' +
				'Sincerely yours,' 						+ '<br />' +
				'Roman Cheskidov' 						+ '<br />' +
				'+1 650 7410014' 						+ '<br />' +
				'Skype: rootstem'						+ '<br />' +
				'http://r1.userto.com'					+ '<br />' +
													'<br />' +				
													'<br />' +		
													'<br />' +
									'<p style="color: grey;">'	+	
									'If you send this request with the media: ' + 'r1@userto.com' + ' '+
									'by mistake, please, send reply letter with subject "Cancel the request".'	+
									'</p>';

			window.feedback.form[f].elem						=	[];						
									
			//Data for кнопка 'Отправить', [3] form element, button, type: submit-modal	
			window.feedback.form[f].elem[0]						=	{};			
			window.feedback.form[f].elem[0].tagName				=	'a';
			window.feedback.form[f].elem[0].tagType				=	'modal';
			window.feedback.form[f].elem[0].tagInnerHTML		=	'Ask for callback';
			window.feedback.form[f].elem[0].tagClass			=	'c-p-Blue-Grey-500';
			window.feedback.form[f].elem[0].modalNum			=	'0';						

			//Data for 'Name:', [0] form element, input						
			window.feedback.form[f].elem[1]						=	{};				
			window.feedback.form[f].elem[1].labelInnerHTML		=	'Your name';
			window.feedback.form[f].elem[1].labelClass			=	'control-label';			
			window.feedback.form[f].elem[1].tagName				=	'input';
			window.feedback.form[f].elem[1].tagType				=	'text'; //'number';
			window.feedback.form[f].elem[1].tagPlaceholder		=	'John Smith';						
			window.feedback.form[f].elem[1].tagClass			=	'form-control';
			window.feedback.form[f].elem[1].tagTitleTooltip		=	'How can we apply to you?';				
			
			//[0][1] Data for кнопка 'Type of the user:',  form element, select, type: multiple
			window.feedback.form[f].elem[2]						=	{};				
			window.feedback.form[f].elem[2].labelInnerHTML		=	'Telecom type';
			window.feedback.form[f].elem[2].labelClass			=	'control-label';			
			window.feedback.form[f].elem[2].tagName				=	'select';
			window.feedback.form[f].elem[2].tagType				=	'';			
			window.feedback.form[f].elem[2].tagClass			=	'form-control';
			window.feedback.form[f].elem[2].tagRequired			=	'required';			
			window.feedback.form[f].elem[2].tagOption			=	[
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
			window.feedback.form[f].elem[3]						=	{};				
			window.feedback.form[f].elem[3].labelInnerHTML		=	'Number (login)';
			window.feedback.form[f].elem[3].labelClass			=	'control-label';			
			window.feedback.form[f].elem[3].tagName				=	'input';
			window.feedback.form[f].elem[3].tagRequired			=	'required';
			window.feedback.form[f].elem[3].tagType				=	'text'; //'number';			
			window.feedback.form[f].elem[3].tagClass			=	'form-control';
			window.feedback.form[f].elem[3].tagPlaceholder		=	'your contacts';
			
			//Data for кнопка 'Отправить', [3] form element, button, type: submit-modal
			window.feedback.form[f].elem[4]						=	{};			
			window.feedback.form[f].elem[4].tagName				=	'button';
			window.feedback.form[f].elem[4].tagType				=	'submit-modal';
			window.feedback.form[f].elem[4].tagInnerHTML		=	'Send';
			window.feedback.form[f].elem[4].tagClass			=	'btn btn-success w-8-em';
			window.feedback.form[f].elem[4].modalNum			=	'1';

			//Data for кнопка 'Очистить', [4] form element, button, type: reset
			window.feedback.form[f].elem[5]						=	{};			
			window.feedback.form[f].elem[5].tagName				=	'button';
			window.feedback.form[f].elem[5].tagType				=	'reset';
			window.feedback.form[f].elem[5].tagInnerHTML		=	'Reset';
			window.feedback.form[f].elem[5].tagClass			=	'btn btn-light';
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
			window.feedback.form[f].email[0].fromEmail			=	'From: Roman Cheskidov <r1@userto.com>\r\n';
			window.feedback.form[f].email[0].BCC				=	't3531350@yahoo.com';
			window.feedback.form[f].email[0].topic				=	'Thank you for the message';
			window.feedback.form[f].email[0].message			=	''	+														
			'Hi,' 				+	'<br />' + '<br />'	+
				'Thank you for your message.'			+ '<br />' +
				'We will contact with you as soon as possible.' + '<br />' + '<br />' +
				'Sincerely yours,' 						+ '<br />' +
				'Roman Cheskidov' 						+ '<br />' +
				'+1 650 7410014' 						+ '<br />' +
				'Skype: rootstem'						+ '<br />' +
				'http://r1.userto.com'					+ '<br />' +
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
			window.feedback.form[f].elem[3].tagClass			=	'textAreaInput h-10-em';
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
	function setFeedbackFormContentF3(f){
			
			window.feedback.host								=	location.host;
			window.feedback.pathname							=	location.pathname;
			
			window.feedback.form[f]								=	{};
			window.feedback.form[f].email						=	[];
			window.feedback.form[f].email[0]					=	{};
			window.feedback.form[f].email[0].optPost			=	'emailTelegramFeedback';
			window.feedback.form[f].email[0].chatId				=	'463530275';
			window.feedback.form[f].email[0].toEmail			=	'';
			window.feedback.form[f].email[0].fromEmail			=	'From: Roman Cheskidov <r1@userto.com>\r\n';
			window.feedback.form[f].email[0].BCC				=	't3531350@yahoo.com';
			window.feedback.form[f].email[0].topic				=	'Thank you for the message';
			window.feedback.form[f].email[0].message			=	''	+														
			'Hi,' 				+	'<br />' + '<br />'	+
				'Thank you for your message.'			+ '<br />' +
				'We will contact with you as soon as possible.' + '<br />' + '<br />' +
				'Sincerely yours,' 						+ '<br />' +
				'Roman Cheskidov' 						+ '<br />' +
				'+1 650 7410014' 						+ '<br />' +
				'Skype: rootstem'						+ '<br />' +
				'http://r1.userto.com'					+ '<br />' +
													'<br />' +				
													'<br />' +		
													'<br />' +
									'<p style="color: grey;">'	+	
									'If you send this request with the media: ' + 'r1@userto.com' + ' '+
									'by mistake, please, send reply letter with subject "Cancel the request".'	+
									'</p>';			

			//Data for 			
			window.feedback.form[f].elem	= [
				{	id					:	0,
					nameInternal		:	'Supersystem-select',
					labelInnerHTML		:	'type',
					labelClass			:	'control-label',
					tagName				:	'select',
					tagType				:	'',
					tagClass			:	'form-control',
					tagRequired			:	'',
					tagOption			:	[
							{'optInnerHTML'	: 'Area'},
							{'optInnerHTML'	: 'Mechanical'},
							{'optInnerHTML'	: 'Biological'},
							{'optInnerHTML'	: 'Chemical'},
							{'optInnerHTML'	: 'Mathematical'},
							{'optInnerHTML'	: 'Social'},
							{'optInnerHTML'	: 'Economical'}]
				},			
				{	id					:	1,
					nameInternal		:	'Supersystem-name',
					labelInnerHTML		:	'name',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'text',
					tagClass			:	'form-control',
					tagStyle			:	'height: 2.5em;',
					tagRequired			:	'',
					tagPlaceholder		:	'Assign a name'
				},
				{	id					:	2,
					nameInternal		:	'Supersystem-description',
					labelInnerHTML		:	'description',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'',
					tagClass			:	'form-control  w-22-em h-4-em',
					tagStyle			:	'',
					tagRequired			:	'',
					tagPlaceholder		:	'Space for a description'
				},
				{	id					:	3,
					nameInternal		:	'System-select',
					labelInnerHTML		:	'type',
					labelClass			:	'control-label',
					tagName				:	'select',
					tagType				:	'',
					tagClass			:	'form-control',
					tagRequired			:	'',
					tagOption			:	[
							{'optInnerHTML'	: 'Area'},
							{'optInnerHTML'	: 'Mechanical'},
							{'optInnerHTML'	: 'Biological'},
							{'optInnerHTML'	: 'Chemical'},
							{'optInnerHTML'	: 'Mathematical'},
							{'optInnerHTML'	: 'Social'},
							{'optInnerHTML'	: 'Economical'}]
				},			
				{	id					:	4,
					nameInternal		:	'System-name',
					labelInnerHTML		:	'name',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'text',
					tagClass			:	'form-control',
					tagStyle			:	'height: 2.5em;',
					tagRequired			:	'',
					tagPlaceholder		:	'Assign a name'
				},
				{	id					:	5,
					nameInternal		:	'System-description',
					labelInnerHTML		:	'description',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'',
					tagClass			:	'form-control  w-22-em h-4-em',
					tagStyle			:	'',
					tagRequired			:	'',
					tagPlaceholder		:	'Space for a description'
				},
				{	id					:	6,
					nameInternal		:	'Siblin-select',
					labelInnerHTML		:	'type',
					labelClass			:	'control-label',
					tagName				:	'select',
					tagType				:	'',
					tagClass			:	'form-control',
					tagStyle			:	'',
					tagRequired			:	'',
					tagOption			:	[
							{'optInnerHTML'	: 'Area'},
							{'optInnerHTML'	: 'Mechanical'},
							{'optInnerHTML'	: 'Biological'},
							{'optInnerHTML'	: 'Chemical'},
							{'optInnerHTML'	: 'Mathematical'},
							{'optInnerHTML'	: 'Social'},
							{'optInnerHTML'	: 'Economical'}]
				},			
				{	id					:	7,
					nameInternal		:	'Siblin-name',
					labelInnerHTML		:	'name',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'text',
					tagClass			:	'form-control',
					tagStyle			:	'height: 2.5em;',
					tagRequired			:	'',
					tagPlaceholder		:	'Assign a name'
				},
				{	id					:	8,
					nameInternal		:	'Siblin-description',
					labelInnerHTML		:	'description',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'',
					tagClass			:	'form-control w-18-em h-4-em',
					tagStyle			:	'',
					tagRequired			:	'',
					tagPlaceholder		:	'Space for a description'
				},
				{	id					:	9,
					nameInternal		:	'Subsystem-select',
					labelInnerHTML		:	'type',
					labelClass			:	'control-label',
					tagName				:	'select',
					tagType				:	'',
					tagClass			:	'form-control',
					tagRequired			:	'',
					tagOption			:	[
							{'optInnerHTML'	: 'Area'},
							{'optInnerHTML'	: 'Mechanical'},
							{'optInnerHTML'	: 'Biological'},
							{'optInnerHTML'	: 'Chemical'},
							{'optInnerHTML'	: 'Mathematical'},
							{'optInnerHTML'	: 'Social'},
							{'optInnerHTML'	: 'Economical'}]
				},			
				{	id					:	10,
					nameInternal		:	'Subsystem-name',
					labelInnerHTML		:	'name',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'text',
					tagClass			:	'form-control',
					tagStyle			:	'height: 2.5em;',
					tagRequired			:	'',
					tagPlaceholder		:	'Assign a name'
				},
				{	id					:	11,
					nameInternal		:	'Subsystem-description',
					labelInnerHTML		:	'description',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'',
					tagClass			:	'form-control w-22-em h-4-em',
					tagStyle			:	'',
					tagRequired			:	'',
					tagPlaceholder		:	'Space for a description'
				},
				{	id					:	12,
					nameInternal		:	'Interaction System-Supersystem polarity',
					labelInnerHTML		:	'type',
					labelClass			:	'control-label',
					tagName				:	'select',
					tagType				:	'',
					tagClass			:	'form-control',
					tagRequired			:	'',
					tagOption			:	[
							{'optInnerHTML'	: 'Polarity'},					
							{'optInnerHTML'	: 'Negative'},
							{'optInnerHTML'	: 'Neutral'},
							{'optInnerHTML'	: 'Positive'}]
				},			
				{	id					:	13,
					nameInternal		:	'Interaction System-Supersystem direction',
					labelInnerHTML		:	'type',
					labelClass			:	'control-label',
					tagName				:	'select',
					tagType				:	'',
					tagClass			:	'form-control',
					tagRequired			:	'',
					tagOption			:	[
							{'optInnerHTML'	: 'Direction'},
							{'optInnerHTML'	: 'To system'},
							{'optInnerHTML'	: 'From system'}]
				},
				{	id					:	14,
					nameInternal		:	'Interaction System-Supersystem description',
					labelInnerHTML		:	'description',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'',
					tagClass			:	'form-control w-22-em h-4-em',
					tagStyle			:	'',
					tagRequired			:	'',
					tagPlaceholder		:	'Space for a description'
				},
				{	id					:	15,
					nameInternal		:	'Interaction System-Siblin polarity',
					labelInnerHTML		:	'type',
					labelClass			:	'control-label',
					tagName				:	'select',
					tagType				:	'',
					tagClass			:	'form-control',
					tagRequired			:	'',
					tagOption			:	[
							{'optInnerHTML'	: 'Polarity'},					
							{'optInnerHTML'	: 'Negative'},
							{'optInnerHTML'	: 'Neutral'},
							{'optInnerHTML'	: 'Positive'}]
				},			
				{	id					:	16,
					nameInternal		:	'Interaction System-Siblin direction',
					labelInnerHTML		:	'type',
					labelClass			:	'control-label',
					tagName				:	'select',
					tagType				:	'',
					tagClass			:	'form-control',
					tagRequired			:	'',
					tagOption			:	[
							{'optInnerHTML'	: 'Direction'},
							{'optInnerHTML'	: 'To system'},
							{'optInnerHTML'	: 'From system'}]
				},
				{	id					:	17,
					nameInternal		:	'Interaction System-Siblin description',
					labelInnerHTML		:	'description',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'',
					tagClass			:	'form-control w-22-em h-4-em',
					tagStyle			:	'',
					tagRequired			:	'',
					tagPlaceholder		:	'Space for a description'
				},
				{	id					:	18,
					nameInternal		:	'Interaction System-Subsystem polarity',
					labelInnerHTML		:	'type',
					labelClass			:	'control-label',
					tagName				:	'select',
					tagType				:	'',
					tagClass			:	'form-control',
					tagRequired			:	'',
					tagOption			:	[
							{'optInnerHTML'	: 'Polarity'},					
							{'optInnerHTML'	: 'Negative'},
							{'optInnerHTML'	: 'Neutral'},
							{'optInnerHTML'	: 'Positive'}]
				},			
				{	id					:	19,
					nameInternal		:	'Interaction System-Subsystem direction',
					labelInnerHTML		:	'type',
					labelClass			:	'control-label',
					tagName				:	'select',
					tagType				:	'',
					tagClass			:	'form-control',
					tagRequired			:	'',
					tagOption			:	[
							{'optInnerHTML'	: 'Direction'},
							{'optInnerHTML'	: 'To system'},
							{'optInnerHTML'	: 'From system'}]
				},
				{	id					:	20,
					nameInternal		:	'Interaction System-Subsystem description',
					labelInnerHTML		:	'description',
					labelClass			:	'control-label',
					tagName				:	'textarea',
					tagType				:	'',
					tagClass			:	'form-control w-22-em h-4-em',
					tagStyle			:	'',
					tagRequired			:	'',
					tagPlaceholder		:	'Space for a description'
				},
				{	id					:	21,
					nameInternal		:	'Button submit',
					tagName				:	'button',
					tagType				:	'submit-modal',
					tagInnerHTML		:	'Send',
					tagClass			:	'btn btn-success btn-lg w-10-em',
					tagStyle			:	'',
					modalNum			:	'0'
				},
				{	id					:	22,
					nameInternal		:	'Button reset',
					tagName				:	'button',
					tagType				:	'reset',
					tagInnerHTML		:	'Reset',
					tagClass			:	'btn btn-light btn-lg',
					tagStyle			:	''
				}
			];


		/*	
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
		*/
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
											<i class="fa fa-phone fa-2x sr-contact" data-toggle="tooltip" title="Phone"></i>&nbsp;\
											<i class="fa fa-phone-square fa-2x sr-contact" data-toggle="tooltip" title="Viber"></i>&nbsp;\
											<i class="fa fa-telegram fa-2x sr-contact" data-toggle="tooltip" title="Telegram"></i>&nbsp;\
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
													<div id="" class="form-group userto-form-0-elem-2 d-i-b w-65"></div>\
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
							</div>\
						</div>\
						<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center"></div>\
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
				<div class="modal fade" id="userto-form-0-modal-0">\
					<div class="modal-dialog">\
						<div class="modal-content">\
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
				node.setAttribute('id','modalContainer');
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

	
//Define	Function to setup a modal window for confirmatin
	function setForm3Modal0(f){	
		
			var parentNode	=	document.body || document.getElementsByTagName('body')[0];	
				
			var nodeInnerHTML	=
				'<!-- The Modal -->\
				<div class="modal fade" id="userto-form-3-modal-0">\
					<div class="modal-dialog">\
						<div class="modal-content">\
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
				node.setAttribute('id','modalContainer');
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
		
		//For callback order feedback form
		setFeedbackFormContentF1(1);
		
		//For demo feedback form
		setFeedbackFormContentF2(2);

		//For Triz Language Forms prototype
		setFeedbackFormContentF3(3);

		
		//Contact block adding
		contactAddingToPages();
		setForm0Modal0(0);
		
		setForm1Modal0(1);
		setForm1Modal1(1);

		setForm3Modal0(3);
		
		window.feedback.setFeedbackForm();

		
		//letsTest('Run scripts step-1', /* testId */ '', /* expect */ [window.feedback.form], /* toEqual */ [] );
		
	}, 250);
})();

		