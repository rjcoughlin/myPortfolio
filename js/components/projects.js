 $(function(){
        $("#projects").elastic_grid({
            'showAllText' : 'All',
            'items' :
            [
                {
                    'title'         : 'Ferrari',
                    'description'   : 'A digitaly illustrated Ferrari 458 Italia created using Illustrator and Photoshop. This project required a lot of color analysis and attention to detail.',
                    'thumbnail'     : ['img/small/ferrari.png', 'img/small/ferrariReal.png', 'img/small/ferrariWire.png'],
                    'large'         : ['img/large/ferrari.png', 'img/large/ferrariReal.png', 'img/large/ferrariWire.png'],
                    'button_list'   :
                    [
                        { 'title':'View', 'url' : 'img/realism.pdf' }
                    ],
                    'tags'          : ['Graphic Design']
                },
				
				{
                    'title'         : 'Andrew Vilaysak',
                    'description'   : 'Andrew Vilaysak is a very talented Bay Area photographer. I made him this responsive website for my interface design class.',
                    'thumbnail'     : ['img/small/andy.png', 'img/small/andyMobile.png'],
                    'large'         : ['img/large/andy.png', 'img/large/andyMobile.png'],
                    'button_list'   :
                    [
                        { 'title':'Site', 'url':'img/andrew/index.html'},
						{ 'title':'Tumblr', 'url':'http://andrewvilaysak.tumblr.com/'}
                    ],
                    'tags'          : ['Web Design']
                },
				               
				{
                    'title'         : 'Spitfire Wheels Ad',
                    'description'   : ' One of the first projects I ever made in school, this advertisment of Spitfire Wheels was made for my concept design class, using Photoshop and InDesign.',
                    'thumbnail'     : ['img/small/spitfireAd.png', 'img/small/spitfireWeb01.png', 'img/small/spitfireWeb.png'],
                    'large'         : ['img/large/spitfireAd.png', 'img/large/spitfireWeb01.png', 'img/large/spitfireWeb.png'],					
                    'button_list'   :
                    [
                        { 'title':'Process', 'url' : 'img/spitfire.pdf' }
                    ],
                    'tags'          : ['Graphic Design', 'Web Design', 'Photography']
                },
				              
				{
                    'title'         : 'Solar',
                    'description'   : 'Solar is a informational mobile application about all the planets revolving around our sun. I designed it for my mobile interface design class.',
                    'thumbnail'     : ['img/small/solar.png', 'img/small/solarNav.png', 'img/small/solarJup.png'],
                    'large'         : ['img/large/solar.png', 'img/large/solarNav.png', 'img/large/solarJup.png'],
                    'button_list'   :
                    [
                        { 'title':'InVision', 'url' : 'http://invis.io/Q21NMRZV5' },
                        { 'title':'Process Book', 'url':'img/solar.pdf'}
                    ],
                    'tags'          : ['Web Design', 'Graphic Design']
                },
				
				{
                    'title'         : 'MT. AIR',
                    'description'   : 'Mt. Air is a fictitious airline company I created for my corporate identity class. It was designed with U.S. heritage in mind. The project contains stationery, 3D applications and a signature manual.',
                    'thumbnail'     : ['img/small/mtair.png', 'img/small/mtairSite.png', 'img/small/mtairWall.png', 'img/small/mtairCard.png', 'img/small/mtairLetter.png'],
                    'large'         : ['img/large/mtair.png', 'img/large/mtairSite.png', 'img/large/mtairWall.png', 'img/large/mtairCard.png', 'img/large/mtairLetter.png'],
                    'button_list'   :
                    [
                        { 'title':'Standards Manual', 'url':'img/mtair.pdf'}
                    ],
                    'tags'          : ['Web Design', 'Graphic Design']
                },
				
				{
                    'title'         : 'Hacker Helper',
                    'description'   : 'UNFINISHED PROJECT: Hacker Helper is a application that will allow developers of all experience levels to go and find code examples and syntax. The app will focus on front-end development langauges and libraries and basic design principles. <br><br> TEAM: Minnie Tantiphipop and Alexander Orr',
                    'thumbnail'     : ['img/small/hh.png', 'img/small/hhNav.png',  'img/small/hhBack.png'],
                    'large'         : ['img/large/hh.png', 'img/large/hhNav.png', 'img/large/hhBack.png'],
                    'button_list'   :
                    [
                        { 'title':'Prototype', 'url':'http://www.alexsmander.aisites.com/hackerhelper/index.html'},
						{ 'title':'Invision', 'url':'https://projects.invisionapp.com/share/9W2H2RITN#/screens'},
						{ 'title':'Process Book', 'url':'img/hh.pdf'}
                    ],
                    'tags'          : ['Web Design']
                },
				
				{
                    'title'         : 'Art of War',
                    'description'   : '3D typography is a book jacket project I did for my concept design class. The phase "3D typography" was melted togeather by more than 20 green plastic army men, then pasted to a laminated book jacket created using InDesign.',
                    'thumbnail'     : ['img/small/book.png', 'img/small/bookCover.png', 'img/small/bookStore.png'],
                    'large'         : ['img/large/book.png', 'img/large/bookCover.png', 'img/large/bookStore.png'],
                    'button_list'   :
                    [
                        { 'title':'PDF', 'url' : 'img/bookCover.pdf' }
                    ],
                    'tags'          : ['Graphic Design']
                }, 
				
				{
                    'title'         : 'Arlen Ness Motorcycles',
                    'description'   : 'I worked at Arlen Ness for a year as a jr. Graphic Designer. At Arlen Ness, I had to design dealer emails every month for part specials and also print flyers. I also would outline the product and add shadows so it would be ready for the website and catalog.',
                    'thumbnail'     : ['img/small/arlen.png', 'img/small/arlenCat.png', 'img/small/arlenCat2.png'],
                    'large'         : ['img/large/arlen.png', 'img/large/arlenCat.png', 'img/large/arlenCat2.png'],
                    'button_list'   :
                    [
                        { 'title':'PDF', 'url':'img/arlenCat.pdf'}
                    ],
                    'tags'          : ['Graphic Design']
                },
				
				{
                    'title'         : '35mm project',
                    'description'   : 'My good friend Andrew Vilaysak, has let me borrow his Canon AE-1. Him and I went to various locations of the Bay Area and I took some picture.',
                    'thumbnail'     : ['img/small/ae-2.png', 'img/small/ae-5.png',  'img/small/ae-4.png', 'img/small/ae-3.png',  'img/small/ae-1.png'],
                    'large'         : ['img/large/ae-2.png', 'img/large/ae-5.png', 'img/large/ae-4.png', 'img/large/ae-3.png', 'img/large/ae-1.png'],
                    'button_list'   :
                    [
                        { 'title':'My Tumblr', 'url':'http://occhi-aperto.tumblr.com/'}
                    ],
                    'tags'          : ['Photography']
                }
				
            ]
        });
    });
