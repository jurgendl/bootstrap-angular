ng new bootstrap-angular
	USE scss
cd bootstrap-angular
delete .git folder
ng add @angular/material

package.json run: npm run COMMAND
direct run: ng build --base-href /rpg-blog/

deploy with PATH
	package.json:
	 	"build": "ng build --base-href /PATH/",
	appmodule:
	 	providers: [{provide: APP_BASE_HREF, useValue: '/PATH'}],
