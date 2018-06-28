var app = angular.module("contactApp", []);
app.controller("contactController", contactController);

function contactController() {
    this.contacts = [
        { 
            "gender": "male", 
            "name": { 
                "title": "mr", 
                "first": "mustafa", 
                "last": "bayındır" 
            }, 
            "location": { 
                "street": "1078 abanoz sk", 
                "city": "şırnak", 
                "state": "manisa", 
                "postcode": 98325, 
                "coordinates": { 
                    "latitude": "70.0941", 
                    "longitude": "-15.3661" 
                }, 
                "timezone": { 
                    "offset": "+4:00", 
                    "description": "Abu Dhabi, Muscat, Baku, Tbilisi" 
                } 
            }, 
            "email": "mustafa.bayındır@example.com", 
            "login": { 
                "uuid": "a3916e8f-606b-456b-8ced-9030c283f89f", 
                "username": "tinysnake617", 
                "password": "rsalinas", 
                "salt": "AbASvzTs", 
                "md5": "b11786b1bf23c8f7e2174a984e4c5b54", 
                "sha1": "c6eb859b6160ac789f00390c4be255e0fa6143bb", 
                "sha256": "1376d2feb0699a7617ee882698bbaaba486e8d72c9dbfee859b64341214984ec" 
            }, 
            "dob": { 
                "date": "1946-04-18T03:19:22Z", 
                "age": 72 
            }, 
            "registered": { 
                "date": "2006-03-28T20:54:25Z", 
                "age": 12 
            }, 
            "phone": "(715)-295-6988", 
            "cell": "(080)-197-4259", 
            "id": { 
                "name": "", 
                "value": null 
            }, "picture": { 
                "large": "https://randomuser.me/api/portraits/men/5.jpg", 
                "medium": "https://randomuser.me/api/portraits/med/men/5.jpg", 
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg" 
            }, 
            "nat": "TR" 
        }
    ];
}