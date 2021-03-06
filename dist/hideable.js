/**
 * hideable.js	//	Hide simply,flexibly,beautifully,gigglittely and surprisingly nicely
 *
 * Author : Nicolas Boisvert //	nicklayb :: nicolas.boisvert@icloud.com
 * Version 1.1
 */

$(function(){
	//	These options are configurations. You can modify those if some class or prop names inteferes with your current work
	var opts = {
		//	Which event will trigger the hides
		event:'click',
		//	Classes to use hideable
		classes:{
			//	Class of the element that will hide the target
			caller:'hides',
			//	Class of the element being targetted by the caller
			target:'hideable',
		},
		//	Props are property you gives to element. Props with * are necessary on your elements ex : data-hidden="your_stuff"
		props:{
			//	*	Property to match caller and target
			caller:'hides',
			//	*	Property for the state
			state:'hidden',
			//	Override the default slides
			slides:'slides',
			//	Override the speed of the slide
			slideSpeed:'slideSpeed',
			//	Default state of the hideable element, set this property to "closed" if you want it to be closed by default
			default:'default',
		},
		//	Define default style for your classes elements. Define them as you would pass object to jquery css method
		//		You could add any other class but you must have defined them in the class object also
		styles:{
			//	Class for the caller
			caller:{
				cursor:'pointer',
			},
			//	Class for the target
			target:{},
		},
		//	Do you want the element to slide or not
		slides:true,
		//	Setup the speed of the slides
		slideSpeed: 500,
		//	Define if you want to apply the styles defined to elements
		withStyle:true,
		//	Returns the data attributes
		data:function(opt){
			return 'data-'+this.props[opt];
		},
		//	Returns if the data attributes is true
		dataTrue:function(elem,opt){
			return (($(elem).attr(this.data(opt)) !== undefined) ? ($(elem).attr(this.data(opt)) == true || $(elem).attr(this.data(opt)) == 'true') : undefined);
		},
		//	Return if thr data attributes is null
		dataNull:function(elem,opt){
			return (($(elem).attr(this.data(opt)) !== undefined && $(elem).attr(this.data(opt)) != '') ? $(elem).attr(this.data(opt)) : undefined);
		},
		//	Apply styles to element
		applyStyles:function(){
			$.each(this.styles, function(i,v){
				$('.'+opts.classes[i]).css(opts.styles[i]);
			});
		},
		//	Log out what's going on (reduces performances)
		log:false,
	}
	$(document).ready(function(){
		$('.'+opts.classes.target+'['+opts.data('default')+'="closed"]').hide().attr(opts.data('state'), true);
		if(opts.withStyle){
			opts.applyStyles();
		}
		opts.applyStyles();
		$('.'+opts.classes.caller).on(opts.event, function(){
			if(opts.log){console.log('triggered');}
			var name = $(this).attr(opts.data('caller')),
				targets = $('.'+opts.classes.target+'['+opts.data('caller')+'="'+name+'"]');
			$.each(targets, function(i,target){
				var slides = opts.slides,
				slideSpeed = opts.slideSpeed;
				_slides = opts.dataTrue($(target),'slides');
				_slideSpeed = opts.dataNull($(target),'slideSpeed');
				if(_slides !== undefined){
					slides = _slides;
				}
				if(_slideSpeed !== undefined){
					slideSpeed = parseInt(_slideSpeed);
				}
			if(opts.log){
				console.log('name : ');
				console.log(name);
				console.log('target : ');
				console.log($(target));
				console.log('slides : ');
				console.log(slides);
				console.log('slideSpeed : ');
				console.log(slideSpeed);
			}
			if(opts.dataTrue($(target),'state')){
				if(opts.log){console.log('element was hidden');}
				(slides) ? $(target).slideDown(slideSpeed) : $(target).show();
				$(target).attr(opts.data('state'), false);
				if(opts.log){console.log('element is shown');}
			}
			else{
				if(opts.log){console.log('element was shown');}
				(slides) ? $(target).slideUp(slideSpeed) : $(target).hide();
				$(target).attr(opts.data('state'), true);
				if(opts.log){console.log('element is hidden');}
			}
			if(opts.log){console.log('ended');}
			});
		});
	})
});