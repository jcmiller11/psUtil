function reverseString(str) {
    return str.split("").reverse().join("");
}
function flipHorizontal(str) {
	lines = str.split("\n");
	lines = lines.map(function(line) { 
	  return reverseString(line);
	});
	return lines.join("\n");
}
function flipVertical(str) {
	return str.split("\n").reverse().join("\n");
}
//TODO: rewrite function below
//I'm sure there is a cleaner way and it doesn't handle trailing whitespace as well as it could
function rotate(str) {
	lines = str.split("\n");
	spunArray = new Array();
	longest = 0;
	lines.forEach(function(line) {
		if(line.length>longest) {
			longest = line.length;
		}
	})
	lines = lines.map(function(line) {
		return line.padEnd(longest);
	})
	for(let y = 0;y<longest;y++) {
		spunArray[y] = new Array();
		for(let x = 0;x<lines.length;x++) {
			spunArray[y][x]=lines[x].charAt(y);
		}
	}
	lines = spunArray.map(function(line) {
		return line.join("");
	})
	return flipHorizontal(lines.join("\n"));
}
function changeInput(theFunction) {
	$('#input').val(theFunction($('#input').val()))
}