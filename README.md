# hideable.js
###### By Nicolas Boisvert :: nicklay@me.com

### Hide simply, flexibly, beautifully, gigglittely and surprisingly nicely
- **Why simply**? Because you don't do js on your own (I did all the stuff so give a virtual high five),
- **Why flexibly**? Beacause you can modify any class/prop name easily to prevent interference with you present work.
- **Why beautifully** ? Because it uses jQuery to do all the stuff and the magical magic behind (Go high five the jQuery team).
- **Why gigglittely** ? Because well, you know...
- **Why surprisingly** ? Because you'll be like "What? But why... how..." Eh?
- **Why nicely** ? Because it's 1 include (assuming you use jQuery), 4 words (kind of) and the stuff is done.

I would like to thank anyone who helped me doing this :
- My cat Louise, for biting my hand and sitting on my keyboard.
- Tidge, beacause I thought "Hey is it cool?" and he said "That's cool".

## Last release
#### Version 1.1

- Added the possibility to defined closed element by default
- Added Styles to your class element

## Installation
Link the js file (Note that the path of the file may be different for you)
```html
<script type="text/javascript" src="/js/hideable/hideable.js"></script>
```
Now we have two things ; A caller and a target (Of course you can use Some caller to some target also, depends on your needs)
```html
<button class="hides" data-hides="socks_box">I am a caller</button>
<div class="hideable" data-hides="socks_box">
    This is a box containing stuff like your socks
</divl>
```
By default the caller needs class ```hides``` and the target needs class ```hideable```. When you'll target a click event on the ```hides``` element, the ```hideable``` element will slide up/down depending on his states matched by the ```data-hides``` attributes

It could've been anything but I selected a button

And its done.

## Customization
It may be possible that ```hides```, ```hideable``` or the ```data-hides``` are already used class on your stuff. If you open the ```hideable.js``` file, you'll see an object called ```opts```.

```js
var opts = {
		event:'click',
		classes:{
			caller:'hides',
			target:'hideable',
		},
		props:{
			caller:'hides',
			state:'hidden',
			slides:'slides',
			slideSpeed:'slideSpeed',
			default:'default',
		},
		styles:{
			caller:{
				cursor:'pointer',
			},
			target:{},
		},
		slides:true,
		slideSpeed: 500,
		withStyle:true,
		log:false,
	}
```
These properties can be modified to fit your needs heres how : 
- ```event``` : The event that will trigger the hides, could be any jquery events that you can ship to the ```.on()``` method.
- ```classes``` : You can rename thoses classes for something else
  * ```caller``` : Represent the classe of the element that'll trigger the event
  * ```target``` : Guess what? It's the one who'll slides on the event
- ```props``` : The property you can add your your targets to do special stuffs. Here you will defin the name (you can switch them if needed)
  * ```caller``` : The property to match the caller and the target (In this case it'll be ```data-hides=""```)
  * ```state``` : The property to set the states of of the element
  * ```slides``` : We haven't talkded about it yet, but if you set this attribute (```data-slides``` in hour case). Down there you'll see a global slide to prevent adding it to all of your element
  * ```slideSpeed``` : Used if you use the ```slides``` property, you can enter any and different speed from a target to another.
  * ```default``` : The default property is used to define if an element is closed by default by adding the value ```closed``` to the property, and tada! Magic!
- ```styles``` : You can define some styles that'll be applied to the respective ```class``` values.
  * ```caller``` : Will apply the style (Which is by default the cursor to pointer) to all of your caller class
  * ```target``` : Will apply the style to all of your target class
- ```slides``` : This is the global slides I was talking. Any target will act depending on this value except if you override it with the attributes in you html
- ```slideSpeed``` : The default speed, this also prevent rewriting the speed attribute everywhere
- ```withStyle``` : If you don't want any style to be applied, turn this off
- ```log``` : If you wanna see what's going on, you can set this to true and everything will be console logged, well, it may reduces the performances of the so it's not recommanded in production

If you want to add stylable classes, you have to add them to you ```class``` object and your ```styles``` object. If you don't you'll broke everything and you may get mad.

## Conclusion

Thank you for using it and feel free to contact me for any question.

Ending joke : 
> **Q** : Why did the programmer quit his job ? **A** : Because he didn't get arrays. (a raise)
