ResourceBootstrapper
====================

#### Overview

The resource bootstrapper aims at keeping 3rd party references in check. This allows the 3rd party reference to be loaded in such a way that it doesn't affect the user's experience with the site even if there is an issue with the 3rd party script or getting to that script.

#### Getting Started

Add a reference to the ResourceBootstrapper:
<div>
<script type="text/javascript" src="ResourceBootstrapper.min.js"></script>
</div>

Add some resources to load up:
<div>
ResourceBootstrapper.add("/some/path/to/a/script.js");<br />
ResourceBootstrapper.add("//another/path/to/some/other/script.js");<br />
ResourceBootstrapper.add("//path/to/some/sweet/image.png", "img", {<br />
		Width: 265,<br />
		Height: 314,<br />
		PlaceholderId: "whereverTheImageShouldGo"<br />
	});<br />
</div>

Attach the load function to the window load event to keep it from blocking the page load time:
<div>
if (window.attachEvent) {<br />
	window.attachEvent("onload", ResourceBootstrapper.load);<br />
}<br />
else {<br />
	window.addEventListener("load", ResourceBootstrapper.load, false);<br />
}<br />
</div>

Enjoy!