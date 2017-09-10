import { Component,OnInit } from '@angular/core';
import{GetQuoteService} from './getquote.service';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quote:Quote;
isActive=false;
colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
color:string;
  constructor(private getQuote:GetQuoteService){}
  ngOnInit(){

  	this.getQuote.getData().then(data=>{
  		
  		console.log(data["hitokoto"]);
  		console.log(data["from"]);
  		this.quote={text:data["hitokoto"],author:data["from"]};
         this.isActive=true;
         var n = Math.floor(Math.random() * this.colors.length);
        this.color=this.colors[n];
        console.log(this.color);
  	});
  }
  update(){
  	this.isActive=false;
  	this.getQuote.getData().then(data=>{
  		this.quote={text:data["hitokoto"],author:data["from"]};
        this.isActive=true;
        var n = Math.floor(Math.random() * this.colors.length);
        this.color=this.colors[n];
        console.log(this.color);
  	});
  }
  tweet(){
  	window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+ encodeURIComponent('"' + this.quote.text + '" ' + this.quote.author),'_blank');
  }
  tumblr(){
  	window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(this.quote.author)+'&content=' + encodeURIComponent(this.quote.text)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button','_blank');

  }


}
