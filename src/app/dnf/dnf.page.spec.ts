import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DnfPage } from './dnf.page';

describe('DnfPage', () => {
  let component: DnfPage;
  let fixture: ComponentFixture<DnfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DnfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
