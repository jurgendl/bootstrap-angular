import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from "./material/material.module";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainContentComponent} from './component/main-content/main-content.component';

@NgModule({
	declarations: [
		AppComponent,
		MainContentComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		HttpClientModule,
	],
	exports: [
	],
	providers: [
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
