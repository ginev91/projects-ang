import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { VideoTutorialsComponent } from './video-tutorials/video-tutorials.component';
import { ArticleTutorialsComponent } from './article-tutorials/article-tutorials.component';
import { BlogQuestionsComponent } from './blog-questions/blog-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    VideoTutorialsComponent,
    ArticleTutorialsComponent,
    BlogQuestionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
