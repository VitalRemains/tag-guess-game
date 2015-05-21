$(document).ready(function() {
	
	setTimeout(function() {
		/*
		if ($('body').find('.item-container').length == 0 && getCookie('randomPost') == 'true') {
			var rand = getRandomPostNumber();
			window.location.href = 'http://pr0gramm.com/top/' + rand;
		} else {
			setCookie('randomPost', 'false');
		}
		*/
		$(document).keydown(function(e) {
			if(!$('#ptgg_inputTag').is(':focus') && !$('textarea.comment').is(':focus')) {
				if(e.which == '78') {
					$('#ptgg_tagCountNumber').click();
				}
				if(e.which == '72') {
					$('#ptgg_showTags').click();
				}
				if(e.which == '82') {
					$('#ptgg_randomPost').click();
				}
				if(e.which == '73') {
					e.preventDefault();
					$('#ptgg_inputTag').focus();
				}
			} else {
				if(e.which == '73' && e.ctrlKey) {
					e.preventDefault();
					$('#ptgg_inputTag').blur();
				}
			}
		});
	}, 1000);
	
	var div = $('<div>', {
		'id': 'ptgg_wrapper'
	});
	
	var showTags = $('<a>', {
		'id': 'ptgg_showTags'
	}).html('S<u>h</u>ow Tags')
		.click(function() {
			$('div.tags').css('visibility', 'visible');
			$('span.action.tags-expand').click();
			$.each($('div.tags').find('span.tag'), function(index, item) {
				$(item).css('visibility', 'visible');
			});
			$('a.add-tags-link').css('visibility', 'visible');
		})
		.appendTo(div);
	
	div.append('<br/><br/>');
	
	var inputTag = $('<textarea>', {
		'id': 'ptgg_inputTag',
		'placeholder': 'Input Tags with ,(Comma)'
	}).keypress(function(e) {
		if(e.which == 13) {
			e.preventDefault();
			var inputTagArray = $('#ptgg_inputTag').val().split(',');
			var alertText = '';
			var shouldAlert = false;
			var lastVisibleGreaterFour = false;
			$.each($('div.tags').find('a.tag-link'), function(index, item) {
				$.each(inputTagArray, function(index_i, item_i) {
					item_i = $.trim(item_i);
					if($(item).text().toLowerCase() == item_i.toLowerCase()) {
						shouldAlert = true;
						alertText += 'Position ' + (index+1) + ': ' + item_i + '\n';
						$(item).parent().css('visibility', 'visible');
						if(index >= 4) {
							lastVisibleGreaterFour = true;
						}
					}
				});
			});
			if(shouldAlert) {
				alert(alertText);
				$('div.tags').css('visibility', 'visible');
				if(lastVisibleGreaterFour) {
					$('span.action.tags-expand').click();	
				}
			}
			return false;
		}
	}).appendTo(div);
	
	/*
	var hideTags = $('<a>', {
		'id': 'ptgg_hideTags'
	}).text('Hide Tags')
		.click(function() {
			$('.item-tags').css('visibility', 'hidden');
		})
		.appendTo(div);
	*/
	
	div.append('<br/><br/>');
	
	var randomPost = $('<a>', {
		'id': 'ptgg_randomPost'
	}).html('<u>R</u>andom Post')
		.click(function() {
			getRandomVisiblePost();
			/*
			if(getCookie('randomPost') == '' || getCookie('randomPost') == 'false') {
				setCookie('randomPost', 'true');
				var rand = getRandomPostNumber();
				window.location.href = 'http://pr0gramm.com/top/' + rand;
			} else {
				setCookie('randomPost', 'false');
			}
			*/
		})
		.appendTo(div);
	
	div.append('<br/><br/>');
	
	/*
	var tagCount = $('<input>', {
		'type': 'checkbox',
		'id': 'ptgg_tagCount',
	}).change(function() {
		if($(this).is(':checked')) {
			$('#ptgg_tagCountNumber').show();
		} else {
			$('#ptgg_tagCountNumber').hide();
		}
	}).appendTo(div);
	
	var tagCountLabel = $('<label>', {
		'for': 'ptgg_tagCount',
		'id': 'ptgg_tagCountLabel'
	}).text(' Show Tag Count')
		.appendTo(div);
	*/
	
	//div.append('<br/>');
	
	var tagCountNumber = $('<a>', {
		'id': 'ptgg_tagCountNumber'
	}).html('Get Tag Cou<u>n</u>t')
		.click(function() {
			alert('Tags: ' + $('div.tags').find('a.tag-link').length);
		})
		.appendTo(div);
		
	var author = $('<div>', {
		'id': 'ptgg_author'
	}).text('© Daniel Destruktiv');
		
	$('body').append(div).append(author);
	
});

/*
function getRandomPostNumber() {
	return Math.floor(Math.random() * (803000 - 700000) + 700000);
}
*/

function getRandomVisiblePost() {
	var silentThumbs = $('a.silent.thumb');
	var randomPost = Math.floor(Math.random()*silentThumbs.length);
	window.location.href = $(silentThumbs[randomPost]).attr('href');
}

/*
function setTagCountNumber() {
	$('#ptgg_tagCountNumber').text($('div.tags').find('a.tag-link').length);
}
*/

/*
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
*/