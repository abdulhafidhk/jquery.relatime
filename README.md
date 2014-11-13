jquery.relatime
===============
simple jquery plugin for display relative time

Code Example
============
HTML:
```html
  <div class="rela" title="1992-10-13"></div>
	<div class="rela" title="2013-10-13"></div>
	<span class="rela" title="2014-3-1 11:15:00"></span>
	<span class="rela" title="2014-9-13 2:01:00"></span>
	<p class="rela" title="2014-11-13 14:35:00"></p>
	<p class="rela" title="2014-11-12 14:30:00"></p>
```
Javascript:
```javascript
  $(".rela").jRelatime();
  // or
	$(".rela").jRelatime({
		multiFormat:true
	});
	//or
	$(".rela").jRelatime({
		multiFormat:true,
		string:{
			postfix: ' yang lalu',
			second: ' detik ',
			minute: ' menit ',
			hour: ' jam ',
			day: ' hari ',
			month: ' bulan ',
			year: ' tahun ',
			more: ' lampau '
		}
	});
```

Options
=======
* printTitle: boolean,
* multiFormat: boolean,
* maxYears: number,
* string.postfix: 'string', # default: ago
* string.second: 'string', # default: second
* string.minute: 'string', # default: minute
* string.hour: 'string', # default: hour
* string.day: 'string', # default: day
* string.month: 'string', # default: month
* string.year: 'string', # default: year
* string.more: 'string', # default: past (more than maxYears)

Result
======
```
  // example
  1 year ago
  8 month ago
  2 month ago
  8 hour ago
  1 day ago
  // Multi Format
  22 year 4 month ago
  1 year 1 month ago
  8 month 5 day ago
  2 month ago
  8 hour 6 minute ago
  1 day 3 hour ago
  // change language/string
  lampau
  1 tahun 1 bulan yang lalu
  8 bulan 5 hari yang lalu
  2 bulan yang lalu
  8 jam 6 menit yang lalu
  1 hari 3 jam yang lalu

```

License
=======
MIT License
