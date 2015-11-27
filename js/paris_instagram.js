$(function() {

	var apiurl = "https://api.instagram.com/v1/tags/paris/media/recent?access_token=3988329.bbfcc4a.d95c7a5cfc3346beaa0472c8bf59c963&callback=?"
	var access_token = location.hash.split('=')[1];
	var html = ""

		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});


		function parseData(json){
			console.log(json);

			$.each(json.data,function(i,data){
				html += '<p>Filter:"'+ data.filter+'"</p>';
				html += '<img src ="' + data.images.low_resolution.url + '">'
			});

			console.log(html);
			$("#instagram").append(html);

		}

 });
