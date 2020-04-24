import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustlistPage } from './custlist.page';

describe('CustlistPage', () => {
  let component: CustlistPage;
  let fixture: ComponentFixture<CustlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
