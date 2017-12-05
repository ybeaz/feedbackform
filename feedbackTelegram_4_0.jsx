/*
	State   
		
	
	
	Action
		CREATED_FORM
		ADDED_CAPTURE
		CLEANED_FORM
		SENT_MESSAGE
*/

global.jQuery = require('jquery');
const bootstrap = require('bootstrap');
//global.jQuery = global.$ = require('jquery')(window);

const 	{ createStore } 	= require('redux');		//import { createStore }		from 'redux';
const 	{combineReducers} 	= require('redux');		//import {combineReducers}	from 'redux';
var deepFreeze = require('deep-freeze');			//import deepFreeze			from 'deep-freeze';	

// Import my own testing tool
const letsTest = require('C:/Data/Dev/LetsTest/letsTest.jsx');		//import letsTest from 'C:/Data/Dev/LetsTest/letsTest.jsx';

	
	
//Checking if var is empty, see http://javascript.ru/php/empty 
	const empty = ( mixed_var ) => {	// Determine whether a variable is empty
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
	function emptyObj (obj){

		if( typeof	obj === 'undefined'	||
					obj === undefined	||
					obj === ''			||
					obj === null		||
					obj === false		||
		   (typeof obj === 'array' && obj.length === 0 )){
			return true;
		}
		else{
			for(var prop in obj) {
				if(obj.hasOwnProperty(prop))
					return false;
			}
			return JSON.stringify(obj) === JSON.stringify({});
		}
	}

	
//Redux very basic example and JS pure equivalent 
(() => {
	const counterTemp = (storeTemp = 0, action) => {
		switch(action.type){
			case 'INCREMENT' :	return storeTemp +1;
			case 'DECREMENT' :	return storeTemp -1;
			default:			return 0;
		}
	}
	const storeTemp = createStore(counterTemp);

	const renderTemp = () => {
		if( document.querySelector('#textarea-0-3')){
			document.querySelector('#textarea-0-3').value = storeTemp.getState();
		}
	}	
	storeTemp.subscribe(renderTemp);
	renderTemp();
	
	//document.querySelector('body').addEventListener('click', () => {storeTemp.dispatch({type: 'INCREMENT'})});

//Pure JS basic example of Redux equivalent	  
	const onClickFunc = () => {
		
		if(empty(global.counter)){
			global.counter = 0;
		}
		global.counter++;
		document.querySelector('#textarea-0-3').value = global.counter;
		return;
	}
	//document.querySelector('.navbar').addEventListener('click', () => {onClickFunc()});	

	
//Another basic Redux example
	
	const toggleTodoTemp = (todo) => {
		/*
		return {
			id:			todo.id,
			text:		todo.text,
			completed:	!todo.completed
		};
		*/
		return Object.assign({},todo, {completed: !todo.completed});		
	}
	
	const todosTemp = (state = [], action) => {
		
		switch(action.type){
			case 'ADDED_TODO': 
				return [... state, {id: 0, text: action.text, completed: action.completed}];
			default: return state;
		}
		//Object.assign({},state,{id: 0, text: action.text, completed: action.completed})
	}
	
	
	
	
	
})();
	
	
	

	
	
	
//Define reducers
	global.feedback								=	{};
	let action;
	global.feedback.reducer						=	{};
	
/* ************ Define reducers ************ */

	//Reducer to add key-val to an object:	ADDED_OBJ_KEYVAL
	global.feedback.reducer.added_obj_keyVal = (state={}, action) => {
		
		if(action.elemName != undefined){
			const elemName	=	action.elemName.toString();		
			switch(action.type){
				case 'ADDED_OBJ_KEYVAL': 
					return Object.assign({},state,{[elemName]: action.elemValDefault})  
				default: return state;
			}
		}
		return state;
	}
	
	
	//Reducer to track form form creation, changing, deleting etc.
	global.feedback.reducer.manipulated_form = (state={}, action) => {
		
		//letsTest('reducer.manipulated_form', /* testId */ '', /* expect */ [action.id, action.objct], /* toEqual */ [] );
		if(	action.type === 'CREATED_ARRAY' && !state.created_array){
			 state.created_array = [];
		}
		if(	action.type === 'DEPLOYED_FORM' && !state.deployed_form){
			 state.deployed_form = [];
		}
		switch(action.type){
			case 'CREATED_ARRAY': 	return Object.assign({},state,
											{created_array: [...state.created_array, action.objct]});
			case 'DEPLOYED_FORM': 	return Object.assign({},state,
											{deployed_form: [...state.deployed_form, action.objct]});
			default: return state;
		}
	}
	
	
	//Reducer to track form form applying, using, etc.
	global.feedback.reducer.applied_form = (state=[], action) => {
		switch(action.type){
			case 'ADDED_CAPTURE':	return [...state, {id: action.id, type: action.type, form: action.form, formArr: action.formArr, content: action.content}];
			case 'RESET_FORM': 		return [...state, {id: action.id, type: action.type, form: action.form, formArr: action.formArr, content: action.content}];
			case 'SENT_MESSAGE': 	return [...state, {id: action.id, type: action.type, form: action.form, formArr: action.formArr, content: action.content}];
			default: return state;
		}
	}
		
/*	global.feedback.reducer */
	const reducersApp	=	combineReducers(
		global.feedback.reducer	
	);
	global.feedback.store		=	createStore(reducersApp);
	
	
		
/* ************ Define global object feedback			************ */
	(function(){
		
		//Add grlobal object feedback 
		
		action 	= {
			id:				0,
			type:			'ADDED_OBJ_KEYVAL',
			elemName: 		'host',
			elemValDefault:	location.host
		}
		global.feedback.store.dispatch(action);
		//Wrong: global.feedback.state = global.feedback.reducer.added_obj_keyVal(global.feedback.state, action);
		
		action 	= {
			id:				1,
			type:			'ADDED_OBJ_KEYVAL',
			elemName: 		'location',
			elemValDefault:	location.pathname
		}
		global.feedback.store.dispatch(action);
		//Wrong: global.feedback.state = global.feedback.reducer.added_obj_keyVal(global.feedback.state, action);
		
		
		
		//global.feedback.host					=	location.host;
		global.feedback.pathname				=	location.pathname;
		global.feedback.form					=	[];
	
		//letsTest('Define global object feedback', /* testId */ '', /* expect */ global.feedback, /* toEqual */ [] );

	
	})();	


/* ************ Define various functions ************ */	
	
//Define	Function to insert node if possible, if not - append
	global.feedback.insertAppendNode				=	function(parentNode, node, mode){
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
	

//Define	Function to insert node if possible, if not - append
	global.feedback.appendModalContainer			=	function(){
		//Add modalContainer for modal windows
		if(!document.querySelector('#modalContainer')){
			var parentNode	=	document.body || document.getElementsByTagName('body')[0];
			var node = document.createElement('div');
				node.setAttribute('id','modalContainer');
				node.setAttribute('name','myNameModalContainer');
				global.feedback.insertAppendNode(parentNode, node, 'append');
				
			var css =	'.modal-backdrop {display:none;visibility:hidden; position:relative;}' +
						'.modal{background-image: url("http://userto.com/img/BlackTransparentBackground.png");z-index:100;}';
			var	style = document.createElement('style');
				style.setAttribute('type','text/css');
				if (style.styleSheet){
				  style.styleSheet.cssText = css;
				} else {
				  style.appendChild(document.createTextNode(css));
				}
				global.feedback.insertAppendNode(node, style, 'append');				
		}
		return true;
	}
	global.feedback.appendModalContainer();

	
//Define	Function to clean feedback blocks	
	global.feedback.cleanFeedbackForm				=	function(f){
		
			//Loop through tag elements in the form
			for(var e = 0; e < global.feedback.form[f].elem.length; e++){			
						
				if(	global.feedback.form[f].elem[e].tagName === 'select' ||
					global.feedback.form[f].elem[e].tagName === 'input' ||
					global.feedback.form[f].elem[e].tagName === 'textarea'){
										
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
			
			global.feedback.store.dispatch({id: 0, type: 'RESET_FORM', form: f, content: 'Reset form'});
			
		return true;
	}

	
//Define	Function to fill feedback block with html content
	global.feedback.setFeedbackForm					=	() => {	
				
		//Unused. Call the function to set ini content for feedback forms
			if(	!empty(global.feedback.setFeedbackFormContent)	&&
				typeof	 global.feedback.setFeedbackFormContent.onChange 	=== "function"){
				//global.feedback.setFeedbackFormContent(); 
				//console.info(' global.feedback 1:',global.feedback);
			}
			else{
				//console.info(' global.feedback 2:',global.feedback);
				//return;
			}

		//console.info(' global.feedback 3:',global.feedback);

		/* Unused. Check if the url is right
		if( location.host		!=	global.feedback.host || 
			location.pathname	!=	global.feedback.pathname	){ return;}
		*/
		
		//console.info(' host:',location.host,' pathname:',location.pathname);
				
		//Loop through forms in the page
		for(var f = 0; f < global.feedback.form.length; f++){
			
			if(empty(global.feedback.form[f]) || empty(global.feedback.form[f].elem)){continue;}
		
			//console.info(' window:', window);
			//var letsTest = module.exports.letsTest();
			//letsTest('setFeedbackForm', /* testId */ '', /* expect */ global.feedback.form[f], /* toEqual */ [] );
		
			//Loop through tag elements in the form
			for(var e = 0; e < global.feedback.form[f].elem.length; e++){			

				var form = document.querySelector(".userto-form-" + f + "-elem-" + global.feedback.form[f].elem[e].id); //document.getElementById("form-" + f);			
					//See more: http://www.javascriptkit.com/dhtmltutors/css_selectors_api.shtml
					//console.info('form-',f,'-elem-',e,':',form);
				var string	=	'';				
			
				//Defence from absent elements in HTML or init object
				if(	empty(form) || empty(global.feedback.form[f].elem[e])){ continue; }

				//Add label tag with content, if it is
				if(	global.feedback.form[f].elem[e].tagName != 'button' &&
					global.feedback.form[f].elem[e].tagName != 'a'){	
					string	+=	'<label ';
						//Label tag css class and style
						if(!empty(global.feedback.form[f].elem[e].labelClass)){
							string	+=	'class="' + global.feedback.form[f].elem[e].labelClass + '" ';
						}
						if(!empty(global.feedback.form[f].elem[e].labelStyle)){
							string	+=	'style="' + global.feedback.form[f].elem[e].labelStyle + '" ';
						}
					string	+=	'>';
					string	+=	(!empty(global.feedback.form[f].elem[e].labelInnerHTML) ? 
										global.feedback.form[f].elem[e].labelInnerHTML : '');							
					string	+=	'</label>';
					//console.info(' string 1:',string);
				}
				
					//Block for select tag
					if( 	 global.feedback.form[f].elem[e].tagName == 'select') { 
						
						string	+=	'<select ';
						string	+=	'id="' + global.feedback.form[f].elem[e].tagName + '-' + f + '-' + global.feedback.form[f].elem[e].id + '" ';
						string	+=	(!empty(global.feedback.form[f].elem[e].tagSelectMultiple)  ? 'multiple ' :  '' ) +
								(global.feedback.form[f].elem[e].tagRequired === 'required' ? 'required ' :  '' );
							//Select tag css class and style
							if(!empty(global.feedback.form[f].elem[e].tagClass)){
								string	+=	'class="' + global.feedback.form[f].elem[e].tagClass + '" ';
							}
							if(!empty(global.feedback.form[f].elem[e].tagStyle)){
								string	+=	'style="' + global.feedback.form[f].elem[e].tagStyle + '" ';
							}
							if(!empty(global.feedback.form[f].elem[e].tagTitleTooltip)){
								string	+=	'data-toggle="tooltip" ';
								string	+=	'title="' + global.feedback.form[f].elem[e].tagTitleTooltip + '" ';
							}
						string	+=	'>';
						
							//console.info(' global.feedback.form[',f,'].elem[',e,'].tagOption:',global.feedback.form[f].elem[e].tagOption);
							//Loop through options in the select tag
							for(var o = 0; o < global.feedback.form[f].elem[e].tagOption.length; o++){

								var sel = '';
								
								if(!empty(global.feedback.form[f].elem[e].options)){
									if(	!empty	  (global.feedback.form[f].elem[e].options[o]) &&
										!emptyObj(global.feedback.form[f].elem[e].options[o])){
										if(!empty(global.feedback.form[f].elem[e].options[o].selected)){
											if(global.feedback.form[f].elem[e].options[o].selected === true){
												
												var sel = 'selected';
												
											}	
										}	
									}
								}
								
								string	+=	'<option ';
								string	+=	
									(!empty(global.feedback.form[f].elem[e].tagOption[o].selected ) ||
										sel === 'selected'  ? 
									'selected="selected">' :  '>' );
								string	+=	 global.feedback.form[f].elem[e].tagOption[o].optInnerHTML + 
											'</option>';
								
							}
							//End of the loop for option tag
			
						string	+=	'</select>';
					}
					//Block for input tag
					else if( global.feedback.form[f].elem[e].tagName === 'input') { 
						
						string	+=	'<input ';
						string	+=	'id="' + global.feedback.form[f].elem[e].tagName + '-' + f + '-' + global.feedback.form[f].elem[e].id + '" ';
						string	+=	(global.feedback.form[f].elem[e].tagRequired === 'required' ? 'required ' :  '' );
						//Input css class and style
						if(!empty(global.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + global.feedback.form[f].elem[e].tagClass + '" ';
						}
						if(!empty(global.feedback.form[f].elem[e].tagStyle)){
							string	+=	'style="' + global.feedback.form[f].elem[e].tagStyle + '" ';
						}
						string	+=	'type="'		+ global.feedback.form[f].elem[e].tagType + '" ';
						string	+=	(!empty(global.feedback.form[f].elem[e].tagPlaceholder) ? 
										'placeholder="'	+ global.feedback.form[f].elem[e].tagPlaceholder + '" ' : '');
						string	+=	(!empty(global.feedback.form[f].elem[e].tagValue) ? 
										'value="'	+ global.feedback.form[f].elem[e].tagValue + '" ' : '');
						if(!empty(global.feedback.form[f].elem[e].tagTitleTooltip)){
							string	+=	'data-toggle="tooltip" ';
							string	+=	'title="' + global.feedback.form[f].elem[e].tagTitleTooltip + '" ';
						}										
						string	+=	'/>';

					}						
					//Block for textarea tag
					else if( global.feedback.form[f].elem[e].tagName == 'textarea') { 
						
						string	+=	'<textarea ';
						string	+=	'id="' + global.feedback.form[f].elem[e].tagName + '-' + f + '-' + global.feedback.form[f].elem[e].id + '" ';
						string	+=	(global.feedback.form[f].elem[e].tagRequired === 'required' ? 'required ' :  '' );
						string	+=	(!empty(global.feedback.form[f].elem[e].tagPlaceholder) ? 
										'placeholder="'	+ global.feedback.form[f].elem[e].tagPlaceholder + '" ' : '');
						//Textarea css class and style
						if(!empty(global.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + global.feedback.form[f].elem[e].tagClass + '" ';
						}
						string	+=	'style="resize: both; overflow: hidden; ' + 
							(!empty(global.feedback.form[f].elem[e].tagStyle) ? 
									global.feedback.form[f].elem[e].tagStyle + '" ' : '" ');
						
						string	+=	(!empty(global.feedback.form[f].elem[e].tagValue) ? 
										'value="'	+ global.feedback.form[f].elem[e].tagValue + '" ' : '');
						if(!empty(global.feedback.form[f].elem[e].tagTitleTooltip)){
							string	+=	'data-toggle="tooltip" ';
							string	+=	'title="' + global.feedback.form[f].elem[e].tagTitleTooltip + '" ';
						}										
						string	+=	'>'; 
						string	+=	(global.feedback.form[f].elem[e].tagValue != undefined ? global.feedback.form[f].elem[e].tagValue :  '' );
						string	+=	'</textarea>';
					}
					//Block for button tag
					else if( 	global.feedback.form[f].elem[e].tagName == 'button') { 
						
						string	+=	'<button ';
						string	+=	'id="' + global.feedback.form[f].elem[e].tagName + '-' + f + '-' + global.feedback.form[f].elem[e].id + '" ';
						
						//Button css class and style
						if(!empty(global.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + global.feedback.form[f].elem[e].tagClass + '" ';
						}
						if(!empty(global.feedback.form[f].elem[e].tagStyle)){
							string	+=	'class="' + global.feedback.form[f].elem[e].tagStyle + '" ';
						}						
						if(!empty(global.feedback.form[f].elem[e].tagTitleTooltip)){
							string	+=	'data-toggle="tooltip" ';
							string	+=	'title="' + global.feedback.form[f].elem[e].tagTitleTooltip + '" ';
						}
						
						//Button to submit results only						
						if(global.feedback.form[f].elem[e].tagType === 'submit'){
							if(!empty(global.feedback.form[f].elem[e].modalNum)){
								string	+=	'data-dismiss="modal" ';
							}
						}
						//Button to call modal window only
						else if(global.feedback.form[f].elem[e].tagType === 'modal'){
							if(!empty(global.feedback.form[f].elem[e].modalNum)){
								
								string	+=	'data-toggle="modal" data-target="#userto-form-' + f + '-modal-' + 
											global.feedback.form[f].elem[e].modalNum + '" ';
								string	+=	'data-dismiss="modal" ';
							}											
								string	+=	'>';
						}
						//Button to submit results and call modal window
						else if(global.feedback.form[f].elem[e].tagType === 'submit-modal'){
							//string	+=	'onClick="alert(\'abc\')" ';						
							if(!empty(global.feedback.form[f].elem[e].modalNum)){
								string	+=	'data-toggle="modal" data-target="#userto-form-' + f + '-modal-' + 
											global.feedback.form[f].elem[e].modalNum + '" ';								

								string	+=	'data-dismiss="modal" ';			
							}							
								string	+=	'>';
						}
						else{
							string	+=	'>';
						}
						
						string	+=	global.feedback.form[f].elem[e].tagInnerHTML;
						string	+=	'</button>';
					}					
					//Block for a tag
					else if( 	global.feedback.form[f].elem[e].tagName == 'a') {					
						string	+=	'<a ';
						string	+=	'id="' + global.feedback.form[f].elem[e].tagName + '-' + f + '-' + global.feedback.form[f].elem[e].id + '" ';
						string	+=	'href="#" ';
						//a css class and style
						if(!empty(global.feedback.form[f].elem[e].tagClass)){
							string	+=	'class="' + global.feedback.form[f].elem[e].tagClass + '" ';
						}
						if(!empty(global.feedback.form[f].elem[e].tagStyle)){
							string	+=	'class="' + global.feedback.form[f].elem[e].tagStyle + '" ';
						}						
						if(!empty(global.feedback.form[f].elem[e].tagTitleTooltip)){
							string	+=	'data-toggle="tooltip" ';
							string	+=	'title="' + global.feedback.form[f].elem[e].tagTitleTooltip + '" ';
						}
						
						//a to submit results only						
						if(global.feedback.form[f].elem[e].tagType === 'submit'){
							if(!empty(global.feedback.form[f].elem[e].modalNum)){
								string	+=	'data-dismiss="modal" ';
							}
						}
						//a to call modal window only
						else if(global.feedback.form[f].elem[e].tagType === 'modal'){
							if(!empty(global.feedback.form[f].elem[e].modalNum)){								
								string	+=	'data-toggle="modal" data-target="#userto-form-' + f + '-modal-' + 
											global.feedback.form[f].elem[e].modalNum + '" ';
								string	+=	'data-dismiss="modal" ';
							}											
								string	+=	'>';
						}
						//a to submit results and call modal window
						else if(global.feedback.form[f].elem[e].tagType === 'submit-modal'){
							//string	+=	'onClick="alert(\'abc\')" ';						
							if(!empty(global.feedback.form[f].elem[e].modalNum)){
								string	+=	'data-toggle="modal" data-target="#userto-form-' + f + '-modal-' + 
											global.feedback.form[f].elem[e].modalNum + '" ';
								string	+=	'data-dismiss="modal" ';			
							}							
								string	+=	'>';
						}
						else{
							string	+=	'>';
						}
						
						string	+=	global.feedback.form[f].elem[e].tagInnerHTML;
						string	+=	'</a>';
					}					
					
					//Add footerInnerHTML div if it exist
					string	+=	(!empty(global.feedback.form[f].elem[e].footerInnerHTML) ? 
						'<footer' +
							(!empty(global.feedback.form[f].elem[e].footerClass) ?
							 ' class="' + global.feedback.form[f].elem[e].footerClass + '">' : '>') + 
							 global.feedback.form[f].elem[e].footerInnerHTML + 
						'</footer>' :  '' ); 

					//Add string with an element html
					document.querySelector('.userto-form-' + f + '-elem-' + global.feedback.form[f].elem[e].id).innerHTML	= string;		
					
						//console.info('document.querySelector(".userto-form-"',f,'"-elem-"',global.feedback.form[f].elem[e].id,')',
							//document.getElementById (global.feedback.form[f].elem[e].tagName + '-' + f + '-' + global.feedback.form[f].elem[e].id));
					
					//Attach events to buttons and a tags
					if(	!emptyObj(global.feedback.form[f]) && !empty(global.feedback.form[f].elem[e]) &&
						(global.feedback.form[f].elem[e].tagName === 'button' || 
						 global.feedback.form[f].elem[e].tagName === 'a')){
						
						(function (f, e) {
							var fVar 	=	f;
							var mVar	=	(global.feedback.form[f].elem[e].modalNum != undefined ? global.feedback.form[f].elem[e].modalNum : '');
							var tVar	=	global.feedback.form[f].elem[e].tagType;
							//letsTest('feedbackForm 01 fVar, mVar, tVar', /* testId */ '', /* expect */ [fVar, mVar, tVar], /* toEqual */ [] );
							
							if(		global.feedback.form[f].elem[e].tagType === 'reset'){
								//letsTest('feedbackForm 01 reset', /* testId */ '', /* expect */ [fVar, mVar, tVar], /* toEqual */ [] );
								document.querySelector('#' + global.feedback.form[f].elem[e].tagName + '-' + f + '-' + global.feedback.form[f].elem[e].id).
								addEventListener ("click", function(){global.feedback.cleanFeedbackForm(fVar);}, false);
							}
							//a to submit results only						
							else if(global.feedback.form[f].elem[e].tagType === 'submit' 		||
									global.feedback.form[f].elem[e].tagType === 'submit-modal'	){
								//letsTest('feedbackForm 01 submit-modal', /* testId */ '', /* expect */ [fVar, mVar, tVar], /* toEqual */ [] );		
								document.querySelector('#' + global.feedback.form[f].elem[e].tagName + '-' + f + '-' + global.feedback.form[f].elem[e].id).
								addEventListener ("click", function(){global.feedback.feedbackSend(fVar, mVar, tVar);}, false);
								//console.info('document.getElementById(',global.feedback.form[f].elem[e].tagName,'-',f,'-',global.feedback.form[f].elem[e].id,')',
								//document.getElementById (global.feedback.form[f].elem[e].tagName + '-' + f + '-' + global.feedback.form[f].elem[e].id));
							}
						
						})(f, e);
					}	
				
			}
			//End of loop over elements
			
			//letsTest('global.feedback.setFeedbackForm', /* testId */ '', /* expect */ [f, global.feedback.form[f]], /* toEqual */ [] );
			
			//Run reducer for 'DEPLOYED_FORM'
			global.feedback.store.dispatch({ type: 'DEPLOYED_FORM', id: f, objct:	global.feedback.form[f] });  
		}
		//End of loop over forms

		return true;
	}

	
//Define	Function to capture data from form-elements	into an array
	global.feedback.feedbackCaptureArray			= 	function(f){
		//console.info(' host:',host,' path:', path,' form:',form);
		
		var status					=	[];
		var querySelector			=	'div[class*="' + 'userto-form-' + f + '-"]';					
			//console.info(' querySelector:',querySelector);
				
		var formGroup				=	document.querySelectorAll(querySelector);
			//letsTest('1-st feedbackCaptureArray', /* testId */ '', /* expect */ [f, formGroup, global.feedback.form[f]], /* toEqual */ [] );
		
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
			if( !empty(selectArr) && !empty(selectArr[0]) && global.feedback.form[f].elem[e].tagName === 'select'){

				if(			selectArr[0].selectedIndex	=== -1	&&
							global.feedback.form[f].elem[e].tagRequired ===  'required'){
					var alertString	=
						'Please, check ' +  global.feedback.form[f].elem[e].labelInnerHTML + 
						'\n\nОтметьте проверьте пожалуйста ' +  global.feedback.form[f].elem[e].labelInnerHTML ;
					alert(alertString);
					status[ e]	= 	0;
				}
				else if(		selectArr[0].selectedIndex	=== -1	&&
							global.feedback.form[f].elem[e].tagRequired !=  'required'){
					global.feedback.form[f].elem[e].label		=	label;
					global.feedback.form[f].elem[e].tagValue	=	'No data';
					global.feedback.form[f].elem[e].string		=	global.feedback.form[f].elem[e].label + ' ' + 'No data';
					status[ e]	= 	1;
				}
				else{
				
					global.feedback.form[f].elem[e].options		=	[];
					//letsTest('feedbackCaptureArray 2', /* testId */ '', /* expect */ [selectArr[0].options], /* toEqual */ [] );
							
					//See more http://stackoverflow.com/questions/11583728/getting-the-selected-values-in-a-multiselect-tag-in-javascript/11583999#11583999
					for (var i = 0; i < selectArr[0].length; i++) {
						if (selectArr[0].options[i].selected === true) {
							
							global.feedback.form[f].elem[e].options[i] = {selected: true, value: selectArr[0].options[i].value};
							
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
															
					global.feedback.form[f].elem[e].label		=	label;
					global.feedback.form[f].elem[e].tagValue	=	selectedStr;			
					global.feedback.form[f].elem[e].string		=	global.feedback.form[f].elem[e].label + ' ' + 
																	global.feedback.form[f].elem[e].tagValue;
				
					status[ e]	= 	1;
				}										
														
			}

			//Block for input
			if(	!empty(inputArr) && !empty(inputArr[0]) && global.feedback.form[f].elem[e].tagName === 'input'){
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
				//Error empty field empty(inputArr[0].value) && global.feedback.form[f].elem[e].tagRequired ===
				else if(	empty(inputArr[0].value) && !empty(global.feedback.form[f].elem[e]) && 
							global.feedback.form[f].elem[e].tagRequired === 'tagRequired'){
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
						if( empty(global.feedback.form[f])){
							global.feedback.form[f] 		=	{};
							global.feedback.form[f].email	=	[];
							global.feedback.form[f].email[0]=	{};
						}
						global.feedback.form[f].email[0].toEmail		=	inputArr[0].value;
					}
				
					global.feedback.form[f].elem[e].label		=	label;
					global.feedback.form[f].elem[e].tagValue	=	inputArr[0].value;
					global.feedback.form[f].elem[e].string 		=	global.feedback.form[f].elem[e].label + ' ' + global.feedback.form[f].elem[e].tagValue;
					
					//letsTest('Input feedbackCaptureArray', /* testId */ '', /* expect */ [f, e, inputArr[0].value, global.feedback.form], /* toEqual */ [] );
				
					status[e]	= 	1;
				}
					
			}
			
			//Block for textarea
			if(	!empty(textareaArr) && !empty(textareaArr[0]) && global.feedback.form[f].elem[e].tagName === 'textarea'){
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
					
					global.feedback.form[f].elem[e].label		=	label;
					global.feedback.form[f].elem[e].tagValue	=	textareaArr[0].value;
					global.feedback.form[f].elem[e].string 		=	global.feedback.form[f].elem[e].label + ' ' + global.feedback.form[f].elem[e].tagValue;
					
					status[ e]	= 	1;
				}
				
			}

						
		}
		
		
		//Calculating statusFinal		
		var statusFinal =	true;
		for(var i = 0; i < status.length; i++){
			
			if(status[i] === 0){							
				statusFinal = false;
				break;
			}
		}
		
		//letsTest('status[i]', /* testId */ '', /* expect */ status, /* toEqual */ [] );
		
		return  statusFinal; 
	}


//Define	Function to process feedback capture array into string  
	global.feedback.feedbackCapture					=	function(f){
		
		//letsTest('feedbackCaptureString', /* testId */ '', /* expect */ [global.feedback.form[f]], /* toEqual */ [] );
		
		
		var capture			=	{};
			capture.str		=	'';
			capture.tlgrm	=	'';
			
		if(	!empty(global.feedback.form) && !empty(global.feedback.form[f]) &&
			!empty(global.feedback.form[f].email) && !empty(global.feedback.form[f].email[0]) &&
			!empty(global.feedback.form[f].email[0].userEmail)){
			capture.str		+=	'Email: ' + global.feedback.form[f].email[0].userEmail + '<br />';
		}

		for(var e = 0; e < global.feedback.form[f].elem.length; ++e){
			
			if(	!empty(global.feedback.form[f].elem[e]) && 
				global.feedback.form[f].elem[e].tagName != 'button' &&
				global.feedback.form[f].elem[e].tagName != 'a'){
				
				//console.info(global.feedback.form[f].email[0].toEmail.match(/^([\S]{1,})@([\S]{1,}).([^.]{2,})$/gi) );
								
				capture.str	+= ' ' + global.feedback.form[f].elem[e].string + '<br />';
				
				capture.tlgrm	+= '<i>' + global.feedback.form[f].elem[e].label + '</i> '  +
					' ' + global.feedback.form[f].elem[e].tagValue + '\n';				
			}
		}
		
		global.feedback.form[f].capture = capture;	
		
		
		
		global.feedback.store.dispatch({id: 0, type: 'ADDED_CAPTURE', form: f, formArr: global.feedback.form[f], content: capture.tlgrm});
		
		//letsTest('feedbackCaptureString', /* testId */ '', /* expect */ global.feedback.store.getState(), /* toEqual */ [] );
		
		return true;
	}
	
	
//Define	Function to send feedback
	global.feedback.feedbackSend					= 	function(f, m, t){
		/* input:	f	-	form number-index
					m	-	modul window number
					t	-	type of modal window
			output: return;
		*/
		//event.preventDefault();
		
		//letsTest('3-step feedbackSend global.feedback.form', /* testId */ '', /* expect */ [f, m, t,global.feedback], /* toEqual */ [] );
		
		if( typeof global.feedback === 'object' && typeof global.feedback.setFeedbackFormContent === 'function'){
			global.feedback.setFeedbackFormContent();
		}
		
		var feedbackCaptureArray	=	global.feedback.feedbackCaptureArray(f);
		
		//letsTest('3-step feedbackSend feedbackCaptureArray', /* testId */ '', /* expect */ feedbackCaptureArray, /* toEqual */ [] );
		
		if(feedbackCaptureArray	==	false){
			
			var parentModalWindow	=	document.querySelector('#modalContainer' );
			var modalWindow 			= 	document.querySelector('#userto-form-' + f + '-modal-' + m );

			//NEW global.feedback.cleanFeedbackForm();
			
			//console.info('1-step #userto-form-' + f + '-modal-' + m,' modalWindow:',modalWindow);
			
			//Remove modalWindow in order not to display in the case of input error
			if (!empty(modalWindow) && !empty(modalWindow.parentNode)) { modalWindow.parentNode.removeChild(modalWindow);} //?
			//console.info('2-step #userto-form-' + f + '-modal-' + m,' modalWindow:',modalWindow);

			
			//Restore modalWindow for the next step of input
			setTimeout(function(){
				
				if (!empty(parentModalWindow)) {
					
					global.feedback.insertAppendNode(parentModalWindow, modalWindow, 'insert'); //?
					global.feedback.setFeedbackForm();
					
					if(empty(global.feedback.form[f].modalStage)){global.feedback.form[f].modalStage = 0;}
					
					//letsTest('4-step global.feedback.feedbackSend f,m', /* testId */ '', /* expect */ {'name': '#userto-form-' + f + '-modalWindow-' + m, 'parentModalWindow': parentModalWindow}, /* toEqual */ [] );
					if(	m > 0){
						var mM1	=	(global.feedback.form[f].modalStage).toString();
						//letsTest('global.feedback.feedbackSend mM1', /* testId */ '', /* expect */ mM1, /* toEqual */ [] );
						jQuery('#userto-form-' + f + '-modal-' + mM1).modal("toggle");
					}
				}
			},100);
			
			//Terminate sending date from the form in the case of input error
			return true;
		}
		
		
		if(t === 'modal' && feedbackCaptureArray	!=	false){
			
			global.feedback.form[f].modalStage = m + 1;
			
		}
		
		
		global.feedback.feedbackCapture(f);
		//Stop sending email, if user does not fill all fields

		//console.info(' global.feedback.form[',f,']:',global.feedback.form[f]);
		//location.host
		//location.pathname.replace(/\//gim, '')


		/* ******************************************
		 * Part for message sending via Telegram
 		 ****************************************** */
		
		if(	empty(global.feedback.form[f].email[0].messageTlgrm)){ 
			global.feedback.form[f].email[0].messageTlgrm =	'';}
		
		//console.info(' global.feedback.form[',f,'].email[0].messageTlgrm Before:',global.feedback.form[f].email[0].messageTlgrm);
			global.feedback.form[f].email[0].messageTlgrm	+=							
				
					global.feedback.form[f].capture.tlgrm	+ '\n' +
	
					'Page:\n'					+
					global.feedback.host		+	
					global.feedback.pathname;					
									
				//'<a href="http://r1.userto.com/demoResizeFeedbackField.php" target="_blank">'+'Source site</a>';							
				

		//console.info(' global.feedback.form[',f,'].email[0]: After',global.feedback.form[f].email[0]);  

		
		/* ******************************************
		 * Part for email AND Telegram sending
 		 ****************************************** */
		
		if(	empty(global.feedback.form[f].email[0].message)){ 
			global.feedback.form[f].email[0].message =	'';}
		
		//console.info(' global.feedback.form[',f,'].email[0].message Before:',global.feedback.form[f].email[0].message);
			global.feedback.form[f].email[0].message	+=							
				'<br />' 	+
				'<br />' 	+
				'<p>' 		+
					global.feedback.form[f].capture.str	+
				'</p>'		+
				'<p style="">' 	+
					'Page: '					+
					global.feedback.host		+	
					global.feedback.pathname	+
				'</p>';					
									
		var txt	=		global.feedback.form[f].email[0].topic 		+ '\n' +				
						global.feedback.form[f].email[0].messageTlgrm;
		//console.info(' f',f,' global.feedback.form[f].email[0]:',global.feedback.form[f].email[0]);
		//global.feedback.form[f].email[0].toEmail = 't3531350@yahoo.com';

		//letsTest('feedbackSend 4-step ', /* testId */ '', /* expect */ [f, m, t,global.feedback.form], /* toEqual */ [] );
		jQuery.ajax({
			type: 			'POST',
			url: 			'http://userto.com/php/phpGetPost.php',
			data: {
				optPost:	global.feedback.form[f].email[0].optPost,
				emailTo:	global.feedback.form[f].email[0].toEmail,
				emailFrom:	global.feedback.form[f].email[0].fromEmail,
				emailBCC:	global.feedback.form[f].email[0].BCC,
				topic:		global.feedback.form[f].email[0].topic,				
				message:	global.feedback.form[f].email[0].message,
				chat_id:	global.feedback.form[f].email[0].chatId,
				txt:		txt,
				parse_mode: 'HTML'
			},
			dataType: 'text',
			success: function(echo){
					
					global.feedback.store.dispatch({id: 0, type: 'SENT_MESSAGE', form: f, formArr: global.feedback.form[f], content: global.feedback.form[f].email[0]});
					//letsTest('feedbackSend', /* testId */ '', /* expect */ global.feedback.store.getState(), /* toEqual */ [] );

					//Form reset
					global.feedback.setFeedbackForm();					
					global.feedback.cleanFeedbackForm(f);
					
					return true;
					//alert(echo);
					//console.info('email echo: ',echo);
				}
		});			
				
		return true;
	}	
	

/* Script in order Bootstrap tooltips work https://codepen.io/imoddesign/pen/laoAE  */
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


	setTimeout(function(){
		//letsTest('global.feedback.store', /* testId */ '', /* expect */ global.feedback.store.getState(), /* toEqual */ [] );
	},500);
	
	
	module.exports	= {empty, emptyObj};