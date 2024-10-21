/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'dep\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-check': '&#xe900;',
		'icon-check-circle': '&#xe903;',
		'icon-chevrons-right': '&#xe901;',
		'icon-clock': '&#xe90a;',
		'icon-database': '&#xe904;',
		'icon-edit-2': '&#xe905;',
		'icon-help-circle': '&#xe906;',
		'icon-info': '&#xe907;',
		'icon-map-pin': '&#xe908;',
		'icon-phone': '&#xe909;',
		'icon-search': '&#xe902;',
		'icon-settings': '&#xe90c;',
		'icon-thumbs-down': '&#xe90d;',
		'icon-thumbs-up': '&#xe90e;',
		'icon-trash-2': '&#xe90b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
