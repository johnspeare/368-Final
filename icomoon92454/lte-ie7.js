/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-coffee' : '&#x63;',
			'icon-thumbs-up' : '&#x74;',
			'icon-bolt' : '&#x7a;',
			'icon-switch' : '&#x70;',
			'icon-weather' : '&#x72;',
			'icon-shuffle' : '&#x77;',
			'icon-thumbs-up-2' : '&#x75;',
			'icon-link' : '&#x6c;',
			'icon-accessibility' : '&#x6d;',
			'icon-rocket' : '&#x6a;',
			'icon-mug' : '&#x76;',
			'icon-keyboard' : '&#x6b;',
			'icon-pacman' : '&#x73;',
			'icon-headphones' : '&#x64;',
			'icon-quill' : '&#x66;',
			'icon-home' : '&#x68;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};