import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MixDashPage } from './mix-dash.page';

describe('MixDashPage', () => {
  let component: MixDashPage;
  let fixture: ComponentFixture<MixDashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixDashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MixDashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
