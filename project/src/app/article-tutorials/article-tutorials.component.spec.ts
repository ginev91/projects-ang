import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTutorialsComponent } from './article-tutorials.component';

describe('ArticleTutorialsComponent', () => {
  let component: ArticleTutorialsComponent;
  let fixture: ComponentFixture<ArticleTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
