ResourceBootstrapper
====================

#### Overview

The resource bootstrapper aims at keeping 3rd party references in check. This allows the 3rd party reference to be loaded in such a way that it doesn't affect the user's experience with the site even if there is an issue with the 3rd party script or getting to that script.

#### Getting Started

Add a reference to the ResourceBootstrapper:
<script type="text/javascript" src="ResourceBootstrapper.min.js"></script>

Add some resources to load up:
ResourceBootstrapper.add("/some/path/to/a/script.js");
ResourceBootstrapper.add("//another/path/to/some/other/script.js");
ResourceBootstrapper.add("//path/to/some/sweet/image.png", "img", {
		Width: 265,
		Height: 314,
		PlaceholderId: "whereverTheImageShouldGo"
	});

Attach the load function to the window load event to keep it from blocking the page load time:
if (window.attachEvent) {
	window.attachEvent("onload", ResourceBootstrapper.load);
}
else {
	window.addEventListener("load", ResourceBootstrapper.load, false);
}

Enjoy!