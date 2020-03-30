import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutUsPage } from './about-us.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AboutUsPage', () => {
  let component: AboutUsPage;
  let fixture: ComponentFixture<AboutUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      // imports: [IonicModule.forRoot()]
    }).compileComponents();    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


  





