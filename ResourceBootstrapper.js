/*
Author:		Chris Eby
Company:	JBS, Inc.
License:	GNU General Public License, version 3 (GPL-3.0)
Version:	1.0.2
*/
(function () {
	this.Version = "unknown";
	this.Resources = new Array();
	
	/// <summary>
	/// Cycles through the Resources and loads them into the DOM.
	/// </summary>
	this.load = function () {
		
		if (!this.Resources)
			return;
		
		setTimeout(function () {
			
			var element = null;
			var firstTagOfType = null;
			
			for (var index = 0; index < this.Resources.length; index++) {
				element = document.createElement(this.Resources[index].Type);
				
				if (this.Resources[index].Type == "script") {
					element.type = "text/javascript";
					element.async = true;
					element.src = this.Resources[index].Path + (this.Resources[index].Path.indexOf('?') >= 0 ? "&" : "?") + "version=" + this.Version;
					
					if (this.Resources[index].Properties && this.Resources[index].Properties.Defer)
						element.defer = this.Resources[index].Properties.Defer;
				}
				else if (this.Resources[index].Type == "img") {
					element.height = (this.Resources[index].Properties && this.Resources[index].Properties.Height ? this.Resources[index].Properties.Height : 1);
					element.width = (this.Resources[index].Properties && this.Resources[index].Properties.Width ? this.Resources[index].Properties.Width : 1);
					element.alt = (this.Resources[index].Properties && this.Resources[index].Properties.Alt ? this.Resources[index].Properties.Alt : "");
					
					if (this.Resources[index].Properties && this.Resources[index].Properties.Align)
						element.align = this.Resources[index].Properties.Align;
					
					if (this.Resources[index].Properties && this.Resources[index].Properties.Border)
						element.border = this.Resources[index].Properties.Border;
					
					element.src = this.Resources[index].Path;
				}
				
				firstTagOfType = (this.Resources[index].Properties && this.Resources[index].Properties.PlaceholderId
					? document.getElementById(this.Resources[index].Properties.PlaceholderId)
					: document.getElementsByTagName(this.Resources[index].Type)[0]);
				
				firstTagOfType.parentNode.insertBefore(element, firstTagOfType);
			}
			
		}, 0);
		
	};
	
	/// <summary>
	/// Add a new resource into the resources list
	/// </summary>
	/// <param name="pathToResource">The path to the resource. Required.</param>
	/// <param name="type">The type of resource to add. Defaults to "script" if not supplied. NOT Required.</param>
	/// <param name="properties">Additional properties that should be set on a given element (ex. height, width). NOT Required.</param>
	this.add = function (/*string*/pathToResource, /*string*/type, /*json*/properties) {
		
		if (!pathToResource)
			return false;
		
		if (!type || type == "")
			type = "script";
		
		if (!this.Resources || this.Resources.length == 0)
			this.Resources = new Array({ "Path": pathToResource, "Type": type, "Properties": properties });
		else
			this.Resources[this.Resources.length] = { "Path": pathToResource, "Type": type, "Properties": properties };
		
		return true;
		
	};
	
	ResourceBootstrapper = this;
})();