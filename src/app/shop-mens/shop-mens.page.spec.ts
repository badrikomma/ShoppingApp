import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopMensPage } from './shop-mens.page';

describe('ShopMensPage', () => {
  let component: ShopMensPage;
  let fixture: ComponentFixture<ShopMensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopMensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
