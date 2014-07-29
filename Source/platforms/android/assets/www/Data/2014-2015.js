jsonLoader.result = {

	"title" : "Judaism and the History of Play",

	//Inside of sections, we store all of the sections of content for this year.
	//Do not change this name.
	"sections" : {

		//The name of a section can be anything you like.
		//Sections mark divisions within the content viewer
		"Cave" : {
			
			//Do not change this name.
			"unlockables": {

				//The name of an unlockable can be anything you like.
				"Unlock 1": {
					//The ID of the trigger that unlocks this content.
					"id": 0,
					//The URL of the HTML page or section it unlocks.
					"url": "Data/2014-2015/myContent.html",
				},

				"Unlock 2": {
					"id": 1,
					"url": "Data/2014-2015/myContent2.html",
				},
			},
		},

		//Add more of your sections here...

		"Section 2": {
			"unlockables": {
				"UnlockMe": {
					"id": 30,
					"url": "Data/2014-2015/myContent.html",
				},
				"UnlockMe2": {
					"id": 40,
					"url": "Data/2014-2015/myContent.html",
				},
			},
		},
	},

};

jsonLoader.onresult();

