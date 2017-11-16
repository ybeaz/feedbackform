
					
//Define	Function to setup data for feedback url-form-element-option blocks
	function setFeedbackFormContent(){
			
			window.feedback.host								=	location.host;
			window.feedback.pathname							=	location.pathname;
			
			window.feedback.form								=	[];
			window.feedback.form[0]								=	{};
			window.feedback.form[0].email						=	[];
			window.feedback.form[0].email[0]					=	{};
			window.feedback.form[0].email[0].optPost			=	'emailTelegramFeedback';
			window.feedback.form[0].email[0].chatId				=	'463530275';
			window.feedback.form[0].email[0].toEmail			=	'';
			window.feedback.form[0].email[0].fromEmail			=	'From: Premier Expert <akruglov2000@gmail.com>\r\n';
			window.feedback.form[0].email[0].BCC				=	'akruglov2000@gmail.com';
			window.feedback.form[0].email[0].topic				=	'Форма по green card отправлена';
			window.feedback.form[0].email[0].message			=	''	+														
			'Уважаемый пользователь,' 				+	'<br />' + '<br />'	+
				'Спасибо, что заполнили анкету, см. информацию после письма.'			+ '<br />' +
				'Мы направим Вам ответ после обработки Ваших данных в ближайшее время.' + '<br />' + '<br />' +
				'С уважением,' 						+ '<br />' +
				'Александр Круглов' 				+ '<br />' +
				'Представитель в РФ' 				+ '<br />' +
				'Премьер Эксперт Сервис'			+ '<br />' +
				'Leadership Research Center'		+ '<br />' +
				'1007 Lancaster Drive'				+ '<br />' +
				'Floor 2'							+ '<br />' +
				'Bushkill, PA 18324'				+ '<br />' +
													'<br />' +				
													'<br />' +		
													'<br />' +
									'<p style="color: grey;">'	+	
									'If you send this request with the media: ' + 'akruglov2000@gmail.com' + ' '+
									'by mistake, please, send reply letter with subject "Cancel the request".'	+
									'</p>';

			//Data for 'Ваш год рождения:', [0] form element, single select
			window.feedback.form[0].elem						=	[];			
			window.feedback.form[0].elem[0]						=	{};
			window.feedback.form[0].elem[0].label				=	{};
			
			InnerHTML		=	'Ваш год рождения:';
			window.feedback.form[0].elem[0].labelClass			=	'control-label';			
			window.feedback.form[0].elem[0].tagName				=	'select';
			window.feedback.form[0].elem[0].tagClass			=	'form-control';
			window.feedback.form[0].elem[0].tagOption			=	[];
				//We fill options with the cycle loop
				for(var o = 1940; o < 2011; o++){
					window.feedback.form[0].elem[0].tagOption[o - 1940]	=	{};
					window.feedback.form[0].elem[0].tagOption[o - 1940].optInnerHTML		=	o.toString();
					if(o == 1990){
						window.feedback.form[0].elem[0].tagOption[o - 1940].selected		=	'selected';
					}
				}
			
			//Data for 'Наивысший уровень полученного образования:', [1] form element, single select
			window.feedback.form[0].elem[1]						=	{};				
			window.feedback.form[0].elem[1].labelInnerHTML		=	'Наивысший уровень полученного образования:';
			window.feedback.form[0].elem[1].labelClass			=	'control-label';			
			window.feedback.form[0].elem[1].tagName				=	'select';
			window.feedback.form[0].elem[1].tagType				=	'';			
			window.feedback.form[0].elem[1].tagClass			=	'form-control';
			window.feedback.form[0].elem[1].tagPlaceholder		=	'';						
			window.feedback.form[0].elem[1].tagOption			=	[
					{optInnerHTML: 'школа'},
					{optInnerHTML:'профессионально-техническое'},
					{optInnerHTML:'высшее бакалавр'},
					{optInnerHTML:'высшее 5 лет'},
					{optInnerHTML:'высшее магистр'},
					{optInnerHTML:'ученая степень кандидата наук'},
					{optInnerHTML:'ученая степень доктор наук'},
				];

			//Data for 'Повышение квалификации (сертификаты, дипломы, грамоты и т.д.):', [2] form element, single select
			window.feedback.form[0].elem[2]						=	{};				
			window.feedback.form[0].elem[2].labelInnerHTML		=	'Повышение квалификации (сертификаты, дипломы, грамоты и т.д.):';
			window.feedback.form[0].elem[2].labelClass			=	'control-label';			
			window.feedback.form[0].elem[2].tagName				=	'select';
			window.feedback.form[0].elem[2].tagType				=	'';			
			window.feedback.form[0].elem[2].tagClass			=	'form-control';
			window.feedback.form[0].elem[2].tagPlaceholder		=	'';						
			window.feedback.form[0].elem[2].tagOption			=	[						
					{optInnerHTML: 'нет'},
					{optInnerHTML: 'один за последние пять лет'},
					{optInnerHTML: 'от одного до трех за последние пять лет'},
					{optInnerHTML: 'пять и более за последние пять лет'},
				];														
											
			//Data for 'Количество лет работы в качестве руководителя:', [3] form element, single select
			window.feedback.form[0].elem[3]						=	{};				
			window.feedback.form[0].elem[3].labelInnerHTML		=	'Количество лет работы в качестве руководителя:';
			window.feedback.form[0].elem[3].labelClass			=	'control-label';			
			window.feedback.form[0].elem[3].tagName				=	'select';
			window.feedback.form[0].elem[3].tagType				=	'';			
			window.feedback.form[0].elem[3].tagClass			=	'form-control';
			window.feedback.form[0].elem[3].tagPlaceholder		=	'';						
			window.feedback.form[0].elem[3].tagOption			=	[						
					{optInnerHTML: 'нет'},
					{optInnerHTML: 'от 1-го до 3-х лет'},
					{optInnerHTML: 'от 3-х до 7-ми лет'},
					{optInnerHTML: 'более 7-ми лет'},
				];														
			
			//Data for 'Публичная научно-инновационная активность:', [4] form element, multiple select
			window.feedback.form[0].elem[4]						=	{};
			window.feedback.form[0].elem[4].labelInnerHTML		=	'Публичная научно-инновационная активность: *';	
			window.feedback.form[0].elem[4].labelClass			=	'control-label';
			window.feedback.form[0].elem[4].tagName				=	'select';
			window.feedback.form[0].elem[4].footerInnerHTML		=	'* отметить несколько с помощью клавиши Ctrl';
			window.feedback.form[0].elem[4].tagClass			=	'form-control';
			window.feedback.form[0].elem[4].tagSelectMultiple	=	'multiple';
			window.feedback.form[0].elem[4].tagOption			=	[
					{optInnerHTML: 'нет'},
					{optInnerHTML: 'Есть публикации в российских журналах'},
					{optInnerHTML: 'Есть публикации в зарубежных журналах'},
					{optInnerHTML: 'Есть совместные публикации с зарубежными учеными'},
					{optInnerHTML: 'Есть заявки на патенты или международные приоритеты (WIPO)'},
					{optInnerHTML: 'Есть выигранные гранты'},
					{optInnerHTML: 'Есть совместные проекты с зарубежными учеными'},
				];			

			//Data for 'Наличие контактов с людьми и фирмами из США:', [5] form element, multiple select
			window.feedback.form[0].elem[5]						=	{};
			window.feedback.form[0].elem[5].labelInnerHTML		=	'Наличие контактов с людьми и фирмами из США: *';	
			window.feedback.form[0].elem[5].labelClass			=	'control-label';
			window.feedback.form[0].elem[5].tagName				=	'select';
			window.feedback.form[0].elem[5].footerInnerHTML		=	'* отметить несколько с помощью клавиши Ctrl';
			window.feedback.form[0].elem[5].tagClass			=	'form-control';
			window.feedback.form[0].elem[5].tagSelectMultiple	=	'multiple';
			window.feedback.form[0].elem[5].tagOption			=	[						
					{optInnerHTML: 'нет'},
					{optInnerHTML: 'наличие родственников, проживающих в США'},
					{optInnerHTML: 'наличие профессиональных контактов в США'},
					{optInnerHTML: 'наличие бизнес партнеров в США'},
					{optInnerHTML: 'участие в капитале фирм США'},
					{optInnerHTML: 'наличие собственности в США'},
					{optInnerHTML: 'наличие кредитной истории в банках США'}
				];															
												
			//Data for 'Сведения и факты, не указанные ранее:', [6] form element, textarea									
			window.feedback.form[0].elem[6]						=	{};				
			window.feedback.form[0].elem[6].labelInnerHTML		=	'Сведения и факты, не указанные ранее:';
			window.feedback.form[0].elem[6].labelClass			=	'control-label';			
			window.feedback.form[0].elem[6].tagName				=	'textarea';
			window.feedback.form[0].elem[6].tagClass			=	'textAreaInput';															
												
			//Data for 'Телефон:', [7] form element, input									
			window.feedback.form[0].elem[7]						=	{};				
			window.feedback.form[0].elem[7].labelInnerHTML		=	'Телефон:';
			window.feedback.form[0].elem[7].labelClass			=	'control-label';			
			window.feedback.form[0].elem[7].tagName				=	'input';
			window.feedback.form[0].elem[7].tagType				=	'tel'; //'number';			
			window.feedback.form[0].elem[7].tagClass			=	'form-control';
			window.feedback.form[0].elem[7].tagPlaceholder		=	'+7 и цифры';
			
			//Data for 'Наличие контактов с людьми и фирмами из США:', [8] form element, single select
			window.feedback.form[0].elem[8]						=	{};
			window.feedback.form[0].elem[8].labelInnerHTML		=	'Наличие контактов с людьми и фирмами из США: *';	
			window.feedback.form[0].elem[8].labelClass			=	'control-label';
			window.feedback.form[0].elem[8].tagName				=	'select';
			window.feedback.form[0].elem[8].footerInnerHTML		=	'';
			window.feedback.form[0].elem[8].tagClass			=	'form-control';
			window.feedback.form[0].elem[8].tagSelectMultiple	=	'';
			window.feedback.form[0].elem[8].tagOption			=	[						
					{optInnerHTML: 'нет'},
					{optInnerHTML: 'наличие родственников, проживающих в США'},
					{optInnerHTML: 'наличие профессиональных контактов в США'},
					{optInnerHTML: 'наличие бизнес партнеров в США'},
					{optInnerHTML: 'участие в капитале фирм США'},
					{optInnerHTML: 'наличие собственности в США'},
					{optInnerHTML: 'наличие кредитной истории в банках США'}
				];						


			//Data for 'Данные о поездках за рубеж:', [9] form element, multiple select
			window.feedback.form[0].elem[9]						=	{};
			window.feedback.form[0].elem[9].labelInnerHTML		=	'Данные о поездках за рубеж: *';	
			window.feedback.form[0].elem[9].labelClass			=	'control-label';
			window.feedback.form[0].elem[9].tagName				=	'select';
			window.feedback.form[0].elem[9].footerInnerHTML		=	'* отметить несколько с помощью клавиши Ctrl';
			window.feedback.form[0].elem[9].tagClass			=	'form-control';
			window.feedback.form[0].elem[9].tagSelectMultiple	=	'multiple';
			window.feedback.form[0].elem[9].tagOption			=	[
					{optInnerHTML: 'нет'},
					{optInnerHTML: 'бывали (или/и) в Турции, Египте, Таиланде, Чехии'},
					{optInnerHTML: 'бывали (или/и) во Франции, Италии, Греции'},
					{optInnerHTML: 'бывали (или/и) в США, Великобритании, Канаде, Австралии'},
				];
				
			//Data for 'Email:', [10] form element, input									
			window.feedback.form[0].elem[10]					=	{};				
			window.feedback.form[0].elem[10].labelInnerHTML		=	'Email:';
			window.feedback.form[0].elem[10].labelClass			=	'control-label';			
			window.feedback.form[0].elem[10].tagName			=	'input';
			window.feedback.form[0].elem[10].tagType			=	'email'; //'number';			
			window.feedback.form[0].elem[10].tagClass			=	'form-control';
			window.feedback.form[0].elem[10].tagPlaceholder		=	'Ваш эл. адрес';						

			
			//Data for кнопка 'Отправить', [11] form element, button, type: submit
			window.feedback.form[0].elem[11]					=	{};			
			window.feedback.form[0].elem[11].tagName			=	'button';
			window.feedback.form[0].elem[11].tagType			=	'submit-modal';
			window.feedback.form[0].elem[11].tagInnerHTML		=	'Отправить';
			window.feedback.form[0].elem[11].tagClass			=	'btn btn-success';
			window.feedback.form[0].elem[11].modalNum			=	'0';
			
			//Data for кнопка 'Очистить', [12] form element, button, type: reset
			window.feedback.form[0].elem[12]					=	{};			
			window.feedback.form[0].elem[12].tagName			=	'button';
			window.feedback.form[0].elem[12].tagType			=	'reset';
			window.feedback.form[0].elem[12].tagInnerHTML		=	'Очистить';
			window.feedback.form[0].elem[12].tagClass			=	'btn btn-light';						
			
			
			/* Form for modal window email */
			window.feedback.form[1]								=	{};
			window.feedback.form[1].modalHeaderConf				=	'<h4 class="modal-title text-info">Спасибо за интерес.</h4>';
			window.feedback.form[1].modalTextConf				=	'<p>Сейчас информация в обработке.<br />Ответ будет направлен Вам в ближайшее время.</p>';						
			window.feedback.form[1].email						=	[];
			window.feedback.form[1].email[0]					=	{};
			window.feedback.form[1].email[0].optPost			=	'emailTelegramFeedback';
			window.feedback.form[1].email[0].toEmail			=	'';
			window.feedback.form[1].email[0].fromEmail			=	'From: Premier Expert <akruglov2000@gmail.com>\r\n';
			window.feedback.form[1].email[0].BCC				=	'akruglov2000@gmail.com';
			window.feedback.form[1].email[0].topic				=	'Обратная связь получена';
			window.feedback.form[1].email[0].message			=	''	+														
			'Уважаемый пользователь,' 				+	'<br />' + '<br />'	+
				'Спасибо, что отправили обратную связь - запрос, см. информацию после письма.'		+ '<br />' +
				'Мы направим Вам ответ после обработки Ваших данных в ближайшее время.' + '<br />' + '<br />' +
				'С уважением,' 						+ '<br />' +
				'Александр Круглов' 				+ '<br />' +
				'Представитель в РФ' 				+ '<br />' +
				'Премьер Эксперт Сервис'			+ '<br />' +
				'Leadership Research Center'		+ '<br />' +
				'1007 Lancaster Drive'				+ '<br />' +
				'Floor 2'							+ '<br />' +
				'Bushkill, PA 18324'				+ '<br />' +
													'<br />' +				
													'<br />' +		
													'<br />' +
									'<p style="color: grey;">'	+	
									'If you send this request with the media: ' + 'akruglov2000@gmail.com' + ' '+
									'by mistake, please, send reply letter with subject "Cancel the request".'	+
									'</p>';

		return;
	}		


//Run scripts
	(function(){	
		
		//Run function to fill feedback form
		setTimeout(function(){
			
			setFeedbackFormContent(); 
			window.feedback.setFeedbackForm();
			
		}, 250);
	})();

